import { Toggle } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Toggle>Grid view</Toggle>
      <Toggle defaultPressed>Selected view</Toggle>
      <Toggle disabled>Unavailable view</Toggle>
    </div>
  );
}
