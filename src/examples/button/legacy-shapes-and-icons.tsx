import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><Button shape="rounded">Rounded</Button><Button shape="pill">Pill</Button><Button shape="square">Square</Button><Button shape="circle" aria-label="Add item">+</Button><Button><span aria-hidden="true">+</span> Create project</Button></div>
  );
}
