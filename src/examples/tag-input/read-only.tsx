import * as React from "react";
import { TagInput, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [tags, setTags] = React.useState<string[]>(["Design", "React"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TagInput label="Project tags" name="tags" value={tags} onValueChange={setTags}  readOnly  /><output>Tags: {tags.join(", ") || "none"}</output>
    </div>
  );
}
