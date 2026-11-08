import * as React from "react";
import { Label } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const exampleId = React.useId();
  return (
    <div><Label htmlFor={exampleId + "-project-name"}>Project name</Label><input id={exampleId + "-project-name"} name="project" placeholder="Untitled project" /></div>
  );
}
