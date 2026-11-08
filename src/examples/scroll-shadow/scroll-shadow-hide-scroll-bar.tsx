import { ScrollShadow } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ScrollShadow aria-label="Hidden scrollbar chapters" hideScrollBar maxHeight={200}><div style={{ display: "grid", gap: 16 }}>{Array.from({ length: 20 }, (_, index) => <p key={index}>Chapter {index + 1}: A considered approach to everyday work.</p>)}</div></ScrollShadow>
    </div>
  );
}
