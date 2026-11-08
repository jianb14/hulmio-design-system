import * as React from "react";
import { Clipboard, Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value, setValue] = React.useState("npm install ./hulmio-ui-0.1.0.tgz"); const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Clipboard value={value} onCopy={() => setMessage("Text copied.")} onError={error => setMessage(error.message)} copiedLabel="Copied to clipboard">Copy text</Clipboard><output role="status">{message}</output>
    </div>
  );
}
