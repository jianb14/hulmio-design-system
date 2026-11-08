import { AspectRatio } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <AspectRatio ratio={16 / 9}><div style={{ height: "100%", display: "grid", placeItems: "center", background: "#edf2e4", color: "#284c3f" }}>16 : 9</div></AspectRatio>
  );
}
