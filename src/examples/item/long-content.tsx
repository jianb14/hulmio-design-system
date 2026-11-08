import { ItemGroup, Item, ItemContent, ItemTitle, ItemDescription, ItemActions, ButtonLink, Avatar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ItemGroup aria-label="Project resources"><Item variant="outline"><ItemContent><ItemTitle>A comprehensive guide to the component library and its accessibility requirements</ItemTitle><ItemDescription>Install Hulmio and build your first interface.</ItemDescription></ItemContent></Item></ItemGroup>
    </div>
  );
}
