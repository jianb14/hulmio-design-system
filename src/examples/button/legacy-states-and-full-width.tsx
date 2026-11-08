import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><Button loading>Saving changes</Button><Button disabled>Unavailable</Button><Button fullWidth>Continue to workspace</Button></div>
  );
}
