import { AspectRatio } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <AspectRatio ratio={16 / 9} style={{ width: "100%", maxWidth: 480, background: "var(--hulmio-subtle)" }}><img src={"data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"640\" height=\"400\" viewBox=\"0 0 640 400\"%3E%3Crect width=\"640\" height=\"400\" fill=\"%23dce6dd\"/%3E%3Cpath d=\"M0 340 180 100 320 280 430 150 640 400H0\" fill=\"%233c6850\"/%3E%3Ccircle cx=\"490\" cy=\"85\" r=\"35\" fill=\"%23d3e5a8\"/%3E%3C/svg%3E"} alt="Green mountains under a pale sky" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></AspectRatio>
    </div>
  );
}
