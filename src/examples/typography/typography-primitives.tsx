import { Typography } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Typography as="h2" type="heading">A clear beginning</Typography><Typography as="p">Body copy with a comfortable reading rhythm.</Typography><Typography as="blockquote" tone="muted">Good design makes the next step clear.</Typography><Typography as="code" type="code">npm install hulmio-ui</Typography></>
    </div>
  );
}
