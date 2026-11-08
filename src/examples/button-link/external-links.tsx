import { ButtonLink } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ButtonLink href="https://github.com/jianb14/hulmio-design-system" target="_blank" rel="noreferrer"  >Browse components</ButtonLink>
    </div>
  );
}
