import { Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "grid", gap: 16 }}><Input label="Readonly workspace" readOnly defaultValue="Hulmio Studio" /><Input label="Disabled workspace" disabled placeholder="Unavailable" /></div>
  );
}
