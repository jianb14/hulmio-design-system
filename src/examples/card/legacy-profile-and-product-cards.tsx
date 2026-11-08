import { Card, Avatar, Badge, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Card title="Alex Morgan" description="Product designer"><Avatar name="Alex Morgan" size="lg" /><p>Designing the next useful thing.</p><Button variant="outline">View profile</Button></Card>
      <Card title="Studio workspace" description="A place for your next project."><Badge tone="success">Available</Badge><p>Shared components, one clear system.</p><Button>Open workspace</Button></Card>
    </div>
  );
}
