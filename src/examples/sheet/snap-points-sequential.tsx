import * as React from "react";
import { Button, Sheet, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Sheet title="Project details" description="Review and update your project." trigger={<Button variant="outline">Snap Points (Sequential)</Button>}  snapPoints={[0.3, 0.6, 0.95]} sequential ><p>Drag the handle or focus it and use Arrow keys, Home, or End to change position.</p><div>{Array.from({ length: 32 }, (_, index) => <p key={index}>Section {index + 1}: Review your project settings and collaborators.</p>)}</div></Sheet><p role="status">{message}</p></div>
    </div>
  );
}
