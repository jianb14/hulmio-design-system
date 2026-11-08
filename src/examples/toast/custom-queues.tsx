import * as React from "react";
import { Button, ToastProvider, ToastQueue, Toast } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [queue] = React.useState(() => new ToastQueue());
  React.useEffect(() => () => queue.clear(), [queue]);
  const [message, setMessage] = React.useState("Ready");
  const [secondary] = React.useState(() => new ToastQueue());
  React.useEffect(() => () => secondary.clear(), [secondary]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><ToastProvider queue={queue} placement="bottom-left" /><ToastProvider queue={secondary} placement="bottom-right" /><Button variant="outline" onClick={() => secondary.add({ title: "Independent queue", tone: "info" })}>Notify second queue</Button><Button variant="outline" onClick={() => queue.clear()}>Clear first queue</Button><Button  onClick={() => { queue.add({ title: "Project saved", description: "Your changes are available to your team." }); }}>Show notification</Button><p role="status">{message}</p></div>
    </div>
  );
}
