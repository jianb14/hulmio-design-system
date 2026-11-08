import * as React from "react";
import { Button, DropdownMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [selected, setSelected] = React.useState<string[]>(["design"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><DropdownMenu trigger={<Button variant="outline">Project actions</Button>} selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected} items={[{ id: "design", label: "Design" }, { id: "engineering", label: "Engineering" }, { id: "research", label: "Research" }]} onAction={key => setMessage("Selected " + key)} /><p>Selected: {selected.join(", ") || "none"}</p><p role="status">{message}</p></div>
    </div>
  );
}
