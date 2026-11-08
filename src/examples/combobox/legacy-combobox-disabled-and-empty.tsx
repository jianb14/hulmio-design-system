import { Combobox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Combobox label="Unavailable city" disabled options={[{ value: "Manila", label: "Manila" }]} />
      <Combobox label="Search empty collection" options={[]} placeholder="Search cities" />
    </div>
  );
}
