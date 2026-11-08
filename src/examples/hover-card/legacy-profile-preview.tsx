import { HoverCard, Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <HoverCard trigger={<a href="#studio">Hulmio Studio</a>}><Badge tone="success">Open source</Badge><h3>A little more context.</h3><p>A considered React library for the things you are building next.</p></HoverCard>
  );
}
