import * as React from "react";
import { OtpInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message,setMessage] = React.useState("Enter six digits");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <OtpInput label="Verification code" onComplete={value => setMessage(`Completed: ${value}`)} /><output role="status">{message}</output>
    </div>
  );
}
