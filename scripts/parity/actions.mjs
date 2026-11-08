const variants = ["primary", "secondary", "tertiary", "outline", "ghost", "destructive", "destructive-soft", "soft", "link", "success", "warning", "information"];
const notice = '<output role="status">{message}</output>';
const messageState = 'const [message, setMessage] = React.useState("");';
const row = body => `<div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>${body}</div>`;
const timedState = `const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  React.useEffect(() => () => clearTimeout(timer.current), []);
  function upload() { if (loading) return; setLoading(true); setMessage(""); timer.current = setTimeout(() => { setLoading(false); setMessage("File uploaded."); }, 1200); }`;

function button(title) {
  const base = { family: "button", referenceId: "button", title, imports: "Button", setup: messageState };
  switch (title) {
    case "Basic": return { ...base, setup: 'const [count, setCount] = React.useState(0);', body: '<Button onClick={() => setCount(count + 1)}>Click me</Button><output role="status">Pressed {count} {count === 1 ? "time" : "times"}.</output>' };
    case "Variants": return { ...base, body: row(`{(${JSON.stringify(variants)} as const).map(variant => <Button key={variant} variant={variant} onClick={() => setMessage(variant + " selected.")}>{variant.replaceAll("-", " ").replace(/^./, letter => letter.toUpperCase())}</Button>)}`) + notice };
    case "Sizes": return { ...base, body: row('{(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Button key={size} size={size} onClick={() => setMessage(size.toUpperCase() + " selected.")}>Button {size.toUpperCase()}</Button>)}') + notice };
    case "With Icons": return { ...base, icons: "Search, Plus, Mail, Trash2", body: row('<Button onClick={() => setMessage("Search opened.")}><Search size={16} aria-hidden="true" />Search</Button><Button variant="secondary" onClick={() => setMessage("Member added.")}><Plus size={16} aria-hidden="true" />Add member</Button><Button variant="tertiary" onClick={() => setMessage("Email opened.")}><Mail size={16} aria-hidden="true" />Email</Button><Button variant="destructive" onClick={() => setMessage("Item deleted.")}><Trash2 size={16} aria-hidden="true" />Delete</Button>') + notice };
    case "Icon Only": return { ...base, imports: "IconButton", icons: "Ellipsis, Settings, Trash2", body: row('<IconButton label="More options" variant="tertiary" onClick={() => setMessage("Options opened.")}><Ellipsis size={18} aria-hidden="true" /></IconButton><IconButton label="Settings" variant="secondary" onClick={() => setMessage("Settings opened.")}><Settings size={18} aria-hidden="true" /></IconButton><IconButton label="Delete" variant="destructive" onClick={() => setMessage("Item deleted.")}><Trash2 size={18} aria-hidden="true" /></IconButton>') + notice };
    case "Loading": return { ...base, setup: "", body: '<Button loading>Uploading…</Button>' };
    case "Loading State": return { ...base, icons: "Paperclip", setup: timedState, body: '<Button loading={loading} onClick={upload}>{!loading && <Paperclip size={16} aria-hidden="true" />}{loading ? "Uploading…" : "Upload file"}</Button><output role="status">{message}</output>' };
    case "Full Width": return { ...base, body: '<Button fullWidth onClick={() => setMessage("Ready to continue.")}>Continue to workspace</Button>' + notice };
    case "Disabled State": return { ...base, setup: "", body: row(`{(${JSON.stringify(variants)} as const).map(variant => <Button key={variant} variant={variant} disabled>{variant.replaceAll("-", " ")}</Button>)}`) };
    case "Social Buttons": return { ...base, body: '<div style={{ display: "grid", gap: 12, width: "100%", maxWidth: 360 }}><Button variant="outline" fullWidth onClick={() => setMessage("Google sign-in selected.")}><svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.7-.4-4H24v7.6h11c-.5 2.5-1.9 4.5-4 5.9v4.9h6.4c3.8-3.5 6.2-8.7 6.2-14.4Z"/><path fill="#34A853" d="M24 44c5.4 0 9.9-1.8 13.3-4.9l-6.4-4.9c-1.8 1.2-4.1 1.9-6.9 1.9-5.2 0-9.6-3.5-11.2-8.1H6.2v5.1C9.5 39.5 16.2 44 24 44Z"/><path fill="#FBBC05" d="M12.8 28a12 12 0 0 1 0-8v-5.1H6.2a20 20 0 0 0 0 18.2l6.6-5.1Z"/><path fill="#EA4335" d="M24 11.9c2.9 0 5.4 1 7.4 2.9l5.6-5.6A18.8 18.8 0 0 0 24 4C16.2 4 9.5 8.5 6.2 14.9l6.6 5.1c1.6-4.6 6-8.1 11.2-8.1Z"/></svg>Sign in with Google</Button><Button variant="tertiary" fullWidth onClick={() => setMessage("GitHub sign-in selected.")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.9a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C5.1-.3 3.9.1 3.9.1a5 5 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.2 6.6 6.2 6.9a3.4 3.4 0 0 0-.9 2.7V22" transform="translate(1 1) scale(.9)" /></svg>Sign in with GitHub</Button><Button variant="outline" fullWidth onClick={() => setMessage("Apple sign-in selected.")}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.1 12.5c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.2.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.8.8-3.5 2-1.5 2.5-.4 6.2 1 8.2.7 1 1.4 2 2.5 1.9 1-.1 1.4-.6 2.7-.6 1.2 0 1.6.6 2.7.6 1.1 0 1.8-1 2.4-1.9.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.2-.8-2.2-3.2ZM15.1 6.4c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.3-.5.6-1 1.7-.9 2.7 1 .1 2-.4 2.6-1.1Z"/></svg>Sign in with Apple</Button></div>' + notice };
    case "Render Function": return { ...base, setup: "", body: '<Button variant="secondary">{({ isPressed, isHovered, isFocused }) => isPressed ? "Pressed" : isHovered ? "Hovered" : isFocused ? "Hold to preview" : "Hold to preview"}</Button>' };
    case "Adding custom variants": return { ...base, body: '<Button style={{ background: "var(--hulmio-text)", color: "var(--hulmio-surface)", borderRadius: 16, paddingInline: 28 }} onClick={() => setMessage("Custom action selected.")}>Custom treatment</Button>' + notice };
    case "Adding Ripple Effect": return { ...base, body: '<Button ripple onClick={() => setMessage("Ripple action selected.")}>Press for a ripple</Button>' + notice };
    case "Customization": return { ...base, body: '<Button shape="pill" variant="outline" style={{ borderWidth: 2, letterSpacing: ".03em" }} onClick={() => setMessage("Customized action selected.")}>Make it yours</Button>' + notice };
    default: throw new Error(`Missing Button example: ${title}`);
  }
}

function actionGroup(title) {
  const base = { family: "button-group", referenceId: "button-group", title, imports: "ButtonGroup, Button", setup: messageState };
  const buttons = '<Button onClick={() => setMessage("Document saved.")}>Save</Button><Button onClick={() => setMessage("Document copied.")}>Copy</Button><Button onClick={() => setMessage("Document shared.")}>Share</Button>';
  const group = props => `<ButtonGroup label="Document actions" ${props}>${buttons}</ButtonGroup>`;
  switch (title) {
    case "Basic": return { ...base, body: group("") + notice };
    case "Variants": return { ...base, body: `{(["primary", "secondary", "tertiary", "outline", "ghost", "destructive", "destructive-soft"] as const).map(variant => <ButtonGroup key={variant} label={variant + " actions"} variant={variant}>${buttons}</ButtonGroup>)}` + notice };
    case "Sizes": return { ...base, body: `{(["sm", "md", "lg"] as const).map(size => <ButtonGroup key={size} label={size + " actions"} size={size}>${buttons}</ButtonGroup>)}` + notice };
    case "Orientation": return { ...base, body: group('orientation="vertical" variant="outline"') + notice };
    case "With Icons": return { ...base, icons: "Scissors, Copy, Clipboard", body: '<ButtonGroup label="Edit actions" variant="outline"><Button onClick={() => setMessage("Cut selected.")}><Scissors size={16} aria-hidden="true" />Cut</Button><Button onClick={() => setMessage("Copy selected.")}><Copy size={16} aria-hidden="true" />Copy</Button><Button onClick={() => setMessage("Paste selected.")}><Clipboard size={16} aria-hidden="true" />Paste</Button></ButtonGroup>' + notice };
    case "Full Width": return { ...base, body: group("fullWidth") + notice };
    case "Disabled State": return { ...base, body: group('disabled variant="outline"') };
    case "Without Separator": return { ...base, body: group('separated={false} variant="secondary"') + notice };
    case "Customization": return { ...base, body: group('style={{ borderRadius: 20 }} variant="outline"') + notice };
    default: throw new Error(`Missing group example: ${title}`);
  }
}

function toggles(title, grouped) {
  const id = grouped ? "toggle-button-group" : "toggle-button";
  const base = { family: grouped ? "toggle-group" : "toggle", referenceId: id, title, imports: grouped ? "ToggleGroup" : "Toggle", setup: grouped ? 'const [value, setValue] = React.useState("grid"); const [values, setValues] = React.useState<string[]>(["bold"]);' : 'const [pressed, setPressed] = React.useState(false);' };
  if (!grouped) {
    switch (title) {
      case "Basic": case "Controlled": return { ...base, body: '<Toggle pressed={pressed} onPressedChange={setPressed}>Pin project</Toggle><output role="status">{pressed ? "Project pinned." : "Project unpinned."}</output>' };
      case "Variants": return { ...base, body: row('{(["primary", "outline", "ghost"] as const).map(variant => <Toggle key={variant} variant={variant} defaultPressed>{variant}</Toggle>)}') };
      case "Icon Only": return { ...base, icons: "Heart", body: '<Toggle aria-label="Save to favorites" pressed={pressed} onPressedChange={setPressed}><Heart size={18} fill={pressed ? "currentColor" : "none"} aria-hidden="true" /></Toggle><output role="status">{pressed ? "Saved." : "Not saved."}</output>' };
      case "Sizes": return { ...base, body: row('{(["sm", "md", "lg"] as const).map(size => <Toggle size={size} key={size}>Pin {size}</Toggle>)}') };
      case "Disabled": return { ...base, body: row('<Toggle disabled>Unavailable</Toggle><Toggle disabled defaultPressed>Locked selection</Toggle>') };
      case "Customization": return { ...base, body: '<Toggle pressed={pressed} onPressedChange={setPressed} style={{ borderRadius: 24 }}>Rounded toggle</Toggle>' };
      default: throw new Error(`Missing toggle: ${title}`);
    }
  }
  const options = 'options={[{ value: "grid", label: "Grid" }, { value: "list", label: "List" }, { value: "board", label: "Board" }]}';
  const group = props => `<ToggleGroup label="Project view" ${options} value={value} onValueChange={setValue} ${props} />`;
  switch (title) {
    case "Basic": case "Controlled": return { ...base, body: group("") + '<output role="status">Selected view: {value}</output>' };
    case "Sizes": return { ...base, body: `{(["sm", "md", "lg"] as const).map(size => <ToggleGroup key={size} label={size + " views"} size={size} ${options} defaultValue="grid" />)}` };
    case "Orientation": return { ...base, body: group('orientation="vertical"') };
    case "Full Width": return { ...base, body: group("fullWidth") };
    case "Disabled": return { ...base, body: group("disabled") };
    case "Without Separator": return { ...base, body: group('detached={false} separated={false}') };
    case "Detached": return { ...base, body: group("detached") };
    case "Selection Mode": return { ...base, body: '<ToggleGroup label="Text formatting" selectionMode="multiple" values={values} onValuesChange={setValues} options={[{ value: "bold", label: "Bold" }, { value: "italic", label: "Italic" }, { value: "underline", label: "Underline" }]} /><output role="status">Active formatting: {values.join(", ") || "none"}</output>' };
    case "Customization": return { ...base, body: group('style={{ gap: 12 }}') };
    default: throw new Error(`Missing toggle group: ${title}`);
  }
}

function close(title) {
  const base = { family: "close-button", referenceId: "close-button", title, imports: "CloseButton, Button", setup: 'const [visible, setVisible] = React.useState(true);' };
  const props = title === "Customization" ? 'style={{ borderRadius: "50%", border: "1px solid var(--hulmio-control-border)" }}' : '';
  return { ...base, icons: title === "With Custom Icon" ? "ChevronDown" : undefined, body: `<div style={{ display: "flex", alignItems: "center", gap: 12 }}>{visible ? <><p>Dismiss this message.</p><CloseButton label="Dismiss message" onClick={() => setVisible(false)} ${props}>${title === "With Custom Icon" ? '<ChevronDown size={18} aria-hidden="true" />' : ''}</CloseButton></> : <Button variant="outline" onClick={() => setVisible(true)}>Show message</Button>}</div><output role="status">{visible ? "Message visible." : "Message dismissed."}</output>` };
}

export function buildDomain(snapshot) {
  const builders = { button, "button-group": actionGroup, "toggle-button": title => toggles(title, false), "toggle-button-group": title => toggles(title, true), "close-button": close };
  return snapshot.heroComponents.filter(p => builders[p.id]).flatMap(p => [...p.requiredSections.map(s => builders[p.id](s.title)), builders[p.id]("Customization")]);
}
