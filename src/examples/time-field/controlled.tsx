import * as React from "react";
import { TimeField } from "hulmio-ui";
import { parseTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState<ReturnType<typeof parseTime> | null>(parseTime("09:30"));
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TimeField label="Meeting time" value={value} onChange={setValue} /><output aria-live="polite">{value?.toString()}</output>
    </div>
  );
}
