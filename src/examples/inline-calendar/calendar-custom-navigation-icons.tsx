import { Calendar } from "hulmio-ui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Calendar label="Event date" defaultFocusedValue="2026-11-10" previousIcon={<ArrowLeft size={18} />} nextIcon={<ArrowRight size={18} />} /></>
    </div>
  );
}
