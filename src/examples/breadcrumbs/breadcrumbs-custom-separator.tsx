import { Breadcrumbs } from "hulmio-ui";
import { ChevronRight } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Breadcrumbs separator={<ChevronRight size={14} />} items={[{ label: "Home", href: "#home" }, { label: "Projects", href: "#projects" }, { label: "Overview" }]} />
    </div>
  );
}
