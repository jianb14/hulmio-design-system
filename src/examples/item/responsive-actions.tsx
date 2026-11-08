import { ItemGroup, Item, ItemContent, ItemTitle, ItemDescription, ItemActions, ButtonLink, Avatar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ItemGroup aria-label="Project resources"><Item variant="outline"><ItemContent><ItemTitle>Getting started</ItemTitle><ItemDescription>Install Hulmio and build your first interface.</ItemDescription></ItemContent><ItemActions><ButtonLink href="#/using-hulmio" variant="outline" size="sm">Open guide</ButtonLink></ItemActions></Item></ItemGroup>
    </div>
  );
}
