import * as React from "react";
import { NumberField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState(1200);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <NumberField label="Budget" value={value} onChange={setValue} /><output aria-live="polite">{value}</output>
    </div>
  );
}
