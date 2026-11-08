import { Stat } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))", width: "100%" }}><Stat label={"Completed tasks"} value={24} variant="default" change="3 more than last week" trend="up" description="This week" /><Stat label="Open issues" value={7} change="2 fewer than last week" trend="down" /></div>
    </div>
  );
}
