import { Card, Avatar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Card style={{ display: "flex", alignItems: "center", gap: 20 }}><Avatar name="Alex Morgan" size="lg" /><div><strong>Alex Morgan</strong><p>Product designer</p></div></Card>
    </div>
  );
}
