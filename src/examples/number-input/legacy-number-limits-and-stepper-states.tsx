import { NumberInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <NumberInput label="Seats" min={1} max={10} step={1} defaultValue={4} />
      <NumberInput label="Readonly quantity" readOnly defaultValue={12} />
      <NumberInput label="Unavailable quantity" disabled defaultValue={0} />
    </div>
  );
}
