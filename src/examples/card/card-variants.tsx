import { Card } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["default", "outlined", "soft"] as const).map(variant => <Card key={variant} variant={variant} title={variant}>Made for everyday work.</Card>)}</>
    </div>
  );
}
