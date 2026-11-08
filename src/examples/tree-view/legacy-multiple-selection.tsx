import { useState } from "react";
import { TreeView } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [keys, setKeys] = useState<string[]>(["home"]);
  const items = [{ id: "project", label: "Website", children: [{ id: "pages", label: "Pages", children: [{ id: "home", label: "Home.tsx" }, { id: "about", label: "About.tsx" }] }, { id: "styles", label: "Styles.css" }] }, { id: "readme", label: "README.md" }, { id: "archive", label: "Archive", disabled: true }];
  return (
    <div><TreeView label="Project files" items={items} defaultExpandedKeys={["project", "pages"]} selectedKeys={keys} onSelectionChange={setKeys} selectionMode="multiple" /><output>Selected: {keys.join(", ") || "None"}</output></div>
  );
}
