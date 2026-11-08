import * as React from "react";
import { IconButton } from "hulmio-ui";
import { Ellipsis, Settings, Trash2 } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}><IconButton label="More options" variant="tertiary" onClick={() => setMessage("Options opened.")}><Ellipsis size={18} aria-hidden="true" /></IconButton><IconButton label="Settings" variant="secondary" onClick={() => setMessage("Settings opened.")}><Settings size={18} aria-hidden="true" /></IconButton><IconButton label="Delete" variant="destructive" onClick={() => setMessage("Item deleted.")}><Trash2 size={18} aria-hidden="true" /></IconButton></div><output role="status">{message}</output>
    </div>
  );
}
