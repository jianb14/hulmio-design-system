import { Alert } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      {(["info", "success", "warning", "danger"] as const).map(tone => <Alert key={tone} title={`${tone[0].toUpperCase()}${tone.slice(1)} update`} tone={tone}>Keep the next step clear with a useful message.</Alert>)}
    </div>
  );
}
