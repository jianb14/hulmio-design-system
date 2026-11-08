import * as React from "react";
import { Button, AlertDialog, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><AlertDialog title="Project details" description="Review and update your project." trigger={<Button variant="outline">Close Methods</Button>}  open={open} onOpenChange={setOpen} onConfirm={() => setMessage("Confirmed")}><div style={{ display: "flex", gap: 12 }}><DialogClose asChild><Button variant="outline">Close with primitive</Button></DialogClose><Button onClick={() => setOpen(false)}>Close through state</Button></div></AlertDialog><p role="status">{message}</p></div>
    </div>
  );
}
