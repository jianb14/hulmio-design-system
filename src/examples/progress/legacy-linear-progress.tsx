import { Progress } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Progress label="Preparing files" value={64} />
  );
}
