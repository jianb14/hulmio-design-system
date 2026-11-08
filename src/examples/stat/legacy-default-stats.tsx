import { Stat } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}><Stat label="Monthly revenue" value="$24,850" change="↑ 12.8% from last month" trend="up" variant="default" /><Stat label="Active projects" value="38" change="3 projects delivered" variant="default" /></div>
  );
}
