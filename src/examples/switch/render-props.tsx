import * as React from "react";
import { Switch } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [checked,setChecked] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Switch label="Email notifications" checked={checked} onChange={event => setChecked(event.target.checked)} renderLabel={state => state.selected ? "Notifications enabled" : "Notifications paused"} /><output aria-live="polite">{checked ? "Enabled" : "Disabled"}</output>
    </div>
  );
}
