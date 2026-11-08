import { ColorSlider } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"grid",gap:24}}><ColorSlider colorSpace="rgb" channel="red" label="red" defaultValue="#284c3f" /><ColorSlider colorSpace="rgb" channel="green" label="green" defaultValue="#284c3f" /><ColorSlider colorSpace="rgb" channel="blue" label="blue" defaultValue="#284c3f" /></div>
    </div>
  );
}
