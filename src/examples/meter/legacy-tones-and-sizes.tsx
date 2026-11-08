import { Meter } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "grid", gap: 20 }}><Meter label="Storage used" value={64} valueText="6.4 GB of 10 GB" /><Meter label="Monthly requests" value={84} valueText="84% of allowance" tone="warning" /><Meter label="Team capacity" value={96} valueText="24 of 25 seats" tone="danger" size="sm" /></div>
  );
}
