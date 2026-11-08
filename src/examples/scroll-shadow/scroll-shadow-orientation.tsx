import { ScrollShadow } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ScrollShadow aria-label="Horizontal chapters" orientation="horizontal" style={{ maxWidth: 420 }}><div style={{ display: "flex", width: "max-content", gap: 24 }}>{Array.from({ length: 12 }, (_, index) => <div key={index} style={{ minWidth: 140, padding: 24, background: "var(--hulmio-subtle)" }}>Chapter {index + 1}</div>)}</div></ScrollShadow>
    </div>
  );
}
