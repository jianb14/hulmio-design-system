import * as React from "react";
import { Resizable, ResizablePanel, ResizableHandle, useResizableGroupRef, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const exampleId = React.useId();
  const [layout, setLayout] = React.useState(""); const groupRef = useResizableGroupRef();
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Resizable groupRef={groupRef} orientation="horizontal" style={{ width: "100%", height: 240 }} onLayoutChanged={layout => setLayout(JSON.stringify(layout))}><ResizablePanel id={exampleId + "-first"} defaultSize="40%" minSize="25%" maxSize="60%" ><p>Project navigation</p></ResizablePanel><ResizableHandle label="Resize project panels" /><ResizablePanel id={exampleId + "-second"} minSize="20%"><p>Room for your main content.</p></ResizablePanel></Resizable><output>Layout: {layout}</output>
    </div>
  );
}
