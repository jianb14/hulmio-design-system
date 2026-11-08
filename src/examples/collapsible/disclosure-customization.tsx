import { Disclosure } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><style>{".custom-disclosure [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-disclosure { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-disclosure"><Disclosure title="Shipping details">Standard delivery takes three to five business days.</Disclosure></div></>
    </div>
  );
}
