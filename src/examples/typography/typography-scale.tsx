import { Typography } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["display", "heading", "title", "body", "small", "caption", "code"] as const).map(type => <Typography key={type} type={type}>{type}: Design with purpose</Typography>)}</>
    </div>
  );
}
