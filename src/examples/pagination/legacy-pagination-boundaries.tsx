import { useState } from "react";
import { Pagination } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [first, setFirst] = useState(1); const [last, setLast] = useState(5);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Pagination label="First page example" page={first} totalPages={5} onPageChange={setFirst} />
      <Pagination label="Last page example" page={last} totalPages={5} onPageChange={setLast} />
    </div>
  );
}
