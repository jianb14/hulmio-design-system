import * as React from "react";
import { Toggle } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [pressed, setPressed] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Toggle pressed={pressed} onPressedChange={setPressed} style={{ borderRadius: 24 }}>Rounded toggle</Toggle>
    </div>
  );
}
