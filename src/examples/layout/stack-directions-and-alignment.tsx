import { Container, Stack, Grid, Split, Card, Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Stack direction="row" align="center" justify="space-between"><Badge>Design</Badge><Badge>Build</Badge><Badge>Review</Badge></Stack><Stack direction="column" align="start" gap={8}><Badge>Design</Badge><Badge>Build</Badge></Stack>
    </div>
  );
}
