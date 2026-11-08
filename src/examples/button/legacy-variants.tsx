import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="soft">Soft</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="information">Information</Button></div>
  );
}
