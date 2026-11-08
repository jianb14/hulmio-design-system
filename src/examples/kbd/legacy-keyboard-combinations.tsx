import { Kbd } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <span><Kbd>⌘</Kbd> <Kbd>K</Kbd></span>
      <span><Kbd>Ctrl</Kbd> <Kbd>Shift</Kbd> <Kbd>P</Kbd></span>
      <Kbd>Esc</Kbd>
    </div>
  );
}
