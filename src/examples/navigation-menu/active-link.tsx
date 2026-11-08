import * as React from "react";
import { NavigationMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [open, setOpen] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <NavigationMenu label="Example navigation"   items={[{ id: "components", label: "Components", content: <div style={{ display: "grid", gap: 12 }}><a href="#/components/button">Buttons</a><a href="#/components/input">Inputs</a></div> }, { id: "docs", label: "Documentation", href: "#/using-hulmio", active: true }]} />
    </div>
  );
}
