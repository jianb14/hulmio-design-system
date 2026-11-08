import { OtpInput } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><OtpInput label="Standard" defaultValue="123" /><OtpInput label="Masked" masked defaultValue="456" /></div>
    </div>
  );
}
