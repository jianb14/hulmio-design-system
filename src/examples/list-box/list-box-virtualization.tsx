import * as React from "react";
import { ListBox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const people = React.useMemo(() => Array.from({ length: 10000 }, (_, index) => ({ id: String(index), label: `Person ${index + 1}` })), []);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ListBox label="Ten thousand people" options={people} virtualized height={280} rowHeight={40} />
    </div>
  );
}
