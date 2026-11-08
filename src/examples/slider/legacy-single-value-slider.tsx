import { Slider } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Slider label="Volume" name="volume" min={0} max={100} step={5} defaultValue={60} />
  );
}
