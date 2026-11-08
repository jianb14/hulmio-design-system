import { ScrollShadow } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><style>{".custom-scroll-shadow [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-scroll-shadow { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-scroll-shadow"><ScrollShadow aria-label="Chapters" maxHeight={200}><div style={{ display: "grid", gap: 16 }}>{Array.from({ length: 20 }, (_, index) => <p key={index}>Chapter {index + 1}: A considered approach to everyday work.</p>)}</div></ScrollShadow></div></>
    </div>
  );
}
