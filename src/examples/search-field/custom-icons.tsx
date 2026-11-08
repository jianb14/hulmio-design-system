import { SearchField } from "hulmio-ui";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <SearchField label="Search projects" placeholder="Type here…" prefix={<Search size={16} aria-hidden="true" />} />
    </div>
  );
}
