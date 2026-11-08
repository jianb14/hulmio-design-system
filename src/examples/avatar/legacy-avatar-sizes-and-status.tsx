import { Avatar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Avatar name="Alex Morgan" size="sm" />
      <Avatar name="Jules Santos" size="md" status="online" />
      <Avatar name="Morgan Lee" size="lg" status="busy" />
      <Avatar name="Riley Chen" size={64} status="away" />
    </div>
  );
}
