import { Toolbar, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Toolbar label="Tools" orientation="vertical"><Button variant="ghost">Select</Button><Button variant="ghost">Draw</Button><Button variant="ghost">Erase</Button></Toolbar>
    </div>
  );
}
