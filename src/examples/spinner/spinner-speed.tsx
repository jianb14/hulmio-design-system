import { Spinner } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Spinner label="Fast loading" speed={0.4} /><Spinner label="Standard loading" speed={0.8} /><Spinner label="Slow loading" speed={1.8} /></>
    </div>
  );
}
