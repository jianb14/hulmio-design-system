import { NavigationMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <NavigationMenu label="Example navigation" orientation="vertical" items={[{ id: "product", label: "Product", content: <div><strong>Make something useful.</strong><a href="#/components">Explore components</a><a href="#/foundations">Colors &amp; foundations</a></div> }, { id: "docs", label: "Documentation", href: "#/using-hulmio" }, { id: "examples", label: "Patterns", href: "#/patterns" }]} />
  );
}
