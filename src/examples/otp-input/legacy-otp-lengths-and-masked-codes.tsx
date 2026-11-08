import { OtpInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <OtpInput label="Four-digit PIN" length={4} masked />
      <OtpInput label="Unavailable code" length={6} disabled />
    </div>
  );
}
