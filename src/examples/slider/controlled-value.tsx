import * as React from "react";
import { Slider } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState(40);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Slider label="Volume" min={0} max={100} value={value} onValueChange={setValue} /><output aria-live="polite">Volume: {value}</output>
    </div>
  );
}
