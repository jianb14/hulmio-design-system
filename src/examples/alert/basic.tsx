import * as React from "react";
import { Alert, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [visible, setVisible] = React.useState(true);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div>{visible ? <Alert title="Your project is ready" tone="success" onDismiss={() => setVisible(false)} icon={<span aria-hidden="true">&#10003;</span>} >Invite your teammates to start collaborating.</Alert> : <Button variant="outline" onClick={() => setVisible(true)}>Show alert again</Button>}</div>
    </div>
  );
}
