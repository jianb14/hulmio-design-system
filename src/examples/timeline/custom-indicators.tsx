import { Timeline } from "hulmio-ui";
import { Check } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Timeline items={[{ id: "created", title: <span><Check size={16} aria-hidden="true" /> Project created</span>,  description: "The first idea is ready to share." }, { id: "reviewed", title: "Design reviewed",  description: "Ready to build together." }]} />
    </div>
  );
}
