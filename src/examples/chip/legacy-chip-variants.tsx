import { Chip } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}><Chip variant="solid" tone="primary">Solid</Chip><Chip variant="soft" tone="success">Soft</Chip><Chip variant="outline" tone="info">Outline</Chip><Chip size="sm">Small</Chip></div>
  );
}
