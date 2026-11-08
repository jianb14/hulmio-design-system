import * as React from "react";
import { Button, Popover } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [email, setEmail] = React.useState("hello@example.com");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Popover title="Project details" trigger={<Button variant="outline">Project details</Button>} >{({ close }) => <Button onClick={() => { setMessage("Project pinned"); close(); }}>Pin project and close</Button>}</Popover><p role="status">{message}</p></div>
    </div>
  );
}
