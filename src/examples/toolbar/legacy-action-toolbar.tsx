import { Toolbar, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Toolbar label="Document tools"><Button variant="outline">Print</Button><Button>Save</Button></Toolbar>
  );
}
