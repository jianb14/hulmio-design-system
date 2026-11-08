import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Table>
      <TableCaption>Recent invoices</TableCaption>
      <TableHeader><TableRow><TableHead>Invoice</TableHead><TableHead>Status</TableHead><TableHead style={{ textAlign: "right" }}>Amount</TableHead></TableRow></TableHeader>
      <TableBody>{[{ id: "INV-001", status: "Paid", amount: "$250.00" }, { id: "INV-002", status: "Pending", amount: "$150.00" }, { id: "INV-003", status: "Paid", amount: "$350.00" }].map(row => <TableRow key={row.id}><TableHead scope="row">{row.id}</TableHead><TableCell>{row.status}</TableCell><TableCell style={{ textAlign: "right" }}>{row.amount}</TableCell></TableRow>)}</TableBody>
    </Table>
  );
}
