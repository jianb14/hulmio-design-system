import * as React from "react";
import { ListBox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [selected, setSelected] = React.useState<string[]>(["design"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><ListBox label="Team" options={[{ id: "design", label: "Design", description: "Create thoughtful experiences" }, { id: "engineering", label: "Engineering", description: "Build reliable products" }, { id: "research", label: "Research", description: "Understand customer needs" }]} selectedKeys={selected} onSelectionChange={setSelected} /><p role="status">Selected: {selected.join(", ")}</p></>
    </div>
  );
}
