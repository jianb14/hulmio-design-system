import { Spinner } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["neutral", "primary", "success", "warning", "danger", "info"] as const).map(tone => <Spinner key={tone} tone={tone} label={tone + " loading"} />)}</>
    </div>
  );
}
