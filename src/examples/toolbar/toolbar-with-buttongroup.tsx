import { Toolbar, Button, ButtonGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Toolbar label="Document tools"><ButtonGroup label="Text style"><Button variant="secondary">Bold</Button><Button variant="secondary">Italic</Button></ButtonGroup><Button variant="primary">Save</Button></Toolbar>
    </div>
  );
}
