import { Link } from "hulmio-ui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Link href="#previous" icon={<ArrowLeft size={16} />} iconPlacement="start">Previous</Link><Link href="#next" icon={<ArrowRight size={16} />}>Next</Link></>
    </div>
  );
}
