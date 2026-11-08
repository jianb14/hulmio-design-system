import { ToggleGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <ToggleGroup label="View" defaultValue="grid" options={[{ value: "grid", label: "Grid" }, { value: "list", label: "List" }, { value: "board", label: "Board", disabled: true }]} />
  );
}
