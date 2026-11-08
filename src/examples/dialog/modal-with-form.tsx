import * as React from "react";
import { Button, Modal, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Modal title="Project details" description="Review and update your project." trigger={<Button variant="outline">With Form</Button>}  open={open} onOpenChange={setOpen} ><form onSubmit={event => { event.preventDefault(); const data = new FormData(event.currentTarget); setMessage("Saved " + String(data.get("name"))); setOpen(false); }} style={{ display: "grid", gap: 16 }}><label>Project name <input name="name" defaultValue="Hulmio" required /></label><Button type="submit">Save project</Button></form></Modal><p role="status">{message}</p></div>
    </div>
  );
}
