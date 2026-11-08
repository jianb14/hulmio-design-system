import * as React from "react";
import { Button, Modal, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  const [portal, setPortal] = React.useState<HTMLDivElement | null>(null);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><div ref={setPortal} style={{ position: "relative", minHeight: 420, transform: "translateZ(0)", border: "1px solid var(--hulmio-border)", overflow: "hidden" }}><Modal title="Project details" description="Review and update your project." trigger={<Button variant="outline">Custom Portal</Button>}  portalContainer={portal} ><p>Review the changes before continuing.</p></Modal></div><p role="status">{message}</p></div>
    </div>
  );
}
