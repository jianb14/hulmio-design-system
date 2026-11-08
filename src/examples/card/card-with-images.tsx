import { Card, Image } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Card title="A moment outdoors"><Image src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop" alt="Misty green hills" aspectRatio={16 / 9} /><p>Make room for a different perspective.</p></Card>
    </div>
  );
}
