import { RangeCalendar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><style>{".custom-range-calendar [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-range-calendar { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-range-calendar"><><RangeCalendar label="Travel dates" defaultFocusedValue="2026-11-10"  /></></div></>
    </div>
  );
}
