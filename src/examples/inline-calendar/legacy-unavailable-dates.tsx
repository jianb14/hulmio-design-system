import { useState } from "react";
import { Calendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [date, setDate] = useState("2026-11-12");
  return (
    <div style={{ display: "grid", gap: 16 }}><Calendar label="Available appointments" value={date} onValueChange={setDate} minValue="2026-11-06" isDateUnavailable={value => ["2026-11-15", "2026-11-22"].includes(value)} /><output>Selected: {date}</output></div>
  );
}
