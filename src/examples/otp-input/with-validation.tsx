import { OtpInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <OtpInput label="Verification code" required error="Enter all six digits." />
    </div>
  );
}
