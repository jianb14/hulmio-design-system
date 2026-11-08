import { Tabs } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><style>{".custom-tabs [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-tabs { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-tabs"><Tabs items={[{ value: "overview", label: "Overview", content: "A summary of your project." }, { value: "activity", label: "Activity", content: "The latest updates from your team." }, { value: "settings", label: "Settings", content: "Manage your project preferences." }]} /></div></>
    </div>
  );
}
