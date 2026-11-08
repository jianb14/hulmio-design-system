import { Dialog, Button, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Dialog title="A focused moment" description="Keep the next step clear." trigger={<Button>Open dialog</Button>}>
      <p>Your project is ready for a final look.</p>
      <DialogClose asChild><Button variant="outline">Done</Button></DialogClose>
    </Dialog>
  );
}
