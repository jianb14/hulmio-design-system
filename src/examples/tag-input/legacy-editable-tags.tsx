import { TagInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <TagInput label="Project tags" defaultValue={["Design", "React"]} name="tags" />
  );
}
