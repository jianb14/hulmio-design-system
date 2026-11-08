import * as React from "react";
import { Rating, Button } from "hulmio-ui";
import { Heart } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value, setValue] = React.useState(4); const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <form onSubmit={event => { event.preventDefault(); setMessage("Rating submitted: " + new FormData(event.currentTarget).get("rating")); }}><Rating label="Your rating" name="rating" value={value} onValueChange={setValue}    renderIcon={(value, filled) => <Heart size={22} fill={filled ? "currentColor" : "none"} aria-hidden="true" />}  /></form><output role="status">{message || "Current rating: " + value}</output>
    </div>
  );
}
