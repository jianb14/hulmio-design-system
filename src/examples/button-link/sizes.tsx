import { ButtonLink } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", width: "100%" }}>{(["sm", "md", "lg"] as const).map(size => <ButtonLink key={size} size={size} href="#/components">Browse {size}</ButtonLink>)}</div>
    </div>
  );
}
