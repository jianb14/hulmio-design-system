import * as React from "react";
import { CloseButton, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [visible, setVisible] = React.useState(true);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>{visible ? <><p>Dismiss this message.</p><CloseButton label="Dismiss message" onClick={() => setVisible(false)} ></CloseButton></> : <Button variant="outline" onClick={() => setVisible(true)}>Show message</Button>}</div><output role="status">{visible ? "Message visible." : "Message dismissed."}</output>
    </div>
  );
}
