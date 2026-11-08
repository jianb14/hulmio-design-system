import { Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["neutral", "primary", "success", "warning", "danger", "info"] as const).map(tone => <Badge key={tone} tone={tone}>{tone}</Badge>)}</>
    </div>
  );
}
