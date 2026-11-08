import * as React from "react";
import { CommandPalette, Button, type CommandItem } from "hulmio-ui";
import { Folder } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [open, setOpen] = React.useState(false); const [message, setMessage] = React.useState("");
    const items: CommandItem[] = [{ id: "create", label: "Create project", onSelect: () => setMessage("Project created."), icon: <Folder size={16} aria-hidden="true" />, description: "Start a shared workspace", content: <strong>Create a new project</strong> }, { id: "settings", label: "Open settings", onSelect: () => setMessage("Settings opened.") }];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Button onClick={() => setOpen(true)}>Open commands</Button><CommandPalette open={open} onOpenChange={setOpen} items={items} /><output role="status">{message}</output>
    </div>
  );
}
