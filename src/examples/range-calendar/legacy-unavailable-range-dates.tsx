import { useState } from "react";
import { RangeCalendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [range, setRange] = useState({ start: "2026-11-12", end: "2026-11-17" });
  return (
    <div style={{ display: "grid", gap: 16 }}><RangeCalendar label="Trip dates" value={range} onValueChange={setRange} minValue="2026-11-01" isDateUnavailable={value => ["2026-11-20", "2026-11-21"].includes(value)} /><output>{range.start} → {range.end}</output></div>
  );
}
