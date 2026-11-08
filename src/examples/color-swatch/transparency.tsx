import { ColorSwatch } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><ColorSwatch color="rgba(40,76,63,0.25)" colorName="Forest at 25% opacity" /><ColorSwatch color="rgba(40,76,63,0.5)" colorName="Forest at 50% opacity" /><ColorSwatch color="rgba(40,76,63,0.75)" colorName="Forest at 75% opacity" /><ColorSwatch color="rgba(40,76,63,1)" colorName="Forest at 100% opacity" /></div>
    </div>
  );
}
