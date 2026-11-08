import * as React from "react";
import { TagGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [items,setItems] = React.useState([{id:"design",label:"Design"},{id:"engineering",label:"Engineering"},{id:"research",label:"Research"}]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TagGroup label="Project tags" items={items} selectionMode="multiple" renderTag={(item,state) => <span>{state.isSelected ? "✓ " : ""}{item.label}</span>} />
    </div>
  );
}
