import { Container, Stack, Grid, Heading, Card } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Container>
      <Stack>
        <Heading as="h3">A place for good ideas</Heading>
        <Grid columns={2}><Card title="Design"><p>Make it clear.</p></Card><Card title="Build"><p>Make it work.</p></Card></Grid>
      </Stack>
    </Container>
  );
}
