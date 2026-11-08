import * as React from "react";
import { Button, DropdownMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><DropdownMenu trigger={<Button variant="outline">Project actions</Button>}  items={[{ id: "share", label: "Share", items: [{ id: "email", label: "Email link" }, { id: "team", label: "Send to team", items: [{ id: "design", label: "Design team" }, { id: "product", label: "Product team" }] }] }, { id: "copy", label: "Copy link" }]} onAction={key => setMessage("Selected " + key)} /><p role="status">{message}</p></div>
    </div>
  );
}
