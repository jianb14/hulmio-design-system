import { useState } from "react";
import { Pagination } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [page, setPage] = useState(1);
  return (
    <Pagination page={page} totalPages={5} onPageChange={setPage} />
  );
}
