import * as React from "react";
import { Button, AlertDialog, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(["info", "success", "warning", "danger"] as const).map(tone => <AlertDialog key={tone} title={tone + " confirmation"} description="Each status includes a distinct indicator." tone={tone} destructive={tone === "danger"} trigger={<Button variant="outline">{tone}</Button>} onConfirm={() => setMessage(tone + " confirmed")} />)}<p role="status">{message}</p></div>
    </div>
  );
}
