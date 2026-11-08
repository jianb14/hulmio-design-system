import * as React from "react";
import { Button, DropdownMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [selected, setSelected] = React.useState<string[]>(["email"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><DropdownMenu trigger={<Button variant="outline">Project actions</Button>} sections={[{ label: "Notifications", selectionMode: "multiple", selectedKeys: selected, onSelectionChange: setSelected, items: [{ id: "email", label: "Email" }, { id: "push", label: "Push" }] }, { label: "Actions", items: [{ id: "reset", label: "Reset settings" }] }]}  onAction={key => setMessage("Selected " + key)} /><p>Selected: {selected.join(", ") || "none"}</p><p role="status">{message}</p></div>
    </div>
  );
}
