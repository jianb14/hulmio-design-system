import { Tabs } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Tabs style={{ maxWidth: 420 }} items={Array.from({ length: 15 }, (_, index) => ({ value: String(index), label: `Section ${index + 1}`, content: `Content for section ${index + 1}` }))} />
    </div>
  );
}
