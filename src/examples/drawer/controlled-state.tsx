import * as React from "react";
import { Button, Drawer, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Button onClick={() => setOpen(true)}>Open controlled overlay</Button><Drawer title="Project details" description="Review and update your project."   open={open} onOpenChange={setOpen} ><p>Review the changes before continuing.</p></Drawer><p role="status">{message}</p></div>
    </div>
  );
}
