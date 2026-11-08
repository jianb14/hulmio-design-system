import { Avatar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["neutral", "primary", "success", "warning", "danger", "info"] as const).map(tone => <Avatar key={tone} name="Alex Morgan" tone={tone} />)}</>
    </div>
  );
}
