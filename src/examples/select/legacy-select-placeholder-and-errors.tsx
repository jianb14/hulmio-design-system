import { Select } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Select label="Choose a team" placeholder="Choose a team" options={[{ value: "design", label: "Design" }, { value: "engineering", label: "Engineering" }]} />
      <Select label="Team with error" error="Choose a team to continue." options={[{ value: "design", label: "Design" }]} />
      <Select label="Unavailable team" disabled options={[{ value: "design", label: "Design" }]} />
    </div>
  );
}
