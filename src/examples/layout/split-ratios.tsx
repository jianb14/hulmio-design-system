import { Container, Stack, Grid, Split, Card, Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Split ratio="2fr 1fr"><Card title="Main content" /><Card title="Context" /></Split>
    </div>
  );
}
