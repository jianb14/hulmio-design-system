import { Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Input label="Contact email" type="email" leading={<span aria-hidden="true">@</span>} placeholder="you@example.com" />
      <Input label="Website" type="url" leading={<span>https://</span>} placeholder="your-site.com" />
      <Input label="Budget" type="number" leading={<span>$</span>} trailing={<span>USD</span>} placeholder="0.00" />
      <Input label="Phone number" type="tel" placeholder="+63 900 000 0000" />
    </div>
  );
}
