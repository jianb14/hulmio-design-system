import * as React from "react";
import { SearchField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <SearchField label="Search projects" placeholder="Type here…" style={{"--hulmio-radius":"18px",maxWidth:420} as React.CSSProperties} inputClassName="custom-field-entry" />
    </div>
  );
}
