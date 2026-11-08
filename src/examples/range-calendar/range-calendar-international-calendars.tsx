import { RangeCalendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}><RangeCalendar label="Hebrew calendar" locale="he-IL-u-ca-hebrew" defaultFocusedValue="2026-11-10" yearPicker /><RangeCalendar label="Indian calendar" locale="hi-IN-u-ca-indian" defaultFocusedValue="2026-11-10" yearPicker /></div>
    </div>
  );
}
