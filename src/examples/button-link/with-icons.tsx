import { ButtonLink } from "hulmio-ui";
import { ArrowRight } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ButtonLink href="#/components"   >Browse components<ArrowRight size={16} aria-hidden="true" /></ButtonLink>
    </div>
  );
}
