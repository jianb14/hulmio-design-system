import { ProgressCircle } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ProgressCircle label="Uploading" value={64} showLabel={false} />
    </div>
  );
}
