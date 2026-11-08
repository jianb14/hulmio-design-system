import * as React from "react";
import { TagGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [items,setItems] = React.useState([{id:"design",label:"Design"},{id:"engineering",label:"Engineering"},{id:"research",label:"Research"}]);
  const [selected,setSelected] = React.useState<"all" | Set<string | number>>(new Set(["design"]));
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TagGroup label="Project tags" items={items} selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected} /><output>{selected === "all" ? "All selected" : Array.from(selected).join(", ")}</output>
    </div>
  );
}
