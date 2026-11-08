import { Toast } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Toast title="Changes saved" description="Everything is up to date." tone="success" />
      <Toast title="Connection interrupted" description="Check your connection and try again." tone="danger" />
      <Toast title="A new update" description="Your team added a comment." tone="info" />
    </div>
  );
}
