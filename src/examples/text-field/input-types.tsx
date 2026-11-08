import { TextField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"grid",gap:16}}><TextField label="email" type="email" /><TextField label="password" type="password" /><TextField label="url" type="url" /><TextField label="tel" type="tel" /></div>
    </div>
  );
}
