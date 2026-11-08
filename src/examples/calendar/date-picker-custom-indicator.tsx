import { SegmentedDatePicker } from "hulmio-ui";
import { ChevronDown } from "lucide-react";
import { parseDate, parseDateTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <SegmentedDatePicker label="Appointment date" defaultValue={parseDate("2026-11-06")} indicator={<ChevronDown size={18} aria-hidden="true" />} />
    </div>
  );
}
