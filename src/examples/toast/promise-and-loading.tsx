import * as React from "react";
import { Button, ToastProvider, ToastQueue, Toast } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [queue] = React.useState(() => new ToastQueue());
  React.useEffect(() => () => queue.clear(), [queue]);
  const [message, setMessage] = React.useState("Ready");
  const [pending, setPending] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><ToastProvider queue={queue} /><Button variant="outline" disabled={pending} onClick={() => { setPending(true); void queue.promise(new Promise((_, reject) => setTimeout(() => reject(new Error("Offline")), 900)), { loading: "Saving project…", success: "Saved", error: "Offline. Try again." }).catch(() => setMessage("Failure handled; retry is available")).finally(() => setPending(false)); }}>Simulate rejection</Button><Button disabled={pending} onClick={() => { setPending(true); void queue.promise(new Promise<string>((resolve) => setTimeout(() => resolve("Hulmio"), 900)), { loading: "Saving project…", success: name => name + " saved", error: "Save failed" }).finally(() => setPending(false)); }}>Show notification</Button><p role="status">{message}</p></div>
    </div>
  );
}
