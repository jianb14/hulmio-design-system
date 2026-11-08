import { Meter } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Meter label="Storage used" value={64} valueText="6.4 GB of 10 GB" />
  );
}
