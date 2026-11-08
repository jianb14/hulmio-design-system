import { ColorArea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ColorArea defaultValue="hsl(155, 55%, 42%)" colorSpace="hsb" xChannel="saturation" yChannel="brightness" children={state => <output className="h-hint">{state.isDisabled ? "Disabled" : "Use arrow keys to adjust the color"}</output>} />
    </div>
  );
}
