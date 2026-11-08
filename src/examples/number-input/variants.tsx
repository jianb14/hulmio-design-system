import { NumberField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><NumberField label="Budget" defaultValue={1200} variant="outline" /><NumberField label="Budget" defaultValue={1200} variant="filled" /><NumberField label="Budget" defaultValue={1200} variant="underline" /></div>
    </div>
  );
}
