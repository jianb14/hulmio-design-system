import { Switch } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Switch label="Enable previews" />
      <Switch label="Enable sharing" defaultChecked />
      <Switch label="Unavailable preference" disabled />
      <Switch label="Locked preference" disabled defaultChecked />
    </div>
  );
}
