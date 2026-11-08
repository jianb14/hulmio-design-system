import { useState } from "react";
import { CommandPalette, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open commands</Button>
      <CommandPalette open={open} onOpenChange={setOpen} items={[{ id: "components", label: "Browse components", onSelect: () => { location.hash = "/components"; } }, { id: "docs", label: "Read the docs", onSelect: () => { location.hash = "/using-hulmio"; } }]} />
    </>
  );
}
