import { MultiSelect } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <MultiSelect label="Unavailable interests" disabled defaultValue={["design"]} options={[{ value: "design", label: "Design" }]} />
      <MultiSelect label="Choose optional interests" options={[]} />
    </div>
  );
}
