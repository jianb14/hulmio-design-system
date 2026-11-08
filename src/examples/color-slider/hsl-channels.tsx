import { ColorSlider } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"grid",gap:24}}><ColorSlider colorSpace="hsl" channel="hue" label="hue" defaultValue="#284c3f" /><ColorSlider colorSpace="hsl" channel="saturation" label="saturation" defaultValue="#284c3f" /><ColorSlider colorSpace="hsl" channel="lightness" label="lightness" defaultValue="#284c3f" /></div>
    </div>
  );
}
