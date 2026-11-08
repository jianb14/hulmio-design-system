import { Slider } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Slider label="Volume" min={0} max={100} defaultValue={40} renderOutput={(values) => <strong>{values[0] < 30 ? "Quiet" : values[0] < 70 ? "Balanced" : "Loud"} · {values[0]}</strong>} />
    </div>
  );
}
