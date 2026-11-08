import { Calendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Calendar label="Event date" defaultFocusedValue="2026-11-10" cellIndicator={value => ["2026-11-10", "2026-11-18", "2026-11-24"].includes(value) ? <span aria-label="Event scheduled">•</span> : null} /></>
    </div>
  );
}
