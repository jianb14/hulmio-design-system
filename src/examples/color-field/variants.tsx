import { ColorField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><ColorField label="Brand color" defaultValue="#284c3f" variant="outline" /><ColorField label="Brand color" defaultValue="#284c3f" variant="filled" /><ColorField label="Brand color" defaultValue="#284c3f" variant="underline" /></div>
    </div>
  );
}
