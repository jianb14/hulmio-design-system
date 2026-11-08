import { InputGroup, InputGroupAddon, InputGroupInput } from "hulmio-ui";
import { LoaderCircle } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <InputGroup><InputGroupAddon><LoaderCircle size={16} aria-hidden="true" /></InputGroupAddon><InputGroupInput aria-label="Project name" placeholder="Find a project…"  disabled aria-busy="true" /></InputGroup>
    </div>
  );
}
