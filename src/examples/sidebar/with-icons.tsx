import * as React from "react";
import { Sidebar, Button } from "hulmio-ui";
import { Accessibility } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Sidebar label="Example sidebar"><a href="#/components" >Components</a><a href="#/using-hulmio">Installation guide</a><a href="#/foundations/accessibility"><Accessibility size={16} aria-hidden="true" /> Accessibility</a></Sidebar><output role="status">{message}</output>
    </div>
  );
}
