import { Breadcrumbs } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Breadcrumbs items={[{ label: "Home", href: "#home" }, { label: "Projects" }]} renderItem={(item, { current }) => <span style={{ fontWeight: current ? 700 : 400 }}>{item.label}</span>} />
    </div>
  );
}
