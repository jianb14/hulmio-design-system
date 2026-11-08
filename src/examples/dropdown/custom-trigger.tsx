import * as React from "react";
import { Button, DropdownMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><DropdownMenu trigger={<button type="button" aria-label="Open account actions" style={{ borderRadius: "50%", width: 48, height: 48, background: "var(--hulmio-subtle)", color: "var(--hulmio-text)" }}>CR</button>}  items={[{ id: "edit", label: "Edit project" }, { id: "duplicate", label: "Duplicate project" }, { id: "delete", label: "Delete project", destructive: true }]} onAction={key => setMessage("Selected " + key)} /><p role="status">{message}</p></div>
    </div>
  );
}
