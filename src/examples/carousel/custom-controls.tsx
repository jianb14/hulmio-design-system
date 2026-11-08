import * as React from "react";
import { Carousel, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [slide, setSlide] = React.useState(0);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Carousel label="Design process" value={slide} onValueChange={setSlide} items={[<p key="discover">Discover the useful idea.</p>, <p key="design">Make room for the details.</p>, <p key="build">Build it with care.</p>]} renderControls={({ index, previous, next, count }) => <div style={{ display: "flex", gap: 12 }}><Button variant="outline" disabled={index === 0} onClick={previous}>Back</Button><Button disabled={index === count - 1} onClick={next}>Continue</Button></div>} /><output>Slide {slide + 1} of 3.</output>
    </div>
  );
}
