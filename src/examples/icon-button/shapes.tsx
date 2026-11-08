import * as React from "react";
import { IconButton } from "hulmio-ui";
import { Plus } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", width: "100%" }}><IconButton label="Add square item" shape="square" onClick={() => setMessage("Square selected.")}><Plus size={18} aria-hidden="true" /></IconButton><IconButton label="Add round item" shape="circle" onClick={() => setMessage("Circle selected.")}><Plus size={18} aria-hidden="true" /></IconButton></div><output role="status">{message}</output>
    </div>
  );
}
