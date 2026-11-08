import * as React from "react";
import { Toggle } from "hulmio-ui";
import { Heart } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [pressed, setPressed] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Toggle aria-label="Save to favorites" pressed={pressed} onPressedChange={setPressed}><Heart size={18} fill={pressed ? "currentColor" : "none"} aria-hidden="true" /></Toggle><output role="status">{pressed ? "Saved." : "Not saved."}</output>
    </div>
  );
}
