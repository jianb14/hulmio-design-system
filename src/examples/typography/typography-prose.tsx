import { Typography } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Typography as="article" prose><h2>Build with intention</h2><p>A shared design language helps teams move together.</p><h3>Start with people</h3><p>Understand their goals, then create room for the work that matters.</p><ul><li>Keep content clear</li><li>Make actions predictable</li><li>Respect different abilities</li></ul><blockquote>Small details shape everyday experiences.</blockquote></Typography>
    </div>
  );
}
