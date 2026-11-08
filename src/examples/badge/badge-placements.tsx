import { Badge, Avatar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 40 }}>{(["top-right", "top-left", "bottom-right", "bottom-left"] as const).map(placement => <Badge key={placement} placement={placement} content="3"><Avatar name="Alex Morgan" /></Badge>)}</div>
    </div>
  );
}
