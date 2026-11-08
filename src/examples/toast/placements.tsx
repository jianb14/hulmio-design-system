import * as React from "react";
import { Button, ToastProvider, ToastQueue, Toast } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [queue] = React.useState(() => new ToastQueue());
  React.useEffect(() => () => queue.clear(), [queue]);
  const [message, setMessage] = React.useState("Ready");
  const [placement, setPlacement] = React.useState<"top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right">("bottom-right");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><ToastProvider queue={queue} placement={placement} /><label>Placement <select value={placement} onChange={event => setPlacement(event.target.value as typeof placement)}>{(["top-left", "top", "top-right", "bottom-left", "bottom", "bottom-right"] as const).map(value => <option key={value}>{value}</option>)}</select></label><Button  onClick={() => { queue.add({ title: "Project saved", description: "Your changes are available to your team." }); }}>Show notification</Button><p role="status">{message}</p></div>
    </div>
  );
}
