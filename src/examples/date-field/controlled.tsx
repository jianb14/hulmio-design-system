import * as React from "react";
import { DateField } from "hulmio-ui";
import { parseDate, parseDateTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState<ReturnType<typeof parseDate> | null>(parseDate("2026-11-06"));
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <DateField label="Start date" value={value} onChange={setValue} /><output aria-live="polite">{value?.toString()}</output>
    </div>
  );
}
