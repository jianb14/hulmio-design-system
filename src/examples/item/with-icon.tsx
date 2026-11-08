import { ItemGroup, Item, ItemContent, ItemTitle, ItemDescription, ItemActions, ButtonLink, Avatar } from "hulmio-ui";
import { FileText } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ItemGroup aria-label="Project resources"><Item variant="outline"><FileText size={20} aria-hidden="true" /><ItemContent><ItemTitle>Getting started</ItemTitle><ItemDescription>Install Hulmio and build your first interface.</ItemDescription></ItemContent></Item></ItemGroup>
    </div>
  );
}
