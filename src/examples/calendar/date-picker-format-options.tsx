import { SegmentedDatePicker } from "hulmio-ui";
import { parseDate, parseDateTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <SegmentedDatePicker label="Appointment date" granularity="minute" hourCycle={24} shouldForceLeadingZeros defaultValue={parseDateTime("2026-11-06T14:30")} />
    </div>
  );
}
