import { Accordion, Heading, Text } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <section><Heading>Frequently asked questions</Heading><Text tone="muted">Everything you need to know about your order.</Text><Accordion items={[{ id: "delivery", title: "When will my order arrive?", content: "Standard delivery takes three to five business days." }, { id: "returns", title: "Can I return an item?", content: "Return unused items within thirty days." }, { id: "support", title: "How do I contact support?", content: "Our team is available Monday through Friday." }]} /></section>
    </div>
  );
}
