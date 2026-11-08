import { DisclosureGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><style>{".custom-disclosure-group [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-disclosure-group { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-disclosure-group"><DisclosureGroup items={[{ id: "delivery", title: "When will my order arrive?", content: "Standard delivery takes three to five business days." }, { id: "returns", title: "Can I return an item?", content: "Return unused items within thirty days." }, { id: "support", title: "How do I contact support?", content: "Our team is available Monday through Friday." }]} /></div></>
    </div>
  );
}
