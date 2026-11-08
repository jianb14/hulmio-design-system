import { ProgressCircle } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ProgressCircle label="Custom ring" value={64} svgProps={{ strokeWidth: 3, strokeLinecap: "round", style: { filter: "drop-shadow(0 2px 3px var(--hulmio-border))" } }} />
    </div>
  );
}
