import { Chart } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Chart label="Weekly completed tasks" variant="area" data={[{ label: "Mon", value: 12 }, { label: "Tue", value: 19 }, { label: "Wed", value: 15 }, { label: "Thu", value: 24 }, { label: "Fri", value: 21 }]} />
  );
}
