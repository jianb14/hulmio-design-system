import { Progress } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Progress label="Files uploaded" min={0} max={24} value={9} />
    </div>
  );
}
