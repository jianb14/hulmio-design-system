import * as React from "react";
import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>{(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Button key={size} size={size} onClick={() => setMessage(size.toUpperCase() + " selected.")}>Button {size.toUpperCase()}</Button>)}</div><output role="status">{message}</output>
    </div>
  );
}
