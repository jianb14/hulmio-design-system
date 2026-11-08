import { Image } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Image src={"data:image/png;base64,invalid"} alt="Green mountains beneath a pale sky" aspectRatio={16 / 10} fit="cover"  loading="eager" caption="Project artwork" style={{ width: "100%", maxWidth: 480 }} />
    </div>
  );
}
