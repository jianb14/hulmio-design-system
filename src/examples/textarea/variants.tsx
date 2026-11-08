import { Textarea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><Textarea label="Project notes" placeholder="Describe the project…" variant="outline" /><Textarea label="Project notes" placeholder="Describe the project…" variant="filled" /><Textarea label="Project notes" placeholder="Describe the project…" variant="underline" /></div>
    </div>
  );
}
