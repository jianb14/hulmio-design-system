import { ScrollShadow } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <ScrollShadow maxHeight={200} aria-label="Release notes"><div>{["A clear beginning", "A thoughtful detail", "A useful pattern", "A quiet improvement", "A little more room", "A considered finish", "Ready for your next idea"].map((note, index) => <p key={note} style={{ padding: 18, borderBottom: "1px solid var(--hulmio-border)" }}>0{index + 1}　{note}</p>)}</div></ScrollShadow>
  );
}
