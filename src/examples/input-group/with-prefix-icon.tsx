import { InputGroup, InputGroupAddon, InputGroupInput } from "hulmio-ui";
import { Search, Copy, LoaderCircle, Eye, EyeOff } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <InputGroup><InputGroupAddon><Search size={16} aria-hidden="true" /></InputGroupAddon><InputGroupInput aria-label="Project name" placeholder="Find a project…"  /></InputGroup>
    </div>
  );
}
