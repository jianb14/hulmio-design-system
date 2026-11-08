import * as React from "react";
import { Field, Input, Checkbox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const exampleId = React.useId();
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <fieldset><legend>Notifications</legend><p id={exampleId + "-notification-help"}>Choose how your team reaches you.</p><Checkbox label="Email" name="email" aria-describedby={exampleId + "-notification-help"} /><Checkbox label="In-app" name="app" aria-describedby={exampleId + "-notification-help"} /></fieldset>
    </div>
  );
}
