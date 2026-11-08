import { ScrollArea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <ScrollArea maxHeight={180} aria-label="Project notes">{Array.from({ length: 8 }, (_, index) => <p key={index}>Note {index + 1}: Keep the next step clear.</p>)}</ScrollArea>
  );
}
