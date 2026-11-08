import { Meter } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Meter label="Temperature" value={22} min={-20} max={50} valueText="22 degrees Celsius" />
    </div>
  );
}
