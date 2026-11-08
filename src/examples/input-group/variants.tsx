import { InputGroup, InputGroupAddon, InputGroupInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><InputGroup variant="outline"><InputGroupAddon>@</InputGroupAddon><InputGroupInput aria-label="outline username" placeholder="Username" /></InputGroup><InputGroup variant="filled"><InputGroupAddon>@</InputGroupAddon><InputGroupInput aria-label="filled username" placeholder="Username" /></InputGroup><InputGroup variant="underline"><InputGroupAddon>@</InputGroupAddon><InputGroupInput aria-label="underline username" placeholder="Username" /></InputGroup></div>
    </div>
  );
}
