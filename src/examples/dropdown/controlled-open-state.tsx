import * as React from "react";
import { Button, DropdownMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><DropdownMenu trigger={<Button variant="outline">Project actions</Button>} open={open} onOpenChange={setOpen} items={[{ id: "edit", label: "Edit project" }, { id: "duplicate", label: "Duplicate project" }, { id: "delete", label: "Delete project", destructive: true }]} onAction={key => setMessage("Selected " + key)} /><p>Menu is {open ? "open" : "closed"}</p><p role="status">{message}</p></div>
    </div>
  );
}
