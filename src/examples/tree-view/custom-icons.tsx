import * as React from "react";
import { TreeView } from "hulmio-ui";
import { Folder } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [selected, setSelected] = React.useState<string[]>([]); const [expanded, setExpanded] = React.useState<string[]>(["src"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TreeView label="Project files" items={[{ id: "src", label: "Source", icon: <Folder size={16} aria-hidden="true" />, children: [{ id: "button", label: "Button.tsx" }, { id: "input", label: "Input.tsx", disabled: false }] }, { id: "readme", label: "README.md" }]} selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected} expandedKeys={expanded} onExpandedChange={setExpanded} /><output>Selected: {selected.join(", ") || "none"}</output>
    </div>
  );
}
