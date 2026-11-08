import * as React from "react";
import { Button, Tooltip } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>{(["top", "right", "bottom", "left"] as const).map(side => <Tooltip key={side} side={side} content={side + " tooltip"}><Button variant="outline" onClick={() => setMessage(side + " action")}>{side}</Button></Tooltip>)}<p role="status">{message}</p></div>
    </div>
  );
}
