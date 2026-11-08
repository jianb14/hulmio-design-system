import { Toolbar, Button, Surface } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Surface style={{ padding: 0 }}><Toolbar label="Document actions" attached><Button variant="ghost">Edit</Button><Button variant="ghost">Share</Button></Toolbar><p style={{ padding: 20 }}>Document content</p></Surface>
    </div>
  );
}
