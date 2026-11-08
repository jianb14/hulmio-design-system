import * as React from "react";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell, TableCaption } from "hulmio-ui";
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";
import type { SortingState } from "@tanstack/react-table";
import "hulmio-ui/styles.css";

export default function Example() {
  const data = React.useMemo(() => [{ id: 1, name: "Alex Morgan", role: "Designer", score: 92 }, { id: 2, name: "Sam Rivera", role: "Engineer", score: 87 }, { id: 3, name: "Jordan Lee", role: "Researcher", score: 96 }, { id: 4, name: "Taylor Kim", role: "Designer", score: 89 }, { id: 5, name: "Casey Adams", role: "Engineer", score: 94 }, { id: 6, name: "Robin Cruz", role: "Researcher", score: 91 }], []); const columns = React.useMemo(() => [{ accessorKey: "name", header: "Name" }, { accessorKey: "role", header: "Role" }, { accessorKey: "score", header: "Score" }], []); const [sorting, setSorting] = React.useState<SortingState>([]); const table = useReactTable({ data, columns, state: { sorting }, onSortingChange: setSorting, getCoreRowModel: getCoreRowModel(), getSortedRowModel: getSortedRowModel() });
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Table><TableCaption>TanStack powered team</TableCaption><TableHeader>{table.getHeaderGroups().map(group => <TableRow key={group.id}>{group.headers.map(header => <TableHead key={header.id} aria-sort={header.column.getIsSorted() === "asc" ? "ascending" : header.column.getIsSorted() === "desc" ? "descending" : undefined}><button type="button" onClick={header.column.getToggleSortingHandler()}>{flexRender(header.column.columnDef.header, header.getContext())} {header.column.getIsSorted() || ""}</button></TableHead>)}</TableRow>)}</TableHeader><TableBody>{table.getRowModel().rows.map(row => <TableRow key={row.id}>{row.getVisibleCells().map(cell => <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>)}</TableRow>)}</TableBody></Table>
    </div>
  );
}
