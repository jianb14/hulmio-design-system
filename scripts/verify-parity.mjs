import assert from "node:assert/strict";
import { readFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { collectLibrary } from "./collect-library.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const scratch = path.join(root, ".superpowers/sdd/2026-11-06-heroui-parity/coverage-check");
await mkdir(scratch, { recursive: true });
const snapshot = JSON.parse(await readFile(path.join(root, "docs/research/heroui-v3.2.7-coverage.json"), "utf8"));
const { libraryFamilies } = await collectLibrary(root, scratch);
const allDesigns = Object.values(libraryFamilies).flatMap(family => family.designs);
for (const design of allDesigns) {
  assert(design.id && design.sourcePath, `${design.name}: missing stable source identity.`);
  const source = await readFile(path.join(root, "src/examples", design.sourcePath), "utf8");
  assert.equal(design.code, source, `${design.id}: copyable source differs from the rendered module.`);
  assert(source.includes('from "hulmio-ui"'), `${design.id}: must use the public package.`);
  assert(!source.includes("eval("), `${design.id}: source must not be evaluated.`);
}
let checked = 0;
for (const reference of snapshot.heroComponents) {
  const designs = Object.values(libraryFamilies).flatMap(family => family.designs).filter(design => design.referenceId === reference.id);
  for (const section of reference.requiredSections) {
    const matches = designs.filter(design => design.name === section.title);
    assert.equal(matches.length, 1, `${reference.id}/${section.title}: requires one source-backed example.`);
    const design = matches[0];
    assert(design.sourcePath && design.id, `${reference.id}/${section.title}: missing stable source identity.`);
    const source = await readFile(path.join(root, "src/examples", design.sourcePath), "utf8");
    assert.equal(design.code, source, `${design.id}: copyable source differs from the rendered module.`);
    assert(source.includes('from "hulmio-ui"'), `${design.id}: must use the public package.`);
    assert(!source.includes("eval("), `${design.id}: source must not be evaluated.`);
    checked++;
  }
}
for (const family of snapshot.hulmioAdditionalCoverage) {
  for (const name of family.requiredSections) assert(libraryFamilies[family.id]?.designs.some(design => design.name === name && design.sourcePath), `${family.id}/${name}: missing source-backed example.`);
}
const ids = Object.values(libraryFamilies).flatMap(family => family.designs.map(design => design.id));
assert.equal(new Set(ids).size, ids.length, "Example IDs must be globally unique.");
assert.equal(Object.keys(libraryFamilies).length, 104, "Preserve 84 families and add 20 dedicated counterparts.");
console.log(`Verified ${checked} HeroUI target sections, ${snapshot.hulmioAdditionalCoverage.length} additional family checklists, ${ids.length} source-backed examples and 104 families.`);
