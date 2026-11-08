import * as React from "react";
import { SegmentedDateRangePicker } from "hulmio-ui";
import { parseDate, parseDateTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState<{start:ReturnType<typeof parseDate>;end:ReturnType<typeof parseDate>} | null>({start:parseDate("2026-11-06"),end:parseDate("2026-11-12")});
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <SegmentedDateRangePicker label="Trip dates" value={value} onChange={setValue} /><output aria-live="polite">{value ? `${value.start} – ${value.end}` : "No dates"}</output>
    </div>
  );
}
