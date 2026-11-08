import * as React from "react";
import { Button, AlertDialog, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(["top", "center", "bottom"] as const).map(placement => <AlertDialog key={placement} title={placement + " details"} description="Choose where the overlay opens." placement={placement} trigger={<Button variant="outline">{placement}</Button>} onConfirm={() => setMessage("Confirmed")}><p>Review the changes before continuing.</p></AlertDialog>)}<p role="status">{message}</p></div>
    </div>
  );
}
