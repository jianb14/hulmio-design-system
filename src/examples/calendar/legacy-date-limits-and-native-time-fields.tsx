import { DatePicker } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <DatePicker label="Project deadline" min="2026-11-01" max="2026-12-31" defaultValue="2026-11-15" />
      <DatePicker label="Meeting time" type="time" defaultValue="09:30" />
      <DatePicker label="Unavailable date" disabled />
    </div>
  );
}
