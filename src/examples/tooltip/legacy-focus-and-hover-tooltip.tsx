import { Tooltip, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Tooltip content="Add a new project" side="top"><Button variant="outline">New project</Button></Tooltip>
  );
}
