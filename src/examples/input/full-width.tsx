import { Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Input label="Project name" placeholder="Untitled project" style={{width:"100%"}} />
    </div>
  );
}
