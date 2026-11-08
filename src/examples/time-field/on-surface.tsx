import { TimeField } from "hulmio-ui";
import { parseTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{padding:24,background:"var(--hulmio-subtle, #edf1e8)",borderRadius:16,width:"100%"}}><TimeField label="Meeting time" defaultValue={parseTime("09:30")} /></div>
    </div>
  );
}
