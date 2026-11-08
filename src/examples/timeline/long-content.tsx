import { Timeline } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Timeline items={[{ id: "created", title: "Project created",  description: "A detailed project brief, research notes, accessibility requirements and implementation decisions are recorded for the entire team to review." }, { id: "reviewed", title: "Design reviewed",  description: "Ready to build together." }]} />
    </div>
  );
}
