import * as React from "react";
import { Textarea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState("Hulmio");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Textarea label="Project notes" placeholder="Describe the project…" value={value} onChange={event => setValue(event.target.value)} /><output aria-live="polite">{value.length} characters</output>
    </div>
  );
}
