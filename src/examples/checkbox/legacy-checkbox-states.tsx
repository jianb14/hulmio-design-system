import { Checkbox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Checkbox label="Unchecked option" />
      <Checkbox label="Checked option" defaultChecked />
      <Checkbox label="Partial selection" indeterminate />
      <Checkbox label="Disabled option" disabled />
      <Checkbox label="Disabled checked option" disabled defaultChecked />
    </div>
  );
}
