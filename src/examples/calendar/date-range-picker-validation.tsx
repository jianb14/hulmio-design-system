import { SegmentedDateRangePicker } from "hulmio-ui";
import { parseDate, parseDateTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <SegmentedDateRangePicker label="Trip dates" minValue={parseDate("2026-11-01")} maxValue={parseDate("2026-12-31")} isDateUnavailable={date => date.day === 15} description="November–December; the 15th is unavailable." defaultValue={{start:parseDate("2026-11-06"),end:parseDate("2026-11-12")}} />
    </div>
  );
}
