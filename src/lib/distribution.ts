import manifest from "../../packages/ui/package.json" with { type: "json" };
import { parityFamilies } from "./parityExamples";

export const localPackage = {
  name: manifest.name,
  version: manifest.version,
  filename: `hulmio-ui-${manifest.version}.tgz`,
  stage: "Local preview",
};

export type LibraryDesign = {
  name: string;
  exportName: string;
  code: string;
  id?: string;
  sourcePath?: string;
  referenceId?: string;
};
export type LibraryFamily = { exports: string[]; designs: LibraryDesign[]; limit?: string };

export const libraryFamilies: Record<string, LibraryFamily> = parityFamilies;
export const packageComponents: Record<string, string> = Object.fromEntries(
  Object.entries(libraryFamilies).map(([id, value]) => [id, value.exports[0]]),
);
export const exampleCount = Object.values(libraryFamilies).reduce((count, family) => count + family.designs.length, 0);

export const firstExample = `import { Button, Input, Modal, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div>
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Modal
        title="Your first Hulmio modal"
        description="The same components you see in the gallery."
        trigger={<Button>Open example</Button>}
      >
        <DialogClose asChild>
          <Button variant="outline">Got it</Button>
        </DialogClose>
      </Modal>
    </div>
  );
}`;
