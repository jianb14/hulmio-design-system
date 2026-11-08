import { NumberField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <NumberField label="Budget" defaultValue={1200} minValue={100} maxValue={5000} validate={value => value > 3000 ? "Budget must be 3000 or less." : null} description="Allowed budget: 100 to 3000." />
    </div>
  );
}
