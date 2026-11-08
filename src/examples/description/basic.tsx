import { TextField, Description } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Description>Use your full name as it appears on your profile.</Description>
    </div>
  );
}
