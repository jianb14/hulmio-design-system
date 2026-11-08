import { ColorArea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><ColorArea defaultValue="hsl(155, 55%, 42%)" colorSpace="hsl" xChannel="hue" yChannel="lightness" /><ColorArea defaultValue="rgb(40, 76, 63)" colorSpace="rgb" xChannel="red" yChannel="green" /></div>
    </div>
  );
}
