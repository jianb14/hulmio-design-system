import { Slider } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Slider label="Volume" min={0} max={100} defaultValue={40} step={10} showSteps marks={[0,25,50,75,100]} />
    </div>
  );
}
