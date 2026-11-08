import { TimeField } from "hulmio-ui";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { parseTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TimeField label="Meeting time" defaultValue={parseTime("09:30")} prefix={<Search size={16} aria-hidden="true" />} />
    </div>
  );
}
