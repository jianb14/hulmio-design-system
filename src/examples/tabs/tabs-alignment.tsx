import { Tabs } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["start", "center", "end"] as const).map(align => <Tabs key={align} label={align + " tabs"} align={align} items={[{ value: "overview", label: "Overview", content: "A summary of your project." }, { value: "activity", label: "Activity", content: "The latest updates from your team." }, { value: "settings", label: "Settings", content: "Manage your project preferences." }]} />)}</>
    </div>
  );
}
