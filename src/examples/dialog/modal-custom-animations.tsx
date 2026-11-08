import * as React from "react";
import { Button, Modal, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  const motionCss = "@keyframes project-overlay-appear { from { opacity: 0; scale: .92; } to { opacity: 1; scale: 1; } } .project-overlay-motion { animation: project-overlay-appear 240ms ease-out !important; } @media (prefers-reduced-motion: reduce) { .project-overlay-motion { animation: none !important; } }";
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><style>{motionCss}</style><Modal title="Project details" description="Review and update your project." trigger={<Button variant="outline">Custom Animations</Button>}  className="project-overlay-motion" ><p>Review the changes before continuing.</p></Modal><p role="status">{message}</p></div>
    </div>
  );
}
