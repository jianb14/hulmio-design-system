import * as React from "react";
import { Button, Modal, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Modal title="Project details" description="Review and update your project." trigger={<Button variant="outline">Dismiss Behavior</Button>}  dismissable={false} keyboardDismiss={false} ><p>Outside interaction and Escape are disabled. Use the explicit close control.</p><DialogClose asChild><Button variant="outline">Close explicitly</Button></DialogClose></Modal><p role="status">{message}</p></div>
    </div>
  );
}
