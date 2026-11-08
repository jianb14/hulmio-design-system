import { MultiSelect } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <MultiSelect label="Your interests" name="interests" defaultValue={["design"]} options={[{ value: "design", label: "Design" }, { value: "code", label: "Code" }, { value: "writing", label: "Writing" }]} />
  );
}
