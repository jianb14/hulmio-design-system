import { Link } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Link href="#always" underline="always" className="underline decoration-2 underline-offset-4">Always underline</Link><Link href="#hover" underline="hover" className="hover:underline">Underline on hover</Link><Link href="#plain" underline="none" className="no-underline">Plain link</Link></>
    </div>
  );
}
