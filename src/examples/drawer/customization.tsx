import * as React from "react";
import { Button, Drawer, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Drawer title="Project details" description="Review and update your project." trigger={<Button variant="outline">Customization</Button>}  style={{ borderRadius: 24, borderColor: "var(--hulmio-primary)", background: "var(--hulmio-surface)" }} ><p>Review the changes before continuing.</p></Drawer><p role="status">{message}</p></div>
    </div>
  );
}
