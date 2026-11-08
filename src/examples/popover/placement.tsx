import * as React from "react";
import { Button, Popover } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [email, setEmail] = React.useState("hello@example.com");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>{(["top", "right", "bottom", "left"] as const).map(side => <Popover key={side} title="Project details" side={side} trigger={<Button variant="outline">{side}</Button>}><Button onClick={() => setMessage(side + " action")}>Pin project</Button></Popover>)}<p role="status">{message}</p></div>
    </div>
  );
}
