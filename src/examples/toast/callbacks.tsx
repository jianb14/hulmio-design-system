import * as React from "react";
import { Button, ToastProvider, ToastQueue, Toast } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [queue] = React.useState(() => new ToastQueue());
  React.useEffect(() => () => queue.clear(), [queue]);
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><ToastProvider queue={queue} /><Button  onClick={() => { queue.add({ title: "Project archived", action: { label: "Undo", onAction: () => setMessage("Archive undone") }, onAction: () => setMessage("Undo action callback"), onClose: () => setMessage(previous => previous + " · notification closed") }); }}>Show notification</Button><p role="status">{message}</p></div>
    </div>
  );
}
