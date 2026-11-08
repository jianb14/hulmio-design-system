import { AspectRatio } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <AspectRatio ratio={16 / 9} style={{ width: 240, background: "var(--hulmio-soft)" }}>16:9 landscape</AspectRatio>
      <AspectRatio ratio={1} style={{ width: 160, background: "var(--hulmio-subtle)" }}>1:1 square</AspectRatio>
      <AspectRatio ratio={3 / 4} style={{ width: 120, background: "var(--hulmio-soft)" }}>3:4 portrait</AspectRatio>
    </div>
  );
}
