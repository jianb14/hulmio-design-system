import * as React from "react";
import { HoverCard, Button, Avatar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [open, setOpen] = React.useState(false); const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <HoverCard trigger={<a href="#/components/avatar">Alex Morgan</a>} side="right"   ><Avatar name="Alex Morgan" /><p>Product designer at Hulmio Studio.</p></HoverCard>
    </div>
  );
}
