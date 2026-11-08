import { AlertDialog, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <AlertDialog title="Archive this workspace?" description="You can restore it later from your archive." trigger={<Button variant="outline">Archive workspace</Button>} confirmLabel="Archive" onConfirm={() => {}} />
    </div>
  );
}
