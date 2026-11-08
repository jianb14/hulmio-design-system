import { NumberInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <NumberInput label="Team members" name="members" min={1} max={50} step={1} defaultValue={4} />
  );
}
