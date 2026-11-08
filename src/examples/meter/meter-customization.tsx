import { Meter } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><style>{".custom-meter [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-meter { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-meter"><Meter label="Storage" value={64} /></div></>
    </div>
  );
}
