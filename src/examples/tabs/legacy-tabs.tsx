import { Tabs } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Tabs label="Project sections" defaultValue="overview" items={[{ value: "overview", label: "Overview", content: <p>Everything in one place.</p> }, { value: "details", label: "Details", content: <p>A closer look at the project.</p> }]} />
  );
}
