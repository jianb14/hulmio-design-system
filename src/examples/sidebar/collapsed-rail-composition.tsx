import * as React from "react";
import { Sidebar, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <details><summary>Navigation</summary><Sidebar label="Example sidebar"><a href="#/components" >Components</a><a href="#/using-hulmio">Docs</a></Sidebar></details>
    </div>
  );
}
