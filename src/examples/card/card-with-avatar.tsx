import { Card, Avatar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Card title="Your design partner"><Avatar name="Alex Morgan" status="online" /><p>Alex is available to collaborate.</p></Card>
    </div>
  );
}
