import { Card } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Card title="Project overview" description="A shared place for your team.">Keep your research, decisions and next steps together.</Card>
    </div>
  );
}
