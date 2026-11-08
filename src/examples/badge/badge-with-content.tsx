import { Badge, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Badge content="8" tone="danger"><Button variant="secondary">Notifications</Button></Badge>
    </div>
  );
}
