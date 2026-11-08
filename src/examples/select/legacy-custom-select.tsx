import { Select } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Select label="Workspace" name="workspace" defaultValue="studio" options={[{ value: "studio", label: "Design studio" }, { value: "personal", label: "Personal" }, { value: "archive", label: "Archive", disabled: true }]} />
  );
}
