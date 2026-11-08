import { SegmentedDateRangePicker } from "hulmio-ui";
import { parseDate, parseDateTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <SegmentedDateRangePicker label="Trip dates" granularity="minute" hourCycle={24} shouldForceLeadingZeros defaultValue={{start:parseDateTime("2026-11-06T09:00"),end:parseDateTime("2026-11-12T17:00")}} />
    </div>
  );
}
