import { useState } from "react";
import { AlertDialog, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [deleted, setDeleted] = useState(false);
  return (
    <div>
      <AlertDialog title="Delete this project?" description="This removes the project and its files. This action cannot be undone." trigger={<Button variant="outline">Delete project</Button>} confirmLabel="Delete" destructive onConfirm={() => setDeleted(true)} />
      {deleted && <p role="status">Project deleted.</p>}
    </div>
  );
}
