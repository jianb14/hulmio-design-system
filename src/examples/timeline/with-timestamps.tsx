import { Timeline } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Timeline items={[{ id: "created", title: "Project created", date: "2026-11-01", description: "The first idea is ready to share." }, { id: "reviewed", title: "Design reviewed", date: "2026-11-04", description: "Ready to build together." }]} />
    </div>
  );
}
