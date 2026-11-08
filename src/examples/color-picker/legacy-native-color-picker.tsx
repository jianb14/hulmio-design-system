import { ColorPicker } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <ColorPicker label="Brand color" defaultValue="#284c3f" name="color" />
  );
}
