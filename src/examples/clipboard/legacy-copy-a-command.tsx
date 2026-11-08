import { Clipboard } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}><code>npm install ./hulmio-ui-0.1.0.tgz</code><Clipboard value="npm install ./hulmio-ui-0.1.0.tgz" variant="outline" size="sm">Copy command</Clipboard></div>
  );
}
