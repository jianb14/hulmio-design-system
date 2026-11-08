import * as React from "react";
import { Button, DropdownMenu } from "hulmio-ui";
import { Pencil, Copy, Trash2 } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><DropdownMenu trigger={<Button variant="outline">Project actions</Button>}  items={[{ id: "edit", label: "Edit project", icon: <Pencil size={16} /> }, { id: "copy", label: "Duplicate project", icon: <Copy size={16} /> }, { id: "delete", label: "Delete project", icon: <Trash2 size={16} />, destructive: true }]} onAction={key => setMessage("Selected " + key)} /><p role="status">{message}</p></div>
    </div>
  );
}
