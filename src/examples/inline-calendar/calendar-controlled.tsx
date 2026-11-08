import * as React from "react";
import { Calendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value, setValue] = React.useState("2026-11-10");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Calendar label="Event date" defaultFocusedValue="2026-11-10" value={value} onValueChange={setValue} /><p role="status">Selected: {JSON.stringify(value)}</p></>
    </div>
  );
}
