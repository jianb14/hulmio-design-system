import { Disclosure } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Disclosure title="Shipping details">Standard delivery takes three to five business days.</Disclosure>
    </div>
  );
}
