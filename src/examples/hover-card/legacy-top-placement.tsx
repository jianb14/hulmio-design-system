import { HoverCard } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <HoverCard side="top" trigger={<a href="#studio">Hulmio Studio</a>}><h3>A little more context.</h3><p>Supplementary information, just above the link.</p></HoverCard>
  );
}
