import { Timeline } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Timeline items={[{ id: "1", title: "Project created", date: "2026-11-01", description: "The first small step." }, { id: "2", title: "Design reviewed", date: "2026-11-04", description: "Ready to build." }]} />
  );
}
