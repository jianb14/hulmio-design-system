import { Toolbar, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><style>{".custom-toolbar [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-toolbar { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-toolbar"><Toolbar label="Formatting"><Button variant="ghost">Bold</Button><Button variant="ghost">Italic</Button><Button variant="ghost">Underline</Button></Toolbar></div></>
    </div>
  );
}
