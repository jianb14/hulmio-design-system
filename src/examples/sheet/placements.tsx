import * as React from "react";
import { Button, Sheet, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(["top", "right", "bottom", "left"] as const).map(placement => <Sheet key={placement} title={placement + " details"} description="Choose where the overlay opens." placement={placement} trigger={<Button variant="outline">{placement}</Button>} ><p>Review the changes before continuing.</p></Sheet>)}<p role="status">{message}</p></div>
    </div>
  );
}
