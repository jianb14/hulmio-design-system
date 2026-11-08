import { Checkbox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{fontFamily:"monospace",padding:16,border:"1px dashed currentColor",borderRadius:12}}><Checkbox label="Accept the terms" /></div>
    </div>
  );
}
