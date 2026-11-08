import { ListBox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><style>{".custom-list-box [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-list-box { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-list-box"><ListBox label="Team" options={[{ id: "design", label: "Design", description: "Create thoughtful experiences" }, { id: "engineering", label: "Engineering", description: "Build reliable products" }, { id: "research", label: "Research", description: "Understand customer needs" }]} /></div></>
    </div>
  );
}
