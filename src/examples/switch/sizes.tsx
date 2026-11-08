import { Switch } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><Switch label="sm" controlSize="sm" /><Switch label="md" controlSize="md" /><Switch label="lg" controlSize="lg" /></div>
    </div>
  );
}
