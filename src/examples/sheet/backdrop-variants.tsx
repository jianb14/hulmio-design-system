import * as React from "react";
import { Button, Sheet, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(["opaque", "blur", "transparent"] as const).map(backdrop => <Sheet key={backdrop} title={backdrop + " backdrop"} description="The surface remains keyboard accessible." backdrop={backdrop} trigger={<Button variant="outline">{backdrop}</Button>} ><p>Review the changes before continuing.</p></Sheet>)}<p role="status">{message}</p></div>
    </div>
  );
}
