import * as React from "react";
import { Button, AlertDialog, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(["xs", "sm", "md", "lg", "xl", "full"] as const).map(size => <AlertDialog key={size} title={size + " details"} description="Choose a comfortable dialog width." size={size} trigger={<Button variant="outline">{size}</Button>} onConfirm={() => setMessage("Confirmed")}><p>Review the changes before continuing.</p></AlertDialog>)}<p role="status">{message}</p></div>
    </div>
  );
}
