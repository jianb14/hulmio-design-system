import { Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "grid", gap: 16 }}><Input controlSize="sm" label="Small" placeholder="Small input" /><Input label="Medium" placeholder="Medium input" /><Input controlSize="lg" label="Large" placeholder="Large input" /></div>
  );
}
