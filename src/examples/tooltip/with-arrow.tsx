import * as React from "react";
import { Button, Tooltip } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Tooltip content="Save your work" showArrow><Button variant="outline" onClick={() => setMessage("Saved locally")}>Save</Button></Tooltip><p role="status">{message}</p></div>
    </div>
  );
}
