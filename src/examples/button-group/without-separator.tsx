import * as React from "react";
import { ButtonGroup, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ButtonGroup label="Document actions" separated={false} variant="secondary"><Button onClick={() => setMessage("Document saved.")}>Save</Button><Button onClick={() => setMessage("Document copied.")}>Copy</Button><Button onClick={() => setMessage("Document shared.")}>Share</Button></ButtonGroup><output role="status">{message}</output>
    </div>
  );
}
