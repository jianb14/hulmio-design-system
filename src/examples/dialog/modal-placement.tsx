import * as React from "react";
import { Button, Modal, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(["top", "center", "bottom"] as const).map(placement => <Modal key={placement} title={placement + " details"} description="Choose where the overlay opens." placement={placement} trigger={<Button variant="outline">{placement}</Button>} ><p>Review the changes before continuing.</p></Modal>)}<p role="status">{message}</p></div>
    </div>
  );
}
