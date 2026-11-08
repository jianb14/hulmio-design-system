import * as React from "react";
import { Button, AlertDialog, DialogClose } from "hulmio-ui";
import { ShieldCheck } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><AlertDialog title="Project details" description="Review and update your project." trigger={<Button variant="outline">Custom Icon</Button>}  icon={<ShieldCheck size={32} />} onConfirm={() => setMessage("Confirmed")}><p>Review the changes before continuing.</p></AlertDialog><p role="status">{message}</p></div>
    </div>
  );
}
