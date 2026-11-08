import { ErrorMessage } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ErrorMessage style={{borderLeft:"3px solid currentColor",paddingLeft:12}}>Unable to save your changes. Try again.</ErrorMessage>
    </div>
  );
}
