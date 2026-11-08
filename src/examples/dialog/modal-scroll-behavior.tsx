import * as React from "react";
import { Button, Modal, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12 }}>{(["inside", "outside"] as const).map(scrollBehavior => <Modal key={scrollBehavior} title={scrollBehavior + " scrolling"} scrollBehavior={scrollBehavior} trigger={<Button variant="outline">{scrollBehavior}</Button>}><div>{Array.from({ length: 32 }, (_, index) => <p key={index}>Section {index + 1}: Review your project settings and collaborators.</p>)}</div></Modal>)}</div>
    </div>
  );
}
