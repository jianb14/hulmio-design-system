import { Toolbar, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Toolbar label="Formatting"><Button variant="ghost">Bold</Button><Button variant="ghost">Italic</Button><Button variant="ghost">Underline</Button></Toolbar>
    </div>
  );
}
