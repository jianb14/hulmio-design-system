import { ButtonLink } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <ButtonLink href="#/components" variant="primary">Browse components</ButtonLink>
      <ButtonLink href="#/using-hulmio" variant="outline">Installation</ButtonLink>
      <ButtonLink href="#/patterns" variant="ghost">Patterns</ButtonLink>
    </div>
  );
}
