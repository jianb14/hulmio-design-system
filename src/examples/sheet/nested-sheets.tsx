import * as React from "react";
import { Button, Sheet, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Sheet title="Project details" description="Review and update your project." trigger={<Button variant="outline">Nested Sheets</Button>}  ><Sheet title="Nested details" description="Escape closes this sheet first; focus returns to its trigger." trigger={<Button>Open nested sheet</Button>} backdrop="transparent"><p>Nested content</p><DialogClose asChild><Button>Done</Button></DialogClose></Sheet></Sheet><p role="status">{message}</p></div>
    </div>
  );
}
