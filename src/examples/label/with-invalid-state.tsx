import * as React from "react";
import { Label, Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const exampleId = React.useId();
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Label htmlFor={exampleId + "-label-example"} style={{color:"var(--hulmio-danger, #b42318)"}}>Display name</Label><Input id={exampleId + "-label-example"}  aria-invalid="true"  />
    </div>
  );
}
