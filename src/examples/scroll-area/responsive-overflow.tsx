import { ScrollArea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ScrollArea label="Project notes" maxHeight={200} ><div >{Array.from({ length: 12 }, (_, index) => <p key={index}>Note {index + 1}: Keep the next step clear for your team.</p>)}</div></ScrollArea>
    </div>
  );
}
