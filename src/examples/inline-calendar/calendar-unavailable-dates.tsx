import { Calendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Calendar label="Event date" defaultFocusedValue="2026-11-10" isDateUnavailable={value => [0, 6].includes(new Date(value + "T12:00:00Z").getUTCDay())} /></>
    </div>
  );
}
