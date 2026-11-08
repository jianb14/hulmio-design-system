import * as React from "react";
import { ScrollShadow } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [edges, setEdges] = React.useState({ top: false, bottom: false, left: false, right: false });
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><ScrollShadow aria-label="Chapters" maxHeight={200} onVisibilityChange={setEdges}><div style={{ display: "grid", gap: 16 }}>{Array.from({ length: 20 }, (_, index) => <p key={index}>Chapter {index + 1}: A considered approach to everyday work.</p>)}</div></ScrollShadow><p role="status">More above: {edges.top ? "yes" : "no"}; more below: {edges.bottom ? "yes" : "no"}</p></>
    </div>
  );
}
