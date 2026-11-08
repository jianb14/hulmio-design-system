import * as React from "react";
import { Carousel, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [slide, setSlide] = React.useState(0);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Carousel label="Design process" value={slide} onValueChange={setSlide} items={[<p key="discover">Discover the useful idea.</p>, <p key="design">Make room for the details.</p>, <p key="build">Build it with care.</p>]} renderControls={({ index, goTo, count }) => <div role="group" aria-label="Choose a slide">{Array.from({ length: count }, (_, item) => <Button key={item} variant={item === index ? "primary" : "outline"} aria-pressed={item === index} onClick={() => goTo(item)}>{item + 1}</Button>)}</div>} /><output>Slide {slide + 1} of 3.</output>
    </div>
  );
}
