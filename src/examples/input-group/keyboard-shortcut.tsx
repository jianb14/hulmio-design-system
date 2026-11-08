import { InputGroup, InputGroupAddon, InputGroupInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <InputGroup><InputGroupInput aria-label="Project name" placeholder="Find a project…"  /><InputGroupAddon align="end"><kbd>⌘ K</kbd></InputGroupAddon></InputGroup>
    </div>
  );
}
