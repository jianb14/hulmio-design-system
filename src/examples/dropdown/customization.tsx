import * as React from "react";
import { Button, DropdownMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><DropdownMenu trigger={<Button variant="outline">Project actions</Button>} className="project-action-menu" style={{ borderRadius: 18, borderColor: "var(--hulmio-primary)" }} items={[{ id: "edit", label: "Edit project" }, { id: "duplicate", label: "Duplicate project" }, { id: "delete", label: "Delete project", destructive: true }]} onAction={key => setMessage("Selected " + key)} /><p role="status">{message}</p></div>
    </div>
  );
}
