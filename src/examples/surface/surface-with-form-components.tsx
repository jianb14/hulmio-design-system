import * as React from "react";
import { Surface, Input, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [saved, setSaved] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Surface><form onSubmit={event => { event.preventDefault(); setSaved(true); }}><label>Project name<Input required defaultValue="Design system" /></label><Button type="submit">Save project</Button>{saved && <p role="status">Project saved.</p>}</form></Surface>
    </div>
  );
}
