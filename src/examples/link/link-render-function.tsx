import { Link } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Link href="#projects" render={props => <a {...props} style={{ fontWeight: 700 }}>Explore projects <span aria-hidden="true">↗</span></a>} />
    </div>
  );
}
