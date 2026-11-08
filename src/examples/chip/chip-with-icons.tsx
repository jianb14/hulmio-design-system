import { Chip } from "hulmio-ui";
import { Check, Clock } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Chip><Check size={14} /> Complete</Chip><Chip tone="warning"><Clock size={14} /> Pending</Chip></>
    </div>
  );
}
