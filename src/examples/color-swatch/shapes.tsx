import { ColorSwatch } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><ColorSwatch color="#284c3f" colorName="Forest green" shape="square" /><ColorSwatch color="#284c3f" colorName="Forest green" shape="circle" /></div>
    </div>
  );
}
