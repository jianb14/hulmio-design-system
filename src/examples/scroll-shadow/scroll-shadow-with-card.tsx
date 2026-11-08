import { ScrollShadow, Card } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Card title="Reading list"><ScrollShadow aria-label="Reading list" maxHeight={180}><div style={{ display: "grid", gap: 16 }}>{Array.from({ length: 20 }, (_, index) => <p key={index}>Chapter {index + 1}: A considered approach to everyday work.</p>)}</div></ScrollShadow></Card>
    </div>
  );
}
