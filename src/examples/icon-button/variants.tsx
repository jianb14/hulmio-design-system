import * as React from "react";
import { IconButton } from "hulmio-ui";
import { Plus } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", width: "100%" }}>{(["primary", "secondary", "outline", "ghost", "destructive"] as const).map(variant => <IconButton key={variant} label={variant + " add action"} variant={variant} onClick={() => setMessage(variant + " selected.")}><Plus size={18} aria-hidden="true" /></IconButton>)}</div><output role="status">{message}</output>
    </div>
  );
}
