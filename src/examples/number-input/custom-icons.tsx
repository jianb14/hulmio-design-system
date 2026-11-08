import { NumberField } from "hulmio-ui";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <NumberField label="Budget" defaultValue={1200} prefix={<Search size={16} aria-hidden="true" />} decrementIcon={<ChevronDown size={16} />} incrementIcon={<ChevronUp size={16} />} />
    </div>
  );
}
