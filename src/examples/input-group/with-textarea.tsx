import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <InputGroup><InputGroupTextarea aria-label="Project notes" placeholder="Describe your project…"  /></InputGroup>
    </div>
  );
}
