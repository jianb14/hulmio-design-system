import * as React from "react";
import { Resizable, ResizablePanel, ResizableHandle } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const exampleId = React.useId();
  return (
    <Resizable orientation="horizontal" style={{ height: 220 }}><ResizablePanel id={exampleId + "-sidebar"} defaultSize="35%" minSize="20%"><strong>Project files</strong><p>Overview<br />Design tokens<br />Components</p></ResizablePanel><ResizableHandle label="Resize project panels" /><ResizablePanel id={exampleId + "-content"} minSize="25%"><strong>A flexible workspace.</strong><p>Drag the divider, or focus it and use the arrow keys.</p></ResizablePanel></Resizable>
  );
}
