import { Stepper } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Stepper steps={["Details", "Review", "Complete"]} current={2} />
    </div>
  );
}
