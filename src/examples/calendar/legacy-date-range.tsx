import { useState } from "react";
import { DateRangePicker } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [range, setRange] = useState({ start: "2026-11-04", end: "2026-11-08" });
  return (
    <DateRangePicker label="Trip dates" start={range.start} end={range.end} onRangeChange={setRange} />
  );
}
