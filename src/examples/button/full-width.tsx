import * as React from "react";
import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Button fullWidth onClick={() => setMessage("Ready to continue.")}>Continue to workspace</Button><output role="status">{message}</output>
    </div>
  );
}
