import ts from "typescript";
import { readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const directory = path.join(root, "packages/ui/src");
const files = (await readdir(directory)).filter(name => /\.tsx?$/.test(name)).map(name => path.join(directory, name));
const options = { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext, moduleResolution: ts.ModuleResolutionKind.Bundler, jsx: ts.JsxEmit.ReactJSX, strict: true, skipLibCheck: true, noEmit: true, resolveJsonModule: true, esModuleInterop: true };
const program = ts.createProgram(files, options);
const checker = program.getTypeChecker();
const interfaces = {};
const defaults = {};
function bindings(node, component) {
  if (!node) return;
  if (ts.isObjectBindingPattern(node)) for (const element of node.elements) {
    if (element.initializer && ts.isIdentifier(element.name)) (defaults[component] ??= {})[element.name.text] = element.initializer.getText();
  }
}
for (const filename of files) {
  const source = program.getSourceFile(filename);
  for (const node of source.statements) {
    if (ts.isFunctionDeclaration(node) && node.name) bindings(node.parameters[0]?.name, node.name.text);
    if (ts.isVariableStatement(node)) for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name)) continue;
      const component = declaration.name.text;
      function visit(child) {
        if (ts.isArrowFunction(child) || ts.isFunctionExpression(child)) bindings(child.parameters[0]?.name, component);
        ts.forEachChild(child, visit);
      }
      if (declaration.initializer) visit(declaration.initializer);
    }
  }
}
for (const filename of files) {
  const source = program.getSourceFile(filename);
  for (const node of source.statements) {
    if ((!ts.isInterfaceDeclaration(node) && !ts.isTypeAliasDeclaration(node)) || !node.name.text.endsWith("Props")) continue;
    const component = node.name.text.slice(0, -5);
    interfaces[node.name.text] = checker.getPropertiesOfType(checker.getTypeAtLocation(node)).filter(symbol => {
      const declaration = symbol.valueDeclaration ?? symbol.declarations?.[0];
      if (!declaration) return false;
      const filename = declaration.getSourceFile().fileName.replaceAll("\\", "/");
      return !filename.includes("/typescript/lib/") && !filename.includes("/@types/react/") && !filename.includes("/@types/react-dom/");
    }).map(symbol => {
      const declaration = symbol.valueDeclaration ?? symbol.declarations[0];
      return { name: symbol.name, type: checker.typeToString(checker.getTypeOfSymbolAtLocation(symbol, declaration), declaration, ts.TypeFormatFlags.NoTruncation).replace(/\s+/g, " "), required: !(symbol.flags & ts.SymbolFlags.Optional), defaultValue: defaults[component]?.[symbol.name], description: ts.displayPartsToString(symbol.getDocumentationComment(checker)) };
    });
  }
}
await writeFile(path.join(root, "src/lib/componentApi.ts"), `// Generated from actual public Props types by scripts/generate-api.mjs.\nexport const componentApi: Record<string, { name: string; type: string; required: boolean; defaultValue?: string; description?: string }[]> = ${JSON.stringify(interfaces, null, 2)};\n`);
console.log(`Extracted ${Object.keys(interfaces).length} complete public prop interfaces.`);
