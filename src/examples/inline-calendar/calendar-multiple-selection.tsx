import * as React from "react";
import { Calendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [selected, setSelected] = React.useState<string[]>(["2026-11-10", "2026-11-18"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Calendar label="Event date" defaultFocusedValue="2026-11-10" selectionMode="multiple" selectedValues={selected} onSelectedValuesChange={setSelected} /><p role="status">Selected: {selected.join(", ")}</p></>
    </div>
  );
}
