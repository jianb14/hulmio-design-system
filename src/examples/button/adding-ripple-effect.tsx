import * as React from "react";
import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Button ripple onClick={() => setMessage("Ripple action selected.")}>Press for a ripple</Button><output role="status">{message}</output>
    </div>
  );
}
