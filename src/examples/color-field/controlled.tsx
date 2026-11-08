import * as React from "react";
import { ColorField, parseColor, type Color } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState<Color | null>(parseColor("#284c3f"));
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ColorField label="Brand color" value={value} onChange={setValue} /><output aria-live="polite">{value?.toString("hex")}</output>
    </div>
  );
}
