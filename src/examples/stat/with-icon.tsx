import { Stat } from "hulmio-ui";
import { Check } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))", width: "100%" }}><Stat label={<span><Check size={16} aria-hidden="true" /> Completed tasks</span>} value={24} variant="default"  description="This week" /></div>
    </div>
  );
}
