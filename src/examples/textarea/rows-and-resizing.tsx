import { Textarea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><Textarea label="Compact notes" rows={2} style={{resize:"vertical"}} /><Textarea label="Long notes" rows={7} style={{resize:"both"}} /></div>
    </div>
  );
}
