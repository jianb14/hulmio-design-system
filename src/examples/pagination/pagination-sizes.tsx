import * as React from "react";
import { Pagination } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [page, setPage] = React.useState(3);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["sm", "md", "lg"] as const).map(size => <Pagination key={size} label={size + " pagination"} size={size} page={page} totalPages={10} onPageChange={setPage} />)}</>
    </div>
  );
}
