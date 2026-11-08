import { Progress } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Progress label="Starting" value={0} />
      <Progress label="Complete" value={100} />
      <Progress label="Working" indeterminate />
      <Progress label="Circular progress" value={72} circular />
    </div>
  );
}
