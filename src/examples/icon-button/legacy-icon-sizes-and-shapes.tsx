import { IconButton } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <IconButton label="Add small item" size="sm">+</IconButton>
      <IconButton label="Add item" shape="circle">+</IconButton>
      <IconButton label="Add large item" variant="outline" size="lg">+</IconButton>
      <IconButton label="Unavailable action" disabled>+</IconButton>
    </div>
  );
}
