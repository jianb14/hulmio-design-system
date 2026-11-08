import * as React from "react";
import { ButtonGroup, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      {(["sm", "md", "lg"] as const).map(size => <ButtonGroup key={size} label={size + " actions"} size={size}><Button onClick={() => setMessage("Document saved.")}>Save</Button><Button onClick={() => setMessage("Document copied.")}>Copy</Button><Button onClick={() => setMessage("Document shared.")}>Share</Button></ButtonGroup>)}<output role="status">{message}</output>
    </div>
  );
}
