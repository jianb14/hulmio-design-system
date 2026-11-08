import * as React from "react";
import { Checkbox, Label } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const exampleId = React.useId();
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Label htmlFor={exampleId + "-external-consent"}>Accept the terms</Label><Checkbox id={exampleId + "-external-consent"} aria-label="Accept the terms" />
    </div>
  );
}
