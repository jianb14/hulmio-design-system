import { Image } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Image src="/missing-example-image.png" alt="Green mountain landscape beneath a lime sun" aspectRatio={16 / 10} fallback={<span>The image could not be loaded.</span>} caption="Fallback preserves the image description and layout." />
  );
}
