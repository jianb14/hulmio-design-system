import * as React from "react";
import { Checkbox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [checked,setChecked] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Checkbox label="Accept the terms" checked={checked} onChange={event => setChecked(event.target.checked)} /><output aria-live="polite">{checked ? "Enabled" : "Disabled"}</output>
    </div>
  );
}
