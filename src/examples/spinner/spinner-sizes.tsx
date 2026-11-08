import { Spinner } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["sm", "md", "lg"] as const).map(size => <Spinner key={size} size={size} label={size + " loading"} />)}</>
    </div>
  );
}
