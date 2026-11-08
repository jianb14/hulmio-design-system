import { InputGroup, InputGroupAddon, InputGroupInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <InputGroup><InputGroupAddon>https://</InputGroupAddon><InputGroupInput aria-label="Website address" placeholder="your-site.com" /><InputGroupAddon>.com</InputGroupAddon></InputGroup>
    </div>
  );
}
