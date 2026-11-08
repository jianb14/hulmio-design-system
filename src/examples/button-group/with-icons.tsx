import * as React from "react";
import { ButtonGroup, Button } from "hulmio-ui";
import { Scissors, Copy, Clipboard } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ButtonGroup label="Edit actions" variant="outline"><Button onClick={() => setMessage("Cut selected.")}><Scissors size={16} aria-hidden="true" />Cut</Button><Button onClick={() => setMessage("Copy selected.")}><Copy size={16} aria-hidden="true" />Copy</Button><Button onClick={() => setMessage("Paste selected.")}><Clipboard size={16} aria-hidden="true" />Paste</Button></ButtonGroup><output role="status">{message}</output>
    </div>
  );
}
