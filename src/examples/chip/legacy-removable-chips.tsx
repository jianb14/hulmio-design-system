import { useState } from "react";
import { Chip, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [tags, setTags] = useState(["Design", "React", "Accessible"]);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{tags.map(tag => <Chip key={tag} removeLabel={`Remove ${tag}`} onRemove={() => setTags(previous => previous.filter(value => value !== tag))}>{tag}</Chip>)}{tags.length < 3 && <Button variant="ghost" size="sm" onClick={() => setTags(["Design", "React", "Accessible"])}>Reset tags</Button>}</div>
  );
}
