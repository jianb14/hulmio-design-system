import { useState } from "react";
import { Calendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [date, setDate] = useState("2026-11-12");
  return (
    <div style={{ display: "grid", gap: 16 }}><Calendar label="Appointment date" value={date} onValueChange={setDate} /><output>Selected: {date}</output></div>
  );
}
