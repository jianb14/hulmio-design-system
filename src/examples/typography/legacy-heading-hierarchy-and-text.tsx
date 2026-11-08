import { Heading, Text } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <div><Heading as="h2">A clear heading</Heading><Heading as="h3">A useful subheading</Heading><Heading as="h4">A little more detail</Heading><Text>Comfortable body text for your interface.</Text><Text tone="muted">Secondary information, still readable.</Text></div>
    </div>
  );
}
