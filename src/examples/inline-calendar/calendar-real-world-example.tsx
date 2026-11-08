import * as React from "react";
import { Calendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value, setValue] = React.useState("2026-11-10");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Calendar label="Event date" defaultFocusedValue="2026-11-10" value={value} onValueChange={setValue} minValue="2026-11-01" maxValue="2026-12-31" isDateUnavailable={value => ["2026-11-12", "2026-11-13", "2026-11-21"].includes(value)} /><p role="status">Your booking: {JSON.stringify(value)}</p></>
    </div>
  );
}
