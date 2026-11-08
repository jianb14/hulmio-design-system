import { RangeCalendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><RangeCalendar label="Travel dates" defaultFocusedValue="2026-11-10"  /></>
    </div>
  );
}
