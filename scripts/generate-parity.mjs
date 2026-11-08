import assert from "node:assert/strict";
import { readFile, writeFile as writeFileDirect, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

async function writeFile(target, data) {
  try { if (await readFile(target, "utf8") === data) return; } catch (error) { if (error.code !== "ENOENT") throw error; }
  return writeFileDirect(target, data);
}

const root = fileURLToPath(new URL("../", import.meta.url));
const snapshot = JSON.parse(await readFile(path.join(root, "docs/research/heroui-v3.2.7-coverage.json"), "utf8"));
const definitions = [];
for (const domain of ["actions", "forms", "display", "overlays", "extras"]) {
  const { buildDomain } = await import(pathToFileURL(path.join(root, `scripts/parity/${domain}.mjs`)).href);
  definitions.push(...buildDomain(snapshot));
}
const slugify = value => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const manifestPath = path.join(root, "scripts/parity/legacy-manifest.json");
let legacy;
try { legacy = JSON.parse(await readFile(manifestPath, "utf8")); }
catch (error) {
  if (error.code !== "ENOENT") throw error;
  const baseline = JSON.parse(await readFile(path.join(root, ".superpowers/sdd/2026-11-06-heroui-parity/baseline-registry.json"), "utf8"));
  legacy = [];
  for (const [family, entry] of Object.entries(baseline.libraryFamilies)) {
    for (const design of entry.designs) {
      const file = `${family}/legacy-${slugify(design.name)}.tsx`;
      await mkdir(path.dirname(path.join(root, "src/examples", file)), { recursive: true });
      await writeFile(path.join(root, "src/examples", file), `${design.code.trim()}\n`);
      legacy.push({ family, name: design.name, exportName: design.exportName, file });
    }
  }
  await writeFile(manifestPath, JSON.stringify(legacy, null, 2) + "\n");
}

const entries = new Map();
// Multiple examples mount together; labels and descriptions need local DOM IDs.
function isolateIds(source) {
  const referenced = new Set([...source.matchAll(/\b(?:htmlFor|aria-describedby|aria-labelledby)="([^"]+)"/g)].flatMap(match => match[1].split(/\s+/)));
  const panels = [...source.matchAll(/<ResizablePanel\b[^>]*\bid="([^"]+)"/g)].map(match => match[1]);
  for (const id of panels) referenced.add(id);
  if (!referenced.size) return { source, setup: "" };
  for (const id of panels) source = source.replace(new RegExp(`([,{])\\s*${id}\\s*:`, "g"), `$1[exampleId + ${JSON.stringify("-" + id)}]:`);
  return {
    source: source.replace(/\b(id|htmlFor|aria-describedby|aria-labelledby)="([^"]+)"/g, (match, attribute, value) => {
      const ids = value.split(/\s+/);
      return ids.every(id => referenced.has(id)) ? `${attribute}={${ids.map(id => `exampleId + ${JSON.stringify("-" + id)}`).join(' + " " + ')}}` : match;
    }),
    setup: "const exampleId = React.useId();",
  };
}
for (const definition of definitions) {
  const { family, referenceId, title, imports, icons, extraImports = "" } = definition;
  const isolated = isolateIds(definition.body);
  const body = isolated.source;
  const setup = [isolated.setup, definition.setup].filter(Boolean).join("\n");
  assert(family && title && imports && body, `Incomplete example: ${JSON.stringify(definition)}`);
  const slug = definition.slug ?? `${referenceId && referenceId !== family ? referenceId + "-" : ""}${slugify(title)}`;
  const id = `${referenceId ?? family}--${slugify(title)}`;
  assert(!entries.has(id), `Duplicate example ${id}`);
  const file = `${family}/${slug}.tsx`;
  const isolatedBody = /<(RadioCard|RadioGroup|Rating)\b/.test(body) && !/<(form|Form)\b/.test(body) ? `<form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}>${body}</form>` : body;
  const needsReact = /React\./.test(setup + body);
  const code = `${needsReact ? 'import * as React from "react";\n' : ""}import { ${imports} } from "hulmio-ui";\n${icons ? `import { ${icons} } from "lucide-react";\n` : ""}${extraImports ? extraImports.trim() + "\n" : ""}import "hulmio-ui/styles.css";\n\nexport default function Example() {\n${setup ? setup.split("\n").map(line => line.trim() ? "  " + line : "").join("\n") + "\n" : ""}  return (\n    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>\n      ${isolatedBody}\n    </div>\n  );\n}\n`;
  await mkdir(path.dirname(path.join(root, "src/examples", file)), { recursive: true });
  await writeFile(path.join(root, "src/examples", file), code);
  entries.set(id, { family, id, name: title, exportName: imports.split(",")[0].trim().split(/\s+as\s+/)[0], sourcePath: file, referenceId, code });
}
for (const item of legacy) {
  if ([...entries.values()].some(entry => entry.family === item.family && entry.name === item.name)) continue;
  let code = await readFile(path.join(root, "src/examples", item.file), "utf8");
  const isolated = isolateIds(code);
  if (isolated.setup) {
    code = isolated.source.replace(/(export default function \w+\(\) \{)/, `$1\n  ${isolated.setup}`);
    if (!code.includes('import * as React from "react"')) code = 'import * as React from "react";\n' + code;
    await writeFile(path.join(root, "src/examples", item.file), code);
  }
  if (/<(RadioCard|RadioGroup|Rating)\b/.test(code) && !/<(form|Form)\b/.test(code)) {
    code = code.replace("return (", 'return (<form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}>').replace(/\n  \);\n}/, "\n    </form>\n  );\n}");
    await writeFile(path.join(root, "src/examples", item.file), code);
  }
  const id = `${item.family}--legacy-${slugify(item.name)}`;
  entries.set(id, { family: item.family, id, name: item.name, exportName: item.exportName, sourcePath: item.file, code });
}
for (const reference of snapshot.heroComponents) {
  for (const section of reference.requiredSections) {
    assert.equal([...entries.values()].filter(entry => entry.referenceId === reference.id && entry.name === section.title).length, 1, `${reference.id}/${section.title} is not implemented exactly once.`);
  }
}
for (const family of snapshot.hulmioAdditionalCoverage) {
  for (const title of family.requiredSections) assert([...entries.values()].some(entry => entry.family === family.id && entry.name === title), `Missing ${family.id}/${title}`);
}

const dedicated = {
  "close-button": ["Close button", "Actions", "Dismiss content with a clearly labeled action.", ["CloseButton"]],
  link: ["Link", "Navigation", "Navigate with clear text and optional icons.", ["Link"]],
  "disclosure-group": ["Disclosure group", "Display", "Coordinate related expandable sections.", ["DisclosureGroup"]],
  "checkbox-group": ["Checkbox group", "Selection", "Choose several options with shared validation.", ["CheckboxGroup"]],
  description: ["Description", "Forms", "Connect supporting instructions to a form control.", ["Description"]],
  "error-message": ["Error message", "Forms", "Explain errors with accessible, useful messages.", ["ErrorMessage"]],
  "field-error": ["Field error", "Forms", "Display validation messages for the connected field.", ["FieldError"]],
  fieldset: ["Fieldset", "Forms", "Group related controls with a shared legend.", ["Fieldset"]],
  "search-field": ["Search field", "Forms", "Search with a clear action and connected feedback.", ["SearchField"]],
  "text-field": ["Text field", "Forms", "Compose labeled text fields with validation.", ["TextField"]],
  "date-field": ["Date field", "Forms", "Edit date segments with keyboard and locale support.", ["DateField"]],
  "time-field": ["Time field", "Forms", "Edit hours, minutes and seconds in your locale.", ["TimeField"]],
  "color-area": ["Color area", "Selection", "Adjust two color channels with a precise thumb.", ["ColorArea"]],
  "color-field": ["Color field", "Forms", "Enter and validate color values.", ["ColorField"]],
  "color-slider": ["Color slider", "Selection", "Adjust individual color channels.", ["ColorSlider"]],
  "color-swatch": ["Color swatch", "Display", "Preview colors, including transparency.", ["ColorSwatch"]],
  autocomplete: ["Autocomplete", "Selection", "Filter and choose from a searchable collection.", ["Autocomplete"]],
  "tag-group": ["Tag group", "Selection", "Select and remove tags as one accessible collection.", ["TagGroup"]],
  surface: ["Surface", "Layout", "Compose content on a themed surface.", ["Surface"]],
  sheet: ["Sheet", "Overlays", "Open a movable panel with usable snap positions.", ["Sheet"]],
};
const families = {};
for (const entry of snapshot.existingHulmioInventory) families[entry.id] = { exports: entry.exports, designs: [] };
for (const [id, info] of Object.entries(dedicated)) families[id] = { exports: info[3], designs: [] };
for (const [id, exports] of Object.entries({
  "number-input": ["NumberField"],
  calendar: ["SegmentedDatePicker", "SegmentedDateRangePicker"],
  "color-picker": ["ComposedColorPicker"],
  "input-group": ["InputGroupTextarea"],
  progress: ["ProgressCircle"],
  toast: ["ToastProvider", "ToastQueue", "toast"],
})) families[id].exports = [...new Set([...families[id].exports, ...exports])];
const imports = [];
for (const [index, entry] of [...entries.values()].entries()) {
  assert(families[entry.family], `Unknown family ${entry.family}`);
  const { family, code, ...metadata } = entry;

  families[family].designs.push({ ...metadata, code });
}
assert.equal(Object.keys(families).length, 104);
const registry = JSON.stringify(families, null, 2);
await writeFile(path.join(root, "src/lib/parityExamples.ts"), `// Generated by scripts/generate-parity.mjs from actual TSX examples.\nimport type { LibraryFamily } from "./distribution";\n${imports.join("\n")}\n\nexport const parityFamilies: Record<string, LibraryFamily> = ${registry};\n`);
await writeFile(path.join(root, "src/lib/parityCatalog.ts"), `// Dedicated additions; existing component routes are retained.\nimport type { ComponentEntry } from "./catalog";\n\nexport const parityCatalog: ComponentEntry[] = ${JSON.stringify(Object.entries(dedicated).map(([id, [name, category, description]]) => ({ id, name, category, description, variants: families[id].designs.map(design => design.name), notes: "Use the examples and public props below to compose this component in your app." })), null, 2)};\n`);
await mkdir(path.join(root, "docs"), { recursive: true });
await writeFile(path.join(root, "docs/HEROUI-IMPLEMENTATION.json"), JSON.stringify({ referenceCommit: snapshot.reference.commit, status: "implemented-unverified", familyCount: 104, exampleCount: entries.size, targets: [...entries.values()].map(({ id, family, name, referenceId, sourcePath }) => ({ id, family, name, referenceId, sourcePath, status: "awaiting-behavior-verification" })) }, null, 2) + "\n");
console.log(`Generated ${entries.size} source-backed examples across ${Object.keys(families).length} families.`);
