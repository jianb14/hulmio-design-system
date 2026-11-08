import * as React from "react";
import { Accordion } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [expanded, setExpanded] = React.useState<string[]>(["delivery"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Accordion items={[{ id: "delivery", title: "When will my order arrive?", content: "Standard delivery takes three to five business days." }, { id: "returns", title: "Can I return an item?", content: "Return unused items within thirty days." }, { id: "support", title: "How do I contact support?", content: "Our team is available Monday through Friday." }]} expandedKeys={expanded} onExpandedChange={setExpanded} /><p role="status">Expanded: {expanded.join(", ") || "none"}</p></>
    </div>
  );
}
