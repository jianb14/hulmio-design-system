import { DateField } from "hulmio-ui";
import { parseDate, parseDateTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{padding:24,background:"var(--hulmio-subtle, #edf1e8)",borderRadius:16,width:"100%"}}><DateField label="Start date" defaultValue={parseDate("2026-11-06")} /></div>
    </div>
  );
}
