import { Separator } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, height: 48 }}>Design<Separator orientation="vertical" />Develop<Separator orientation="vertical" />Deliver</div>
    </div>
  );
}
