import * as React from "react";
import { Button, ToastProvider, ToastQueue, Toast } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [queue] = React.useState(() => new ToastQueue());
  React.useEffect(() => () => queue.clear(), [queue]);
  const [message, setMessage] = React.useState("Ready");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}><ToastProvider queue={queue} expanded />{(["neutral", "primary", "success", "warning", "danger", "info"] as const).map(tone => <Button key={tone} variant="outline" onClick={() => queue.add({ title: tone + " notification", tone })}>{tone}</Button>)}</div>
    </div>
  );
}
