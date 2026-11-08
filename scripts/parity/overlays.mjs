const assigned = new Set(['dropdown', 'modal', 'drawer', 'alert-dialog', 'popover', 'sheet', 'tooltip', 'toast', 'alert']);
const statusSetup = 'const [message, setMessage] = React.useState("Ready");';
const status = '<p role="status">{message}</p>';
const trigger = '<Button>Open details</Button>';
const paragraphs = '<div>{Array.from({ length: 32 }, (_, index) => <p key={index}>Section {index + 1}: Review your project settings and collaborators.</p>)}</div>';
const q = JSON.stringify;

function dropdown(title) {
  let imports = 'Button, DropdownMenu';
  let setup = statusSetup;
  let props = '';
  let items = '[{ id: "edit", label: "Edit project" }, { id: "duplicate", label: "Duplicate project" }, { id: "delete", label: "Delete project", destructive: true }]';
  let customTrigger = '<Button variant="outline">Project actions</Button>';
  let icons;
  if (title === 'With Icons') { icons = 'Pencil, Copy, Trash2'; items = '[{ id: "edit", label: "Edit project", icon: <Pencil size={16} /> }, { id: "copy", label: "Duplicate project", icon: <Copy size={16} /> }, { id: "delete", label: "Delete project", icon: <Trash2 size={16} />, destructive: true }]'; }
  if (title === 'With Descriptions') items = '[{ id: "edit", label: "Edit project", description: "Change its name and description" }, { id: "archive", label: "Archive project", description: "Keep a read-only copy" }]';
  if (title === 'With Disabled Items') items = '[{ id: "edit", label: "Edit project" }, { id: "delete", label: "Delete project", disabled: true, description: "Only an owner can delete" }]';
  if (title === 'With Keyboard Shortcuts') items = '[{ id: "edit", label: "Edit project", shortcut: "?E" }, { id: "copy", label: "Duplicate project", shortcut: "?D" }]';
  if (title === 'With Sections') props = 'sections={[{ label: "Project", items: [{ id: "edit", label: "Edit project" }, { id: "copy", label: "Duplicate project" }] }, { label: "Danger zone", items: [{ id: "delete", label: "Delete project", destructive: true }] }]}';
  if (['With Multiple Selection', 'Controlled', 'With Single Selection', 'Single With Custom Indicator'].includes(title)) {
    setup += '\nconst [selected, setSelected] = React.useState<string[]>(["design"]);';
    items = '[{ id: "design", label: "Design" }, { id: "engineering", label: "Engineering" }, { id: "research", label: "Research" }]';
    props = `selectionMode="${title === 'With Multiple Selection' || title === 'Controlled' ? 'multiple' : 'single'}" selectedKeys={selected} onSelectionChange={setSelected}`;
    if (title === 'Single With Custom Indicator') { icons = 'CircleCheck'; props += ' indicator={<CircleCheck size={16} />}'; }
  }
  if (title === 'With Section Level Selection') {
    setup += '\nconst [selected, setSelected] = React.useState<string[]>(["email"]);';
    props = 'sections={[{ label: "Notifications", selectionMode: "multiple", selectedKeys: selected, onSelectionChange: setSelected, items: [{ id: "email", label: "Email" }, { id: "push", label: "Push" }] }, { label: "Actions", items: [{ id: "reset", label: "Reset settings" }] }]}';
  }
  if (title === 'Controlled Open State') { setup += '\nconst [open, setOpen] = React.useState(false);'; props = 'open={open} onOpenChange={setOpen}'; }
  if (['With Submenus', 'With Custom Submenu Indicator'].includes(title)) { items = '[{ id: "share", label: "Share", items: [{ id: "email", label: "Email link" }, { id: "team", label: "Send to team", items: [{ id: "design", label: "Design team" }, { id: "product", label: "Product team" }] }] }, { id: "copy", label: "Copy link" }]'; if (title === 'With Custom Submenu Indicator') props = 'submenuIndicator={<span aria-hidden="true">&#10140;</span>}'; }
  if (title === 'Custom Trigger') customTrigger = '<button type="button" aria-label="Open account actions" style={{ borderRadius: "50%", width: 48, height: 48, background: "var(--hulmio-subtle)", color: "var(--hulmio-text)" }}>CR</button>';
  if (title === 'Long Press Trigger') { props = 'triggerMode="longPress" longPressDelay={500}'; customTrigger = '<Button variant="outline">Hold for actions (or press Enter)</Button>'; }
  if (title === 'Customization') props = 'className="project-action-menu" style={{ borderRadius: 18, borderColor: "var(--hulmio-primary)" }}';
  const controlledSelection = setup.includes('[selected,');
  return { imports, setup, icons, body: `<div><DropdownMenu trigger={${customTrigger}} ${props} ${props.startsWith('sections=') ? '' : `items={${items}}`} onAction={key => setMessage("Selected " + key)} />${controlledSelection ? '<p>Selected: {selected.join(", ") || "none"}</p>' : ''}${title === 'Controlled Open State' ? '<p>Menu is {open ? "open" : "closed"}</p>' : ''}${status}</div>` };
}

function tooltip(title) {
  const custom = title === 'Custom Triggers';
  const render = title === 'Render Function';
  const content = render ? '{({ open }) => <span>{open ? "Keyboard shortcut: ?S" : "Save"}</span>}' : '"Save your work"';
  const child = custom ? '<a href="#save" onClick={event => { event.preventDefault(); setMessage("Saved locally"); }}>Save project</a>' : '<Button variant="outline" onClick={() => setMessage("Saved locally")}>Save</Button>';
  const props = title === 'With Arrow' ? 'showArrow' : title === 'Customization' ? 'className="project-tooltip" style={{ background: "var(--hulmio-primary)", borderRadius: 16 }}' : '';
  if (title === 'Placement') return { imports: 'Button, Tooltip', setup: statusSetup, body: `<div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>{(["top", "right", "bottom", "left"] as const).map(side => <Tooltip key={side} side={side} content={side + " tooltip"}><Button variant="outline" onClick={() => setMessage(side + " action")}>{side}</Button></Tooltip>)}${status}</div>` };
  return { imports: 'Button, Tooltip', setup: statusSetup, body: `<div><Tooltip content=${content} ${props}>${child}</Tooltip>${status}</div>` };
}

function popover(title) {
  const setup = `${statusSetup}\nconst [email, setEmail] = React.useState("hello@example.com");`;
  let children = '<p>Review your project details here.</p>';
  if (title === 'Interactive Content') children = '<form onSubmit={event => { event.preventDefault(); setMessage("Invitation sent to " + email); }}><label>Email <input type="email" required value={email} onChange={event => setEmail(event.target.value)} /></label><Button type="submit">Invite collaborator</Button></form>';
  if (title === 'Render Function') children = '{({ close }) => <Button onClick={() => { setMessage("Project pinned"); close(); }}>Pin project and close</Button>}';
  const props = title === 'With Arrow' ? 'showArrow' : title === 'Customization' ? 'style={{ borderRadius: 20, borderColor: "var(--hulmio-primary)" }}' : '';
  if (title === 'Placement') return { imports: 'Button, Popover', setup, body: `<div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>{(["top", "right", "bottom", "left"] as const).map(side => <Popover key={side} title="Project details" side={side} trigger={<Button variant="outline">{side}</Button>}><Button onClick={() => setMessage(side + " action")}>Pin project</Button></Popover>)}${status}</div>` };
  return { imports: 'Button, Popover', setup, body: `<div><Popover title="Project details" trigger={<Button variant="outline">Project details</Button>} ${props}>${children}</Popover>${status}</div>` };
}

function overlay(id, title) {
  const component = id === 'modal' ? 'Modal' : id === 'alert-dialog' ? 'AlertDialog' : id === 'sheet' ? 'Sheet' : 'Drawer';
  let imports = `Button, ${component}, DialogClose`;
  let setup = `${statusSetup}\nconst [open, setOpen] = React.useState(false);`;
  let props = '';
  let children = '<p>Review the changes before continuing.</p>';
  let label = title === 'Basic' ? 'Open details' : title;
  let customTrigger = `<Button variant="outline">${label}</Button>`;
  let icons;
  const confirmation = id === 'alert-dialog';
  let confirm = confirmation ? 'onConfirm={() => setMessage("Confirmed")}' : '';
  if (title === 'Controlled State') { props += ' open={open} onOpenChange={setOpen}'; customTrigger = null; }
  if (title === 'Sizes') return { imports, setup, body: `<div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(["xs", "sm", "md", "lg", "xl", "full"] as const).map(size => <${component} key={size} title={size + " details"} description="Choose a comfortable dialog width." size={size} trigger={<Button variant="outline">{size}</Button>} ${confirm}>${children}</${component}>)}${status}</div>` };
  if (title === 'Placement' || title === 'Placements') {
    const placements = id === 'drawer' || id === 'sheet' ? '["top", "right", "bottom", "left"]' : '["top", "center", "bottom"]';
    return { imports, setup, body: `<div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(${placements} as const).map(placement => <${component} key={placement} title={placement + " details"} description="Choose where the overlay opens." ${id === 'drawer' ? 'side' : 'placement'}={placement} trigger={<Button variant="outline">{placement}</Button>} ${confirm}>${children}</${component}>)}${status}</div>` };
  }
  if (title === 'Statuses') return { imports, setup, body: `<div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(["info", "success", "warning", "danger"] as const).map(tone => <AlertDialog key={tone} title={tone + " confirmation"} description="Each status includes a distinct indicator." tone={tone} destructive={tone === "danger"} trigger={<Button variant="outline">{tone}</Button>} onConfirm={() => setMessage(tone + " confirmed")} />)}${status}</div>` };
  if (title === 'Backdrop Variants') return { imports, setup, body: `<div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{(["opaque", "blur", "transparent"] as const).map(backdrop => <${component} key={backdrop} title={backdrop + " backdrop"} description="The surface remains keyboard accessible." backdrop={backdrop} trigger={<Button variant="outline">{backdrop}</Button>} ${confirm}>${children}</${component}>)}${status}</div>` };
  if (title === 'Custom Trigger') customTrigger = '<button type="button" style={{ padding: 16, borderRadius: 16, background: "var(--hulmio-subtle)", color: "var(--hulmio-text)" }}>Review project <span aria-hidden="true">&#8594;</span></button>';
  if (title === 'Custom Icon') { icons = 'ShieldCheck'; props += ' icon={<ShieldCheck size={32} />}'; }
  if (title === 'Custom Backdrop') props += ' backdropStyle={{ background: "linear-gradient(135deg, #123b28cc, #17304bcc)", backdropFilter: "blur(4px)" }}';
  if (title === 'Non-Dismissable' || title === 'Dismiss Behavior') { props += ' dismissable={false} keyboardDismiss={false}'; children = '<p>Outside interaction and Escape are disabled. Use the explicit close control.</p><DialogClose asChild><Button variant="outline">Close explicitly</Button></DialogClose>'; }
  if (title === 'Scrollable Content') children = paragraphs;
  if (title === 'Scroll Behavior') return { imports, setup, body: `<div style={{ display: "flex", gap: 12 }}>{(["inside", "outside"] as const).map(scrollBehavior => <Modal key={scrollBehavior} title={scrollBehavior + " scrolling"} scrollBehavior={scrollBehavior} trigger={<Button variant="outline">{scrollBehavior}</Button>}>${paragraphs}</Modal>)}</div>` };
  if (title === 'Close Methods') { props += ' open={open} onOpenChange={setOpen}'; children = '<div style={{ display: "flex", gap: 12 }}><DialogClose asChild><Button variant="outline">Close with primitive</Button></DialogClose><Button onClick={() => setOpen(false)}>Close through state</Button></div>'; }
  if (title === 'With Form') {
    props += ' open={open} onOpenChange={setOpen}';
    children = '<form onSubmit={event => { event.preventDefault(); const data = new FormData(event.currentTarget); setMessage("Saved " + String(data.get("name"))); setOpen(false); }} style={{ display: "grid", gap: 16 }}><label>Project name <input name="name" defaultValue="Hulmio" required /></label><Button type="submit">Save project</Button></form>';
  }
  if (title === 'Navigation Drawer') children = '<nav aria-label="Workspace"><ul>{["Overview", "Projects", "Team", "Settings"].map(page => <li key={page}><DialogClose asChild><button type="button" onClick={() => setMessage("Navigated to " + page)}>{page}</button></DialogClose></li>)}</ul></nav>';
  if (title === 'Custom Animations') { props += ' className="project-overlay-motion"'; setup += '\nconst motionCss = "@keyframes project-overlay-appear { from { opacity: 0; scale: .92; } to { opacity: 1; scale: 1; } } .project-overlay-motion { animation: project-overlay-appear 240ms ease-out !important; } @media (prefers-reduced-motion: reduce) { .project-overlay-motion { animation: none !important; } }";'; }
  if (title === 'Customization') props += ' style={{ borderRadius: 24, borderColor: "var(--hulmio-primary)", background: "var(--hulmio-surface)" }}';
  if (title === 'Custom Portal') { setup += '\nconst [portal, setPortal] = React.useState<HTMLDivElement | null>(null);'; props += ' portalContainer={portal}'; }
  if (confirmation && title === 'Controlled State') {
    setup += '\nconst [attempt, setAttempt] = React.useState(0);';
    confirm = 'onConfirm={async () => { await new Promise(resolve => setTimeout(resolve, 700)); setAttempt(value => value + 1); if (attempt === 0) throw new Error("Connection interrupted. Please retry."); setMessage("Changes saved"); }}';
    children = '<p>The first save fails locally. Retry succeeds; the dialog remains open while saving and after an error.</p>';
  }
  if (id === 'sheet') {
    if (title.startsWith('Snap Points')) { props += ' snapPoints={[0.3, 0.6, 0.95]}'; if (title === 'Snap Points (Sequential)') props += ' sequential'; if (title === 'Snap Points (Custom Fade)') props += ' fadeFromIndex={2}'; children = '<p>Drag the handle or focus it and use Arrow keys, Home, or End to change position.</p>' + paragraphs; }
    if (title === 'Detached') props += ' detached';
    if (title === 'Handle Only') { props += ' handleOnly snapPoints={[0.35, 0.7, 0.95]}'; children = '<p>Drag only the handle. Select this text or scroll the body without moving the sheet.</p>' + paragraphs; }
    if (title === 'Nested Sheets') children = '<Sheet title="Nested details" description="Escape closes this sheet first; focus returns to its trigger." trigger={<Button>Open nested sheet</Button>} backdrop="transparent"><p>Nested content</p><DialogClose asChild><Button>Done</Button></DialogClose></Sheet>';
    if (title === 'Professions Picker') {
      imports += ', ListBox'; setup += '\nconst [query, setQuery] = React.useState("");\nconst [profession, setProfession] = React.useState<string[]>([]);\nconst professions = Array.from({ length: 1000 }, (_, index) => ({ id: String(index), label: ["Designer", "Engineer", "Researcher", "Architect", "Writer"][index % 5] + " " + (index + 1) }));';
      props += ' open={open} onOpenChange={setOpen} snapPoints={[355, 0.95]}'; children = '<label>Search professions <input type="search" value={query} onChange={event => setQuery(event.target.value)} /></label><ListBox label="Professions" options={professions.filter(option => option.label.toLowerCase().includes(query.toLowerCase()))} selectedKeys={profession} onSelectionChange={keys => { setProfession(keys); setMessage("Selected " + professions.find(option => option.id === keys[0])?.label); setOpen(false); }} virtualized height={260} rowHeight={44} />';
    }
  }
  const portalStart = title === 'Custom Portal' ? '<div ref={setPortal} style={{ position: "relative", minHeight: 420, transform: "translateZ(0)", border: "1px solid var(--hulmio-border)", overflow: "hidden" }}>' : '';
  const portalEnd = title === 'Custom Portal' ? '</div>' : '';
  return { imports, setup, icons, body: `<div>${title === 'Custom Animations' ? '<style>{motionCss}</style>' : ''}${title === 'Controlled State' ? '<Button onClick={() => setOpen(true)}>Open controlled overlay</Button>' : ''}${portalStart}<${component} title="Project details" description="Review and update your project." ${customTrigger ? `trigger={${customTrigger}}` : ''} ${props} ${confirm}>${children}</${component}>${portalEnd}${status}</div>` };
}

function toastExample(title) {
  let imports = 'Button, ToastProvider, ToastQueue, Toast';
  let setup = 'const [queue] = React.useState(() => new ToastQueue());\nReact.useEffect(() => () => queue.clear(), [queue]);\n' + statusSetup;
  let provider = 'queue={queue}';
  let action = 'queue.add({ title: "Project saved", description: "Your changes are available to your team." })';
  let extra = '';
  let icons;
  if (title === 'Variants') return { imports, setup, body: '<div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}><ToastProvider queue={queue} expanded />{(["neutral", "primary", "success", "warning", "danger", "info"] as const).map(tone => <Button key={tone} variant="outline" onClick={() => queue.add({ title: tone + " notification", tone })}>{tone}</Button>)}</div>' };
  if (title === 'Placements') { setup += '\nconst [placement, setPlacement] = React.useState<"top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right">("bottom-right");'; provider += ' placement={placement}'; extra = '<label>Placement <select value={placement} onChange={event => setPlacement(event.target.value as typeof placement)}>{(["top-left", "top", "top-right", "bottom-left", "bottom", "bottom-right"] as const).map(value => <option key={value}>{value}</option>)}</select></label>'; }
  if (title === 'Expanded Stack') { provider += ' expanded maxVisibleToasts={5}'; action = 'queue.add({ title: "Update " + new Date().toLocaleTimeString(), description: "Expanded notifications remain individually accessible." })'; }
  if (title === 'Simple Toasts') action = 'queue.add({ title: "Link copied" })';
  if (title === 'Custom Indicators') { icons = 'CloudUpload'; action = 'queue.add({ title: "Upload complete", indicator: <CloudUpload size={24} />, tone: "success" })'; }
  if (title === 'Custom Toast Rendering') { provider += ' renderToast={(record, close) => <Toast title={record.title} description="A custom renderer using the public surface" tone="primary" onDismiss={close} style={{ borderRadius: 24, border: "2px solid var(--hulmio-primary)" }} action={{ label: "View project", onAction: () => { setMessage("Opened project"); close(); } }} />}'; }
  if (title === 'Promise & Loading') {
    setup += '\nconst [pending, setPending] = React.useState(false);';
    action = 'setPending(true); void queue.promise(new Promise<string>((resolve) => setTimeout(() => resolve("Hulmio"), 900)), { loading: "Saving project…", success: name => name + " saved", error: "Save failed" }).finally(() => setPending(false))';
    extra = '<Button variant="outline" disabled={pending} onClick={() => { setPending(true); void queue.promise(new Promise((_, reject) => setTimeout(() => reject(new Error("Offline")), 900)), { loading: "Saving project…", success: "Saved", error: "Offline. Try again." }).catch(() => setMessage("Failure handled; retry is available")).finally(() => setPending(false)); }}>Simulate rejection</Button>';
  }
  if (title === 'Callbacks') action = 'queue.add({ title: "Project archived", action: { label: "Undo", onAction: () => setMessage("Archive undone") }, onAction: () => setMessage("Undo action callback"), onClose: () => setMessage(previous => previous + " · notification closed") })';
  if (title === 'Custom Queues') {
    setup += '\nconst [secondary] = React.useState(() => new ToastQueue());\nReact.useEffect(() => () => secondary.clear(), [secondary]);';
    provider += ' placement="bottom-left"'; extra = '<ToastProvider queue={secondary} placement="bottom-right" /><Button variant="outline" onClick={() => secondary.add({ title: "Independent queue", tone: "info" })}>Notify second queue</Button><Button variant="outline" onClick={() => queue.clear()}>Clear first queue</Button>';
  }
  if (title === 'Customization') provider += ' gap={16} width={340} style={{ fontFamily: "var(--hulmio-font-family)" }} renderToast={(record, close) => <Toast {...record} onDismiss={close} style={{ borderRadius: 22, borderColor: "var(--hulmio-primary)" }} />}';
  if (title === 'Setup') { imports += ', toast'; provider = ''; action = 'toast("Welcome to Hulmio", { description: "Place one provider at your app root." })'; }
  return { imports, setup, icons, body: `<div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}><ToastProvider ${provider} />${extra}<Button ${title === 'Promise & Loading' ? 'disabled={pending}' : ''} onClick={() => { ${action}; }}>Show notification</Button>${status}</div>` };
}

export function buildDomain(snapshot) {
  const definitions = [];
  for (const reference of snapshot.heroComponents.filter(reference => assigned.has(reference.id))) {
    for (const title of [...reference.requiredSections.map(section => section.title), 'Customization']) {
      const demo = reference.id === 'dropdown' ? dropdown(title) : reference.id === 'tooltip' ? tooltip(title) : reference.id === 'popover' ? popover(title) : reference.id === 'toast' ? toastExample(title) : reference.id === 'alert' ? {
        imports: 'Alert, Button', setup: 'const [visible, setVisible] = React.useState(true);', body: `<div>{visible ? <Alert title="Your project is ready" tone="success" onDismiss={() => setVisible(false)} icon={<span aria-hidden="true">&#10003;</span>} ${title === 'Customization' ? 'style={{ borderRadius: 22, borderInlineStart: "5px solid var(--hulmio-primary)" }}' : ''}>Invite your teammates to start collaborating.</Alert> : <Button variant="outline" onClick={() => setVisible(true)}>Show alert again</Button>}</div>`,
      } : overlay(reference.id, title);
      definitions.push({ family: reference.existingHulmioFamilies[0] ?? reference.id, referenceId: reference.id, title, ...demo });
    }
  }
  return definitions;
}
