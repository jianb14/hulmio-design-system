import { CodeBlock } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <CodeBlock code={'import { Button } from "hulmio-ui";\n\nexport default function App() {\n  return <Button>Build something useful</Button>;\n}'} language="tsx" />
  );
}
