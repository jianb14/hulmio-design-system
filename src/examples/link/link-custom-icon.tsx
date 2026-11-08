import { Link } from "hulmio-ui";
import { ExternalLink } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Link href="https://example.com" target="_blank" rel="noreferrer" icon={<ExternalLink size={16} />}>Open external site</Link>
    </div>
  );
}
