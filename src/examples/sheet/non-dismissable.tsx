import * as React from "react";
import { Button, Sheet, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Sheet title="Project details" description="Review and update your project." trigger={<Button variant="outline">Non-Dismissable</Button>}  dismissable={false} keyboardDismiss={false} ><p>Outside interaction and Escape are disabled. Use the explicit close control.</p><DialogClose asChild><Button variant="outline">Close explicitly</Button></DialogClose></Sheet><p role="status">{message}</p></div>
    </div>
  );
}
