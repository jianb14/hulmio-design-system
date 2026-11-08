import { useState } from "react";
import { ListBox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [keys, setKeys] = useState<string[]>(["design"]);
  const options = [{ id: "design", label: "Design", description: "Make room for a clear idea." }, { id: "engineering", label: "Engineering", description: "Build it with care." }, { id: "operations", label: "Operations", description: "Keep everything moving.", disabled: true }];
  return (
    <div><ListBox label="Teams" options={options} selectedKeys={keys} onSelectionChange={setKeys} selectionMode="multiple" /><output>Selected: {keys.join(", ") || "None"}</output></div>
  );
}
