import { Drawer, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Drawer title="Project details" description="Everything you need, close at hand." side="right" trigger={<Button>Open drawer</Button>}><p>Space for a little more context.</p></Drawer>
  );
}
