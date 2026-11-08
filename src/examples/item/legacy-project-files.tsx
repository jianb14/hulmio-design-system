import { ItemGroup, Item, ItemContent, ItemTitle, ItemDescription, ItemActions, ButtonLink, Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <ItemGroup aria-label="Project files">
      <Item>
        <ItemContent><ItemTitle>Getting started</ItemTitle><ItemDescription>Install Hulmio in your React project.</ItemDescription></ItemContent>
        <ItemActions><ButtonLink href="#/using-hulmio" variant="outline" size="sm">Open</ButtonLink></ItemActions>
      </Item>
      <Item>
        <ItemContent><ItemTitle>Design tokens</ItemTitle><ItemDescription>Shared colors, spacing, and typography.</ItemDescription></ItemContent>
        <ItemActions><Badge tone="neutral">CSS</Badge></ItemActions>
      </Item>
    </ItemGroup>
  );
}
