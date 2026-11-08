import { build } from "vite";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

/** Bundle the actual example registry, including imported additions and variants. */
export async function collectLibrary(root, directory) {
  const previousNodeEnv = process.env.NODE_ENV;
  const result = await build({
    configFile: false,
    logLevel: "error",
    build: {
      write: false,
      minify: false,
      lib: { entry: path.join(root, "src/lib/distribution.ts"), formats: ["es"] },
    },
  });
  if (previousNodeEnv === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = previousNodeEnv;
  const outputs = Array.isArray(result) ? result : [result];
  const entry = outputs.flatMap(output => output.output).find(output => output.type === "chunk" && output.isEntry);
  if (!entry) throw new Error("Library example registry did not produce an entry module.");
  await mkdir(directory, { recursive: true });
  const target = path.join(directory, "example-registry.mjs");
  await writeFile(target, entry.code);
  return import(`${pathToFileURL(target).href}?v=${Date.now()}`);
}
