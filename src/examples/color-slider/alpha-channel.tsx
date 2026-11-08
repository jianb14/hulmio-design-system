import { ColorSlider } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ColorSlider defaultValue="hsla(155, 55%, 42%, 0.5)" channel="alpha" label="Opacity" />
    </div>
  );
}
