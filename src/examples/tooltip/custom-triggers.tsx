import * as React from "react";
import { Button, Tooltip } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Tooltip content="Save your work" ><a href="#save" onClick={event => { event.preventDefault(); setMessage("Saved locally"); }}>Save project</a></Tooltip><p role="status">{message}</p></div>
    </div>
  );
}
