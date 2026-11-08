import { EmptyState, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <EmptyState title="No matching projects" description="Try a different search or clear your filters." action={<Button variant="outline">Clear filters</Button>} />
      <EmptyState title="Could not load projects" description="Check your connection and try again." action={<Button>Try again</Button>} />
    </div>
  );
}
