import { Spinner } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Spinner size="sm" label="Loading small preview" />
      <Spinner size="md" label="Loading preview" />
      <Spinner size="lg" label="Loading large preview" />
    </div>
  );
}
