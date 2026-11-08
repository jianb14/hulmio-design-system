import * as React from "react";
import { Chart } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Chart label="Weekly completed tasks" variant="bar" data={[{ label: "Mon", value: 12 }, { label: "Tue", value: 19 }, { label: "Wed", value: 15 }, { label: "Thu", value: 24 }, { label: "Fri", value: 21 }]} style={{ "--hulmio-primary": "#735b30" } as React.CSSProperties} />
    </div>
  );
}
