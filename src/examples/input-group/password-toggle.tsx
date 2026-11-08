import * as React from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [show,setShow] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <InputGroup><InputGroupInput aria-label="Project name" placeholder="Find a project…"  type={show ? "text" : "password"} /><InputGroupAddon align="end"><button type="button" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button></InputGroupAddon></InputGroup>
    </div>
  );
}
