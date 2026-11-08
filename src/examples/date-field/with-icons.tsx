import { DateField } from "hulmio-ui";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { parseDate, parseDateTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <DateField label="Start date" defaultValue={parseDate("2026-11-06")} prefix={<Search size={16} aria-hidden="true" />} />
    </div>
  );
}
