import { useState } from "react";
import { InputGroup, InputGroupInput, InputGroupAddon, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  return (
    <form onSubmit={event => { event.preventDefault(); const query = new FormData(event.currentTarget).get("query"); setMessage(query ? `Results for ${query}` : "Enter a project name."); }}>
      <InputGroup>
        <InputGroupAddon aria-hidden="true">⌕</InputGroupAddon>
        <InputGroupInput type="search" aria-label="Search projects" name="query" placeholder="Search projects…" />
        <InputGroupAddon><Button size="sm" variant="secondary" type="submit">Search</Button></InputGroupAddon>
      </InputGroup>
      {message && <p role="status">{message}</p>}
    </form>
  );
}
