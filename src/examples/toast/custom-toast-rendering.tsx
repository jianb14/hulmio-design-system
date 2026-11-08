import * as React from "react";
import { Button, ToastProvider, ToastQueue, Toast } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [queue] = React.useState(() => new ToastQueue());
  React.useEffect(() => () => queue.clear(), [queue]);
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><ToastProvider queue={queue} renderToast={(record, close) => <Toast title={record.title} description="A custom renderer using the public surface" tone="primary" onDismiss={close} style={{ borderRadius: 24, border: "2px solid var(--hulmio-primary)" }} action={{ label: "View project", onAction: () => { setMessage("Opened project"); close(); } }} />} /><Button  onClick={() => { queue.add({ title: "Project saved", description: "Your changes are available to your team." }); }}>Show notification</Button><p role="status">{message}</p></div>
    </div>
  );
}
