import * as React from "react";
import { RangeCalendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [focus, setFocus] = React.useState("2026-11-18");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><RangeCalendar label="Travel dates" defaultFocusedValue="2026-11-10" focusedValue={focus} onFocusChange={setFocus} /><p role="status">Focused: {focus}</p></>
    </div>
  );
}
