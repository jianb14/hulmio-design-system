import { Switch } from "hulmio-ui";
import { Sun } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Switch label="Email notifications" thumbIcon={<Sun size={11} aria-hidden="true" />} />
    </div>
  );
}
