import { ItemGroup, Item, ItemContent, ItemTitle, ItemDescription } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <ItemGroup><Item><ItemContent><ItemTitle>Default item</ItemTitle><ItemDescription>A simple list row.</ItemDescription></ItemContent></Item><Item variant="outline"><ItemContent><ItemTitle>Outlined item</ItemTitle><ItemDescription>A more defined boundary.</ItemDescription></ItemContent></Item><Item variant="muted"><ItemContent><ItemTitle>Muted item</ItemTitle><ItemDescription>A quiet surface.</ItemDescription></ItemContent></Item></ItemGroup>
    </div>
  );
}
