import * as React from "react";
import { OtpInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <OtpInput label="Verification code" value={value} onValueChange={setValue} /><output>{value.length} of 6 digits entered</output>
    </div>
  );
}
