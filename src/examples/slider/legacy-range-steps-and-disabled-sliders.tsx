import { Slider } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Slider label="Price range" min={0} max={100} defaultValue={[20, 80]} />
      <Slider label="Stepped volume" step={10} defaultValue={40} />
      <Slider label="Unavailable volume" disabled defaultValue={60} />
    </div>
  );
}
