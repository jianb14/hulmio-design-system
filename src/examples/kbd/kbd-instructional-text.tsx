import { Kbd } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <p>Use <Kbd keys={["up"]} /> and <Kbd keys={["down"]} /> to navigate, then <Kbd keys={["enter"]} /> to select. Press <Kbd keys={["escape"]} /> to close.</p>
    </div>
  );
}
