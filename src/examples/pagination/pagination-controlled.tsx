import * as React from "react";
import { Pagination, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [page, setPage] = React.useState(6);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Button onClick={() => setPage(1)}>Reset to first page</Button><Pagination page={page} totalPages={12} onPageChange={setPage} showSummary /></>
    </div>
  );
}
