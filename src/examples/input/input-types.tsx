import { Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"grid",gap:16}}><Input label="text" type="text" /><Input label="email" type="email" /><Input label="password" type="password" /><Input label="number" type="number" /><Input label="date" type="date" /><Input label="url" type="url" /><Input label="tel" type="tel" /><Input label="search" type="search" /></div>
    </div>
  );
}
