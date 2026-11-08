import * as React from "react";
import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Button shape="pill" variant="outline" style={{ borderWidth: 2, letterSpacing: ".03em" }} onClick={() => setMessage("Customized action selected.")}>Make it yours</Button><output role="status">{message}</output>
    </div>
  );
}
