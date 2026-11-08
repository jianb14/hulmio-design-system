import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import { Spinner } from "hulmio-ui";

const modules = import.meta.glob<{ default: ComponentType }>("../examples/**/*.tsx");
const renderers = Object.fromEntries(Object.entries(modules).map(([path, load]) => [path.replace("../examples/", ""), lazy(load)]));

export function SourceExample({ sourcePath }: { sourcePath: string }) {
  const Example = renderers[sourcePath];
  if (!Example) throw new Error(`Missing example source: ${sourcePath}`);
  return <Suspense fallback={<Spinner label="Loading example" />}><div className="library-source-example" data-source-example={sourcePath}><Example /></div></Suspense>;
}
