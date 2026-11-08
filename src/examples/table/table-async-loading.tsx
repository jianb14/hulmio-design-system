import * as React from "react";
import { DataTable } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [loadedRows, setLoadedRows] = React.useState<Array<Record<string, string | number>>>([]); const [loading, setLoading] = React.useState(true); const [request, setRequest] = React.useState(0); React.useEffect(() => { setLoading(true); const timer = setTimeout(() => { setLoadedRows([{ id: 1, name: "Alex Morgan", role: "Designer", score: 92 }, { id: 2, name: "Sam Rivera", role: "Engineer", score: 87 }, { id: 3, name: "Jordan Lee", role: "Researcher", score: 96 }, { id: 4, name: "Taylor Kim", role: "Designer", score: 89 }, { id: 5, name: "Casey Adams", role: "Engineer", score: 94 }, { id: 6, name: "Robin Cruz", role: "Researcher", score: 91 }]); setLoading(false); }, 900); return () => clearTimeout(timer); }, [request]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><DataTable caption="Team performance" columns={[{ key: "name", label: "Name", sortable: true }, { key: "role", label: "Role", sortable: true }, { key: "score", label: "Score", sortable: true }]} rows={loadedRows} loading={loading} /><button type="button" onClick={() => setRequest(previous => previous + 1)}>Reload data</button></>
    </div>
  );
}
