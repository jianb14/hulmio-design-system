import * as React from "react";
import { Pagination } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [page, setPage] = React.useState(5);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Pagination page={page} totalPages={24} onPageChange={setPage} disabled />
    </div>
  );
}
