import { AspectRatio } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <AspectRatio ratio={3 / 4} style={{ width: "100%", maxWidth: 240, background: "var(--hulmio-subtle)" }}><div style={{ display: "grid", placeItems: "center", width: "100%", height: "100%" }}>3:4</div></AspectRatio>
    </div>
  );
}
