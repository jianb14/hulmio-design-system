import { Surface } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["default", "secondary", "tertiary", "transparent"] as const).map(variant => <Surface key={variant} variant={variant}>{variant} surface</Surface>)}</>
    </div>
  );
}
