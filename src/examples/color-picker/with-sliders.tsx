import { ComposedColorPicker, ColorSlider } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ComposedColorPicker label="Brand color" defaultValue="#284c3f"><ColorSlider channel="alpha" label="Opacity" /><ColorSlider channel="saturation" colorSpace="hsl" label="Saturation" /></ComposedColorPicker>
    </div>
  );
}
