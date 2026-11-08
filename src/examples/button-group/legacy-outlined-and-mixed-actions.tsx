import { ButtonGroup, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <ButtonGroup label="Edit actions"><Button variant="outline">Cut</Button><Button variant="outline">Copy</Button><Button variant="outline">Paste</Button></ButtonGroup>
      <ButtonGroup label="Save actions"><Button>Save changes</Button><Button variant="outline">Cancel</Button></ButtonGroup>
    </div>
  );
}
