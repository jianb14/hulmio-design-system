import { Card } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><style>{".custom-card [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-card { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-card"><Card title="Project overview" description="A shared place for your team.">Keep your research, decisions and next steps together.</Card></div></>
    </div>
  );
}
