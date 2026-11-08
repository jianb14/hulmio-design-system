import { EmptyState, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <EmptyState title="A fresh start" description="Your projects will appear here." action={<Button>Create project</Button>} />
  );
}
