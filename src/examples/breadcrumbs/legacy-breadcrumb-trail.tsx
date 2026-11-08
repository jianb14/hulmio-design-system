import { Breadcrumbs } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Breadcrumbs items={[{ label: "Home", href: "#/" }, { label: "Components", href: "#/components" }, { label: "Breadcrumbs" }]} />
  );
}
