import { ButtonLink } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", width: "100%" }}>{(["primary", "secondary", "outline", "ghost", "link"] as const).map(variant => <ButtonLink key={variant} variant={variant} href="#/components">{variant}</ButtonLink>)}</div>
    </div>
  );
}
