import { TextField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TextField label="Display name" placeholder="Type here…" description="This value is shared with your team." />
    </div>
  );
}
