import { ListBox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ListBox label="Team departments" options={[]} sections={[{ id: "product", label: "Product", options: [{ id: "design", label: "Design", description: "Create thoughtful experiences" }, { id: "engineering", label: "Engineering", description: "Build reliable products" }, { id: "research", label: "Research", description: "Understand customer needs" }].slice(0, 2) }, { id: "insights", label: "Insights", options: [{ id: "design", label: "Design", description: "Create thoughtful experiences" }, { id: "engineering", label: "Engineering", description: "Build reliable products" }, { id: "research", label: "Research", description: "Understand customer needs" }].slice(2) }]} />
    </div>
  );
}
