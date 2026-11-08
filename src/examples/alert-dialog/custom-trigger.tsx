import * as React from "react";
import { Button, AlertDialog, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><AlertDialog title="Project details" description="Review and update your project." trigger={<button type="button" style={{ padding: 16, borderRadius: 16, background: "var(--hulmio-subtle)", color: "var(--hulmio-text)" }}>Review project <span aria-hidden="true">&#8594;</span></button>}  onConfirm={() => setMessage("Confirmed")}><p>Review the changes before continuing.</p></AlertDialog><p role="status">{message}</p></div>
    </div>
  );
}
