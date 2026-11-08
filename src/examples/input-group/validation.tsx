import * as React from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const exampleId = React.useId();
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <InputGroup><InputGroupInput aria-label="Project name" placeholder="Find a project…"  aria-invalid="true" aria-describedby={exampleId + "-group-error"} /></InputGroup><p id={exampleId + "-group-error"} className="h-error">Enter a project name.</p>
    </div>
  );
}
