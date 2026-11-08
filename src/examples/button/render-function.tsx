import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Button variant="secondary">{({ isPressed, isHovered, isFocused }) => isPressed ? "Pressed" : isHovered ? "Hovered" : isFocused ? "Hold to preview" : "Hold to preview"}</Button>
    </div>
  );
}
