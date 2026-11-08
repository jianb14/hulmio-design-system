import { InputGroup, InputGroupAddon, InputGroupInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <InputGroup><InputGroupInput aria-label="Project name" placeholder="Find a project…"  /><InputGroupAddon align="end"><span className="h-tag">New</span></InputGroupAddon></InputGroup>
    </div>
  );
}
