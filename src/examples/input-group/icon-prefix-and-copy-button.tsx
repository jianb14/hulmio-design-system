import * as React from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "hulmio-ui";
import { Search, Copy, LoaderCircle, Eye, EyeOff } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [copied,setCopied] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <InputGroup><InputGroupAddon><Search size={16} aria-hidden="true" /></InputGroupAddon><InputGroupInput aria-label="Project name" placeholder="Find a project…"  ref={inputRef} defaultValue="hulmio.design" /><InputGroupAddon align="end"><button type="button" aria-label="Copy value" onClick={async () => {try {await navigator.clipboard.writeText(inputRef.current?.value ?? "");setCopied(true);} catch {setCopied(false);}}}>{copied ? "Copied" : "Copy"}</button></InputGroupAddon></InputGroup>
    </div>
  );
}
