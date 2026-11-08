import * as React from "react";
import { Button, DropdownMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><DropdownMenu trigger={<Button variant="outline">Project actions</Button>} sections={[{ label: "Project", items: [{ id: "edit", label: "Edit project" }, { id: "copy", label: "Duplicate project" }] }, { label: "Danger zone", items: [{ id: "delete", label: "Delete project", destructive: true }] }]}  onAction={key => setMessage("Selected " + key)} /><p role="status">{message}</p></div>
    </div>
  );
}
