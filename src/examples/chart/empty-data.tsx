import { Chart } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Chart label="Weekly completed tasks" variant="bar" data={[]}  />
    </div>
  );
}
