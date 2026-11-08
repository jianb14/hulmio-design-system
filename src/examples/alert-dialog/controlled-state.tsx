import * as React from "react";
import { Button, AlertDialog, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  const [attempt, setAttempt] = React.useState(0);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Button onClick={() => setOpen(true)}>Open controlled overlay</Button><AlertDialog title="Project details" description="Review and update your project."   open={open} onOpenChange={setOpen} onConfirm={async () => { await new Promise(resolve => setTimeout(resolve, 700)); setAttempt(value => value + 1); if (attempt === 0) throw new Error("Connection interrupted. Please retry."); setMessage("Changes saved"); }}><p>The first save fails locally. Retry succeeds; the dialog remains open while saving and after an error.</p></AlertDialog><p role="status">{message}</p></div>
    </div>
  );
}
