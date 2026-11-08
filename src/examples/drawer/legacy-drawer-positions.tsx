import { Drawer, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Drawer side="left" title="Left panel" trigger={<Button variant="outline">Open left panel</Button>}><p>Extra context, close at hand.</p></Drawer>
      <Drawer side="bottom" title="Bottom panel" trigger={<Button variant="outline">Open bottom panel</Button>}><p>A compact surface for the next step.</p></Drawer>
    </div>
  );
}
