import * as React from "react";
import { Button, Popover } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [email, setEmail] = React.useState("hello@example.com");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Popover title="Project details" trigger={<Button variant="outline">Project details</Button>} style={{ borderRadius: 20, borderColor: "var(--hulmio-primary)" }}><p>Review your project details here.</p></Popover><p role="status">{message}</p></div>
    </div>
  );
}
