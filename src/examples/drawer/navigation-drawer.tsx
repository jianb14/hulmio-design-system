import * as React from "react";
import { Button, Drawer, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Drawer title="Project details" description="Review and update your project." trigger={<Button variant="outline">Navigation Drawer</Button>}  ><nav aria-label="Workspace"><ul>{["Overview", "Projects", "Team", "Settings"].map(page => <li key={page}><DialogClose asChild><button type="button" onClick={() => setMessage("Navigated to " + page)}>{page}</button></DialogClose></li>)}</ul></nav></Drawer><p role="status">{message}</p></div>
    </div>
  );
}
