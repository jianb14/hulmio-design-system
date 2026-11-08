import { Typography } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Typography type="title" render={props => <h3 {...props} style={{ ...props.style, color: "var(--hulmio-primary)" }}>A custom semantic heading</h3>} />
    </div>
  );
}
