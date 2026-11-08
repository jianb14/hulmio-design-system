import { Container, Stack, Grid, Split, Card, Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Grid columns={2}  gap={16}><Card title="Design"><p>Make the next step clear.</p></Card><Card title="Build"><Stack gap={8}><Badge>React</Badge><Badge>TypeScript</Badge></Stack></Card></Grid>
    </div>
  );
}
