import { Card } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Card title="Default surface" description="For everyday content."><p>Your content belongs here.</p></Card>
      <Card variant="outlined" title="Outlined surface" description="A defined border, without a fill."><p>Your content belongs here.</p></Card>
      <Card variant="soft" title="Soft surface" description="A quiet brand-tinted surface."><p>Your content belongs here.</p></Card>
    </div>
  );
}
