import { ComposedColorPicker, ColorField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ComposedColorPicker label="Brand color" defaultValue="#284c3f"><div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><ColorField label="red" colorSpace="rgb" channel="red" /><ColorField label="green" colorSpace="rgb" channel="green" /><ColorField label="blue" colorSpace="rgb" channel="blue" /></div></ComposedColorPicker>
    </div>
  );
}
