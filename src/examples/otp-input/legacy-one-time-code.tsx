import { OtpInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <OtpInput label="Verification code" length={6} name="code" />
  );
}
