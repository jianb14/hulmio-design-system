import { Kbd } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <p>Press <Kbd keys={["command"]}>K</Kbd> to open search.</p>
    </div>
  );
}
