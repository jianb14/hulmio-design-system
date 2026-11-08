import * as React from "react";
import { ComposedColorPicker, parseColor } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState(parseColor("#284c3f"));
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ComposedColorPicker label="Brand color" value={value} onChange={setValue}></ComposedColorPicker><output>{value.toString("hexa")}</output>
    </div>
  );
}
