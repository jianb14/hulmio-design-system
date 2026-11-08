import * as React from "react";
import { Button, ToastProvider, ToastQueue, Toast } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [queue] = React.useState(() => new ToastQueue());
  React.useEffect(() => () => queue.clear(), [queue]);
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><ToastProvider queue={queue} gap={16} width={340} style={{ fontFamily: "var(--hulmio-font-family)" }} renderToast={(record, close) => <Toast {...record} onDismiss={close} style={{ borderRadius: 22, borderColor: "var(--hulmio-primary)" }} />} /><Button  onClick={() => { queue.add({ title: "Project saved", description: "Your changes are available to your team." }); }}>Show notification</Button><p role="status">{message}</p></div>
    </div>
  );
}
