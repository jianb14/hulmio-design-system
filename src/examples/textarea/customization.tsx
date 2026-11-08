import { Textarea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Textarea label="Project notes" placeholder="Describe the project…" className="custom-input" style={{fontFamily:"monospace",letterSpacing:".03em"}} />
    </div>
  );
}
