import { ButtonGroup, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <ButtonGroup label="Document actions">
      <Button variant="outline">Print</Button>
      <Button>Save</Button>
    </ButtonGroup>
  );
}
