import { TimeField } from "hulmio-ui";
import { parseTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TimeField label="Meeting time" defaultValue={parseTime("09:30")} minValue={parseTime("09:00")} maxValue={parseTime("17:00")} description="Office hours: 09:00–17:00." />
    </div>
  );
}
