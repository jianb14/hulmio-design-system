import { Popover, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Popover title="A little more context" trigger={<Button variant="outline">Project info</Button>}><p>This project is shared with your design team.</p></Popover>
  );
}
