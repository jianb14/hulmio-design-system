import * as React from "react";
import { RangeCalendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value, setValue] = React.useState({ start: "2026-11-10", end: "2026-11-14" });
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><RangeCalendar label="Travel dates" defaultFocusedValue="2026-11-10" value={value} onValueChange={setValue} /><p role="status">Selected: {JSON.stringify(value)}</p></>
    </div>
  );
}
