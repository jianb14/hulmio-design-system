import { Container, Stack, Grid, Split, Card, Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Container maxWidth={320}><Card title="320 px container"><p>A bounded reading area.</p></Card></Container><Container maxWidth={560}><Card title="560 px container"><p>A little more room.</p></Card></Container>
    </div>
  );
}
