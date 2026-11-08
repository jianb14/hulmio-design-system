import { useState } from "react";
import { Chip } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ display: "flex", gap: 10 }}><Chip selected={selected} onSelectedChange={setSelected}>Design resources</Chip><Chip disabled onSelectedChange={() => {}}>Unavailable</Chip></div>
  );
}
