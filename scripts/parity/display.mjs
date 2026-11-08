const example = (imports, body, setup = "", icons = "", extraImports = "") => ({ imports, body, setup, icons, extraImports });
const tones = '(["neutral", "primary", "success", "warning", "danger", "info"] as const)';
const sizes = '(["sm", "md", "lg"] as const)';
const people = '["Alex Morgan", "Sam Rivera", "Jordan Lee", "Taylor Kim", "Casey Adams", "Robin Cruz"]';
const questions = '[{ id: "delivery", title: "When will my order arrive?", content: "Standard delivery takes three to five business days." }, { id: "returns", title: "Can I return an item?", content: "Return unused items within thirty days." }, { id: "support", title: "How do I contact support?", content: "Our team is available Monday through Friday." }]';
const options = '[{ id: "design", label: "Design", description: "Create thoughtful experiences" }, { id: "engineering", label: "Engineering", description: "Build reliable products" }, { id: "research", label: "Research", description: "Understand customer needs" }]';
const columns = '[{ key: "name", label: "Name", sortable: true }, { key: "role", label: "Role", sortable: true }, { key: "score", label: "Score", sortable: true }]';
const rows = '[{ id: 1, name: "Alex Morgan", role: "Designer", score: 92 }, { id: 2, name: "Sam Rivera", role: "Engineer", score: 87 }, { id: 3, name: "Jordan Lee", role: "Researcher", score: 96 }, { id: 4, name: "Taylor Kim", role: "Designer", score: 89 }, { id: 5, name: "Casey Adams", role: "Engineer", score: 94 }, { id: 6, name: "Robin Cruz", role: "Researcher", score: 91 }]';
const recipes = {};

recipes.accordion = {
  Basic: example("Accordion", `<Accordion items={${questions}} />`),
  Surface: example("Accordion", `<Accordion variant="surface" items={${questions}} />`),
  "Without Separator": example("Accordion", `<Accordion divided={false} items={${questions}} />`),
  "Multiple Expanded": example("Accordion", `<Accordion multiple defaultExpandedKeys={["delivery", "returns"]} items={${questions}} />`),
  "Disabled State": example("Accordion", `<Accordion items={${questions}.map((item, index) => ({ ...item, disabled: index === 1 }))} />`),
  Controlled: example("Accordion", `<><Accordion items={${questions}} expandedKeys={expanded} onExpandedChange={setExpanded} /><p role="status">Expanded: {expanded.join(", ") || "none"}</p></>`, 'const [expanded, setExpanded] = React.useState<string[]>(["delivery"]);'),
  "Custom Indicator": example("Accordion", `<Accordion items={${questions}} renderIndicator={({ expanded }) => <ChevronDown size={18} style={{ transform: expanded ? "rotate(180deg)" : undefined }} />} />`, "", "ChevronDown"),
  "Render Function": example("Accordion", `<Accordion items={${questions}} renderTitle={(item, { expanded }) => <span style={{ color: expanded ? "var(--hulmio-primary)" : undefined }}>{item.title} {expanded && "(open)"}</span>} />`),
  "FAQ Layout": example("Accordion, Heading, Text", `<section><Heading>Frequently asked questions</Heading><Text tone="muted">Everything you need to know about your order.</Text><Accordion items={${questions}} /></section>`),
};
recipes.avatar = {
  Basic: example("Avatar", '<Avatar name="Alex Morgan" />'),
  Sizes: example("Avatar", `<>{${sizes}.map(size => <Avatar key={size} name="Alex Morgan" size={size} />)}<Avatar name="Alex Morgan" size={72} /></>`),
  Colors: example("Avatar", `<>{${tones}.map(tone => <Avatar key={tone} name="Alex Morgan" tone={tone} />)}</>`),
  Variants: example("Avatar", '<>{(["solid", "soft", "outline"] as const).map(variant => <Avatar key={variant} name="Alex Morgan" tone="primary" variant={variant} />)}</>'),
  "Fallback Content": example("Avatar", '<><Avatar name="Alex Morgan" src="/missing-avatar.png" /><Avatar name="Guest" fallback={<User size={20} />} /><Avatar name="Anonymous" fallback="?" /></>', "", "User"),
};
recipes["avatar-group"] = {
  Basic: example("AvatarGroup", `<AvatarGroup names={${people}} />`),
  Max: example("AvatarGroup", `<AvatarGroup names={${people}} max={3} />`),
  "With Count": example("AvatarGroup", `<AvatarGroup names={${people}} max={2} renderCount={count => <span>+{count} team</span>} />`),
  Sizes: example("AvatarGroup", `<>{${sizes}.map(size => <AvatarGroup key={size} names={${people}} size={size} />)}</>`),
  Grid: example("AvatarGroup", `<AvatarGroup names={${people}} max={6} layout="grid" />`),
  Overlap: example("AvatarGroup", `<><AvatarGroup names={${people}} overlap={8} /><AvatarGroup names={${people}} overlap={20} /></>`),
};
recipes.badge = {
  Basic: example("Badge", '<Badge>New</Badge>'),
  Variants: example("Badge", '<>{(["solid", "soft", "outline"] as const).map(variant => <Badge key={variant} variant={variant} tone="primary">{variant}</Badge>)}</>'),
  Sizes: example("Badge", `<>{${sizes}.map(size => <Badge key={size} size={size}>{size}</Badge>)}</>`),
  Colors: example("Badge", `<>{${tones}.map(tone => <Badge key={tone} tone={tone}>{tone}</Badge>)}</>`),
  Placements: example("Badge, Avatar", '<div style={{ display: "flex", gap: 40 }}>{(["top-right", "top-left", "bottom-right", "bottom-left"] as const).map(placement => <Badge key={placement} placement={placement} content="3"><Avatar name="Alex Morgan" /></Badge>)}</div>'),
  "Dot Badge": example("Badge", '<><Badge dot tone="success">Available</Badge><Badge dot tone="warning">Pending</Badge><Badge dot tone="danger">Offline</Badge></>'),
  "With Content": example("Badge, Button", '<Badge content="8" tone="danger"><Button variant="secondary">Notifications</Button></Badge>'),
};
recipes.chip = {
  Basic: example("Chip", '<Chip>Design</Chip>'),
  Variants: example("Chip", '<>{(["solid", "soft", "outline"] as const).map(variant => <Chip key={variant} variant={variant}>{variant}</Chip>)}</>'),
  Statuses: example("Chip", `<>{${tones}.map(tone => <Chip key={tone} tone={tone}>{tone}</Chip>)}</>`),
  "With Icons": example("Chip", '<><Chip><Check size={14} /> Complete</Chip><Chip tone="warning"><Clock size={14} /> Pending</Chip></>', "", "Check, Clock"),
};
recipes.breadcrumbs = {
  Basic: example("Breadcrumbs", '<Breadcrumbs items={[{ label: "Home", href: "#home" }, { label: "Projects" }]} />'),
  "Navigation Levels": example("Breadcrumbs", '<Breadcrumbs items={[{ label: "Home", href: "#home" }, { label: "Workspace", href: "#workspace" }, { label: "Design", href: "#design" }, { label: "Components" }]} />'),
  "Disabled State": example("Breadcrumbs", '<Breadcrumbs items={[{ label: "Home", href: "#home" }, { label: "Private", href: "#private", disabled: true }, { label: "Overview" }]} />'),
  "Custom Separator": example("Breadcrumbs", '<Breadcrumbs separator={<ChevronRight size={14} />} items={[{ label: "Home", href: "#home" }, { label: "Projects", href: "#projects" }, { label: "Overview" }]} />', "", "ChevronRight"),
  "Render Function": example("Breadcrumbs", '<Breadcrumbs items={[{ label: "Home", href: "#home" }, { label: "Projects" }]} renderItem={(item, { current }) => <span style={{ fontWeight: current ? 700 : 400 }}>{item.label}</span>} />'),
};
recipes.card = {
  Basic: example("Card", '<Card title="Project overview" description="A shared place for your team.">Keep your research, decisions and next steps together.</Card>'),
  Variants: example("Card", '<>{(["default", "outlined", "soft"] as const).map(variant => <Card key={variant} variant={variant} title={variant}>Made for everyday work.</Card>)}</>'),
  "Horizontal Layout": example("Card, Avatar", '<Card style={{ display: "flex", alignItems: "center", gap: 20 }}><Avatar name="Alex Morgan" size="lg" /><div><strong>Alex Morgan</strong><p>Product designer</p></div></Card>'),
  "With Avatar": example("Card, Avatar", '<Card title="Your design partner"><Avatar name="Alex Morgan" status="online" /><p>Alex is available to collaborate.</p></Card>'),
  "With Images": example("Card, Image", '<Card title="A moment outdoors"><Image src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop" alt="Misty green hills" aspectRatio={16 / 9} /><p>Make room for a different perspective.</p></Card>'),
  "With Form": example("Card, Input, Button", '<Card title="Stay in the loop"><form onSubmit={event => { event.preventDefault(); setSubscribed(true); }}><label>Email address<Input type="email" required placeholder="you@example.com" /></label><Button type="submit">Subscribe</Button>{subscribed && <p role="status">You are subscribed.</p>}</form></Card>', 'const [subscribed, setSubscribed] = React.useState(false);'),
};

function calendarRecipes(range) {
  const component = range ? "RangeCalendar" : "Calendar";
  const initial = range ? '{ start: "2026-11-10", end: "2026-11-14" }' : '"2026-11-10"';
  const demo = (props = "", setup = "", bodyAfter = "", icons = "") => example(component, `<><${component} label="${range ? "Travel dates" : "Event date"}" defaultFocusedValue="2026-11-10" ${props} />${bodyAfter}</>`, setup, icons);
  const result = {
    Basic: demo(),
    Disabled: demo("disabled"),
    "Read Only": demo(`readOnly defaultValue={${initial}}`),
    "Default Value": demo(`defaultValue={${initial}}`),
    "Year Picker": demo("yearPicker"),
    Controlled: demo("value={value} onValueChange={setValue}", `const [value, setValue] = React.useState(${initial});`, '<p role="status">Selected: {JSON.stringify(value)}</p>'),
    "Min and Max Dates": demo('minValue="2026-11-05" maxValue="2026-11-22"'),
    "Unavailable Dates": demo('isDateUnavailable={value => [0, 6].includes(new Date(value + "T12:00:00Z").getUTCDay())}'),
    "Weeks in Month": demo("weeksInMonth={6}"),
    "Week View": demo('view="week"'),
    "Day View": demo('view="day"'),
    "Focused Value": demo('focusedValue={focus} onFocusChange={setFocus}', 'const [focus, setFocus] = React.useState("2026-11-18");', '<p role="status">Focused: {focus}</p>'),
    "Cell Indicators": demo('cellIndicator={value => ["2026-11-10", "2026-11-18", "2026-11-24"].includes(value) ? <span aria-label="Event scheduled">•</span> : null}'),
    "Multiple Months": demo("visibleMonths={2} yearPicker"),
    "Real-World Example": demo(`value={value} onValueChange={setValue} minValue="2026-11-01" maxValue="2026-12-31" isDateUnavailable={value => ["2026-11-12", "2026-11-13", "2026-11-21"].includes(value)}`, `const [value, setValue] = React.useState(${initial});`, '<p role="status">Your booking: {JSON.stringify(value)}</p>'),
    "International Calendars": example(component, `<div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}><${component} label="Hebrew calendar" locale="he-IL-u-ca-hebrew" defaultFocusedValue="2026-11-10" yearPicker /><${component} label="Indian calendar" locale="hi-IN-u-ca-indian" defaultFocusedValue="2026-11-10" yearPicker /></div>`),
  };
  if (range) {
    result["Anchor-Based Unavailable Dates"] = demo('isDateUnavailable={(value, anchor) => !!anchor && Math.abs(Date.parse(value) - Date.parse(anchor)) > 7 * 86400000}');
    result["Allows Non-Contiguous Ranges"] = demo('allowsNonContiguousRanges isDateUnavailable={value => new Date(value + "T12:00:00Z").getUTCDay() === 0}');
    result.Invalid = demo(`invalid defaultValue={${initial}}`);
  } else {
    result["Multiple Selection"] = demo('selectionMode="multiple" selectedValues={selected} onSelectedValuesChange={setSelected}', 'const [selected, setSelected] = React.useState<string[]>(["2026-11-10", "2026-11-18"]);', '<p role="status">Selected: {selected.join(", ")}</p>');
    result["Custom Navigation Icons"] = demo('previousIcon={<ArrowLeft size={18} />} nextIcon={<ArrowRight size={18} />}', "", "", "ArrowLeft, ArrowRight");
  }
  return result;
}
recipes.calendar = calendarRecipes(false);
recipes["range-calendar"] = calendarRecipes(true);
recipes["list-box"] = {
  Basic: example("ListBox", `<ListBox label="Team" options={${options}} />`),
  "With Disabled Items": example("ListBox", `<ListBox label="Team" options={${options}.map((option, index) => ({ ...option, disabled: index === 1 }))} />`),
  "With Sections": example("ListBox", `<ListBox label="Team departments" options={[]} sections={[{ id: "product", label: "Product", options: ${options}.slice(0, 2) }, { id: "insights", label: "Insights", options: ${options}.slice(2) }]} />`),
  "Multi Select": example("ListBox", `<ListBox label="Teams" selectionMode="multiple" defaultSelectedKeys={["design", "research"]} options={${options}} />`),
  Controlled: example("ListBox", `<><ListBox label="Team" options={${options}} selectedKeys={selected} onSelectionChange={setSelected} /><p role="status">Selected: {selected.join(", ")}</p></>`, 'const [selected, setSelected] = React.useState<string[]>(["design"]);'),
  Virtualization: example("ListBox", '<ListBox label="Ten thousand people" options={people} virtualized height={280} rowHeight={40} />', 'const people = React.useMemo(() => Array.from({ length: 10000 }, (_, index) => ({ id: String(index), label: `Person ${index + 1}` })), []);'),
  "Custom Check Icon": example("ListBox", `<ListBox label="Team" options={${options}} defaultSelectedKeys={["design"]} renderIndicator={() => <CircleCheck size={18} />} />`, "", "CircleCheck"),
  "Render Function": example("ListBox", `<ListBox label="Team" options={${options}} renderOption={(option, { selected, focused }) => <span style={{ fontWeight: selected ? 700 : 400, textDecoration: focused ? "underline" : undefined }}>{option.label} {selected && "(selected)"}</span>} />`),
};

recipes.meter = {
  Basic: example("Meter", '<Meter label="Storage" value={64} />'),
  Sizes: example("Meter", `<>{${sizes}.map(size => <Meter key={size} label={size} size={size} value={64} />)}</>`),
  Colors: example("Meter", `<>{${tones}.map(tone => <Meter key={tone} label={tone} tone={tone} value={64} />)}</>`),
  "Without Label": example("Meter", '<Meter label="Storage used" showLabel={false} value={64} />'),
  "Custom Value Scale": example("Meter", '<Meter label="Temperature" value={22} min={-20} max={50} valueText="22 degrees Celsius" />'),
};
recipes["progress-bar"] = {
  Basic: example("Progress", '<Progress label="Uploading" value={64} />'),
  Sizes: example("Progress", `<>{${sizes}.map(size => <Progress key={size} label={size} size={size} value={64} />)}</>`),
  Colors: example("Progress", `<>{${tones}.map(tone => <Progress key={tone} label={tone} tone={tone} value={64} />)}</>`),
  "Without Label": example("Progress", '<Progress label="Upload progress" showLabel={false} value={64} />'),
  Indeterminate: example("Progress", '<Progress label="Connecting" indeterminate />'),
  "Custom Value Scale": example("Progress", '<Progress label="Files uploaded" min={0} max={24} value={9} />'),
};
recipes["progress-circle"] = {
  Basic: example("ProgressCircle", '<ProgressCircle label="Uploading" value={64} showLabel={false} />'),
  Sizes: example("ProgressCircle", `<>{${sizes}.map(size => <ProgressCircle key={size} label={size} size={size} value={64} />)}</>`),
  Colors: example("ProgressCircle", `<>{${tones}.map(tone => <ProgressCircle key={tone} label={tone} tone={tone} value={64} />)}</>`),
  Indeterminate: example("ProgressCircle", '<ProgressCircle label="Connecting" indeterminate />'),
  "With Label": example("ProgressCircle", '<ProgressCircle label="Files uploaded" value={64} showLabel />'),
  "Custom SVG Props": example("ProgressCircle", '<ProgressCircle label="Custom ring" value={64} svgProps={{ strokeWidth: 3, strokeLinecap: "round", style: { filter: "drop-shadow(0 2px 3px var(--hulmio-border))" } }} />'),
};
recipes.skeleton = {
  Basic: example("Skeleton", '<Skeleton width={220} height={24} />'),
  "Text Content": example("Skeleton", '<div style={{ display: "grid", gap: 10 }}><Skeleton width="90%" height={18} /><Skeleton width="100%" height={18} /><Skeleton width="70%" height={18} /></div>'),
  "User Profile": example("Skeleton", '<div style={{ display: "flex", gap: 14 }}><Skeleton width={56} height={56} style={{ borderRadius: "50%" }} /><div style={{ display: "grid", gap: 8 }}><Skeleton width={160} /><Skeleton width={110} height={14} /></div></div>'),
  "List Items": example("Skeleton", '<div style={{ display: "grid", gap: 18 }}>{Array.from({ length: 4 }, (_, index) => <div key={index} style={{ display: "flex", gap: 12 }}><Skeleton width={36} height={36} style={{ borderRadius: "50%" }} /><Skeleton width="80%" height={36} /></div>)}</div>'),
  Grid: example("Skeleton", '<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>{Array.from({ length: 6 }, (_, index) => <Skeleton key={index} height={100} />)}</div>'),
  "Single Shimmer": example("Skeleton", '<div className="h-skeleton-group" style={{ display: "grid", gap: 12 }}><Skeleton sharedShimmer height={110} /><Skeleton sharedShimmer width="80%" /><Skeleton sharedShimmer width="60%" /></div>'),
  "Animation Types": example("Skeleton", '<div style={{ display: "grid", gap: 20 }}>{(["pulse", "shimmer", "none"] as const).map(animation => <div key={animation}><p>{animation}</p><Skeleton animation={animation} width={240} height={32} /></div>)}</div>'),
};
recipes.spinner = {
  Basic: example("Spinner", '<Spinner />'),
  Colors: example("Spinner", `<>{${tones}.map(tone => <Spinner key={tone} tone={tone} label={tone + " loading"} />)}</>`),
  Sizes: example("Spinner", `<>{${sizes}.map(size => <Spinner key={size} size={size} label={size + " loading"} />)}</>`),
  Speed: example("Spinner", '<><Spinner label="Fast loading" speed={0.4} /><Spinner label="Standard loading" speed={0.8} /><Spinner label="Slow loading" speed={1.8} /></>'),
};
recipes.separator = {
  Basic: example("Separator", '<div>First section<Separator />Second section</div>'),
  Variants: example("Separator", '<div>Default<Separator />Secondary<Separator variant="secondary" /></div>'),
  "With Surface": example("Surface, Separator", '<Surface>Project overview<Separator />Updated today</Surface>'),
  Vertical: example("Separator", '<div style={{ display: "flex", alignItems: "center", gap: 16, height: 48 }}>Design<Separator orientation="vertical" />Develop<Separator orientation="vertical" />Deliver</div>'),
  "With Content": example("Separator", '<Separator>or continue with email</Separator>'),
  Decorative: example("Separator", '<div>Decorative divider<Separator decorative /><p>Content separator</p><Separator decorative={false} /></div>'),
  "Render Function": example("Separator", '<Separator decorative={false} render={props => <div {...props} style={{ marginBlock: 24, borderColor: "var(--hulmio-primary)" }} />} />'),
};
recipes.surface = {
  Basic: example("Surface", '<Surface>A quiet place for your content.</Surface>'),
  Variants: example("Surface", '<>{(["default", "secondary", "tertiary", "transparent"] as const).map(variant => <Surface key={variant} variant={variant}>{variant} surface</Surface>)}</>'),
  "With Form Components": example("Surface, Input, Button", '<Surface><form onSubmit={event => { event.preventDefault(); setSaved(true); }}><label>Project name<Input required defaultValue="Design system" /></label><Button type="submit">Save project</Button>{saved && <p role="status">Project saved.</p>}</form></Surface>', 'const [saved, setSaved] = React.useState(false);'),
};
recipes.toolbar = {
  Basic: example("Toolbar, Button", '<Toolbar label="Formatting"><Button variant="ghost">Bold</Button><Button variant="ghost">Italic</Button><Button variant="ghost">Underline</Button></Toolbar>'),
  Vertical: example("Toolbar, Button", '<Toolbar label="Tools" orientation="vertical"><Button variant="ghost">Select</Button><Button variant="ghost">Draw</Button><Button variant="ghost">Erase</Button></Toolbar>'),
  Attached: example("Toolbar, Button, Surface", '<Surface style={{ padding: 0 }}><Toolbar label="Document actions" attached><Button variant="ghost">Edit</Button><Button variant="ghost">Share</Button></Toolbar><p style={{ padding: 20 }}>Document content</p></Surface>'),
  "With ButtonGroup": example("Toolbar, Button, ButtonGroup", '<Toolbar label="Document tools"><ButtonGroup label="Text style"><Button variant="secondary">Bold</Button><Button variant="secondary">Italic</Button></ButtonGroup><Button variant="primary">Save</Button></Toolbar>'),
};
recipes.disclosure = {
  Basic: example("Disclosure", '<Disclosure title="Shipping details">Standard delivery takes three to five business days.</Disclosure>'),
  "Render Function": example("Disclosure", '<Disclosure title="Advanced settings" renderTrigger={({ expanded }) => <span>{expanded ? "Hide" : "Show"} advanced settings</span>}>{({ expanded }) => <p>Settings are {expanded ? "expanded" : "collapsed"}.</p>}</Disclosure>'),
};
recipes["disclosure-group"] = {
  Basic: example("DisclosureGroup", `<DisclosureGroup items={${questions}} />`),
  Controlled: example("DisclosureGroup", `<><DisclosureGroup multiple items={${questions}} expandedKeys={expanded} onExpandedChange={setExpanded} /><p role="status">Open sections: {expanded.length}</p></>`, 'const [expanded, setExpanded] = React.useState<string[]>(["delivery"]);'),
};
recipes.link = {
  Basic: example("Link", '<Link href="#overview">View overview</Link>'),
  "Icon Placement": example("Link", '<><Link href="#previous" icon={<ArrowLeft size={16} />} iconPlacement="start">Previous</Link><Link href="#next" icon={<ArrowRight size={16} />}>Next</Link></>', "", "ArrowLeft, ArrowRight"),
  "Text Decoration with Tailwind CSS": example("Link", '<><Link href="#always" underline="always" className="underline decoration-2 underline-offset-4">Always underline</Link><Link href="#hover" underline="hover" className="hover:underline">Underline on hover</Link><Link href="#plain" underline="none" className="no-underline">Plain link</Link></>'),
  "Custom Icon": example("Link", '<Link href="https://example.com" target="_blank" rel="noreferrer" icon={<ExternalLink size={16} />}>Open external site</Link>', "", "ExternalLink"),
  "Render Function": example("Link", '<Link href="#projects" render={props => <a {...props} style={{ fontWeight: 700 }}>Explore projects <span aria-hidden="true">↗</span></a>} />'),
};
const paginationDemo = props => example("Pagination", `<Pagination page={page} totalPages={24} onPageChange={setPage} ${props} />`, "const [page, setPage] = React.useState(5);");
recipes.pagination = {
  Basic: paginationDemo(""),
  Sizes: example("Pagination", `<>{${sizes}.map(size => <Pagination key={size} label={size + " pagination"} size={size} page={page} totalPages={10} onPageChange={setPage} />)}</>`, "const [page, setPage] = React.useState(3);"),
  Disabled: paginationDemo("disabled"),
  "Simple (Previous / Next)": paginationDemo("simple showSummary"),
  Controlled: example("Pagination, Button", '<><Button onClick={() => setPage(1)}>Reset to first page</Button><Pagination page={page} totalPages={12} onPageChange={setPage} showSummary /></>', 'const [page, setPage] = React.useState(6);'),
  "With Ellipsis": paginationDemo(""),
  "With Summary": paginationDemo("showSummary"),
  "Custom Icons": { ...paginationDemo('previousIcon={<ArrowLeft size={16} />} nextIcon={<ArrowRight size={16} />}'), icons: "ArrowLeft, ArrowRight" },
};
const tabs = '[{ value: "overview", label: "Overview", content: "A summary of your project." }, { value: "activity", label: "Activity", content: "The latest updates from your team." }, { value: "settings", label: "Settings", content: "Manage your project preferences." }]';
recipes.tabs = {
  Basic: example("Tabs", `<Tabs items={${tabs}} />`),
  Vertical: example("Tabs", `<Tabs orientation="vertical" items={${tabs}} />`),
  Overflow: example("Tabs", '<Tabs style={{ maxWidth: 420 }} items={Array.from({ length: 15 }, (_, index) => ({ value: String(index), label: `Section ${index + 1}`, content: `Content for section ${index + 1}` }))} />'),
  "Disabled Tab": example("Tabs", `<Tabs items={${tabs}.map((item, index) => ({ ...item, disabled: index === 1 }))} />`),
  "With Separator": example("Tabs", `<Tabs divided items={${tabs}} />`),
  "Secondary Variant": example("Tabs", `<Tabs variant="secondary" items={${tabs}} />`),
  "Secondary Variant Vertical": example("Tabs", `<Tabs variant="secondary" orientation="vertical" items={${tabs}} />`),
  Alignment: example("Tabs", `<>{(["start", "center", "end"] as const).map(align => <Tabs key={align} label={align + " tabs"} align={align} items={${tabs}} />)}</>`),
  "Render Function": example("Tabs", `<Tabs items={${tabs}} renderTab={(item, { selected }) => <span>{item.label} {selected && <span aria-hidden="true">•</span>}</span>} />`),
};
recipes.kbd = {
  Basic: example("Kbd", '<Kbd keys={["command"]}>K</Kbd>'),
  Variants: example("Kbd", '<>{(["default", "light", "outline"] as const).map(variant => <Kbd key={variant} variant={variant} keys={["ctrl"]}>K</Kbd>)}</>'),
  "Navigation Keys": example("Kbd", '<><Kbd keys={["up"]} /><Kbd keys={["down"]} /><Kbd keys={["left"]} /><Kbd keys={["right"]} /><Kbd keys={["enter"]} /></>'),
  "Inline Usage": example("Kbd", '<p>Press <Kbd keys={["command"]}>K</Kbd> to open search.</p>'),
  "Instructional Text": example("Kbd", '<p>Use <Kbd keys={["up"]} /> and <Kbd keys={["down"]} /> to navigate, then <Kbd keys={["enter"]} /> to select. Press <Kbd keys={["escape"]} /> to close.</p>'),
  "Special Keys": example("Kbd", '<><Kbd keys={["command", "shift"]}>P</Kbd><Kbd keys={["ctrl", "alt"]}>Delete</Kbd><Kbd keys={["option"]} /><Kbd keys={["win"]}>E</Kbd></>'),
};
recipes.typography = {
  Basic: example("Typography", '<Typography>Thoughtful tools for everyday work.</Typography>'),
  Scale: example("Typography", '<>{(["display", "heading", "title", "body", "small", "caption", "code"] as const).map(type => <Typography key={type} type={type}>{type}: Design with purpose</Typography>)}</>'),
  Primitives: example("Typography", '<><Typography as="h2" type="heading">A clear beginning</Typography><Typography as="p">Body copy with a comfortable reading rhythm.</Typography><Typography as="blockquote" tone="muted">Good design makes the next step clear.</Typography><Typography as="code" type="code">npm install hulmio-ui</Typography></>'),
  Prose: example("Typography", '<Typography as="article" prose><h2>Build with intention</h2><p>A shared design language helps teams move together.</p><h3>Start with people</h3><p>Understand their goals, then create room for the work that matters.</p><ul><li>Keep content clear</li><li>Make actions predictable</li><li>Respect different abilities</li></ul><blockquote>Small details shape everyday experiences.</blockquote></Typography>'),
  "Render Props": example("Typography", '<Typography type="title" render={props => <h3 {...props} style={{ ...props.style, color: "var(--hulmio-primary)" }}>A custom semantic heading</h3>} />'),
};
const scrollContent = '<div style={{ display: "grid", gap: 16 }}>{Array.from({ length: 20 }, (_, index) => <p key={index}>Chapter {index + 1}: A considered approach to everyday work.</p>)}</div>';
recipes["scroll-shadow"] = {
  Basic: example("ScrollShadow", `<ScrollShadow aria-label="Chapters" maxHeight={200}>${scrollContent}</ScrollShadow>`),
  Orientation: example("ScrollShadow", '<ScrollShadow aria-label="Horizontal chapters" orientation="horizontal" style={{ maxWidth: 420 }}><div style={{ display: "flex", width: "max-content", gap: 24 }}>{Array.from({ length: 12 }, (_, index) => <div key={index} style={{ minWidth: 140, padding: 24, background: "var(--hulmio-subtle)" }}>Chapter {index + 1}</div>)}</div></ScrollShadow>'),
  "Shadow Size": example("ScrollShadow", `<ScrollShadow aria-label="Large fade" shadowSize={64} maxHeight={200}>${scrollContent}</ScrollShadow>`),
  "With Card": example("ScrollShadow, Card", `<Card title="Reading list"><ScrollShadow aria-label="Reading list" maxHeight={180}>${scrollContent}</ScrollShadow></Card>`),
  "Hide Scroll Bar": example("ScrollShadow", `<ScrollShadow aria-label="Hidden scrollbar chapters" hideScrollBar maxHeight={200}>${scrollContent}</ScrollShadow>`),
  "Visibility Change": example("ScrollShadow", `<><ScrollShadow aria-label="Chapters" maxHeight={200} onVisibilityChange={setEdges}>${scrollContent}</ScrollShadow><p role="status">More above: {edges.top ? "yes" : "no"}; more below: {edges.bottom ? "yes" : "no"}</p></>`, 'const [edges, setEdges] = React.useState({ top: false, bottom: false, left: false, right: false });'),
};
const table = (props = "", setup = "", bodyAfter = "") => example("DataTable", `<><DataTable caption="Team performance" columns={${columns}} rows={${rows}} ${props} />${bodyAfter}</>`, setup);
recipes.table = {
  Basic: table(),
  "Secondary Variant": table('variant="secondary"'),
  "Async Loading": example("DataTable", `<><DataTable caption="Team performance" columns={${columns}} rows={loadedRows} loading={loading} /><button type="button" onClick={() => setRequest(previous => previous + 1)}>Reload data</button></>`, `const [loadedRows, setLoadedRows] = React.useState<Array<Record<string, string | number>>>([]); const [loading, setLoading] = React.useState(true); const [request, setRequest] = React.useState(0); React.useEffect(() => { setLoading(true); const timer = setTimeout(() => { setLoadedRows(${rows}); setLoading(false); }, 900); return () => clearTimeout(timer); }, [request]);`),
  Sorting: table('sortDescriptor={sort} onSortChange={setSort}', 'const [sort, setSort] = React.useState<{ key: string; direction: "asc" | "desc" }>({ key: "score", direction: "desc" });', '<p role="status">Sorted by {sort.key}, {sort.direction}</p>'),
  Selection: table('selectable selectedRowIds={selected} onSelectionChange={setSelected}', 'const [selected, setSelected] = React.useState<Array<string | number>>([2]);', '<p role="status">Selected: {selected.join(", ") || "none"}</p>'),
  "Expandable Rows": table('expandable renderExpanded={row => <p>{row.name} works in {row.role} and earned a score of {row.score}.</p>}'),
  Pagination: table('pageSize={2}'),
  "Column Resizing": table('resizableColumns onColumnResize={(key, width) => setResized(`${key}: ${Math.round(width)}px`)}', 'const [resized, setResized] = React.useState("Drag or use arrow keys on a column separator.");', '<p role="status">{resized}</p>'),
  "Empty State": example("DataTable", `<DataTable caption="Team performance" columns={${columns}} rows={[]} emptyMessage="No teammates yet. Invite someone to get started." />`),
  Virtualization: example("DataTable", `<DataTable caption="Ten thousand teammates" columns={${columns}} rows={largeRows} virtualized height={320} rowHeight={44} selectable />`, 'const largeRows = React.useMemo(() => Array.from({ length: 10000 }, (_, index) => ({ id: index, name: `Person ${index + 1}`, role: index % 2 ? "Engineer" : "Designer", score: 60 + index % 41 })), []);'),
  "TanStack Table": example("Table, TableHeader, TableHead, TableBody, TableRow, TableCell, TableCaption", '<Table><TableCaption>TanStack powered team</TableCaption><TableHeader>{table.getHeaderGroups().map(group => <TableRow key={group.id}>{group.headers.map(header => <TableHead key={header.id} aria-sort={header.column.getIsSorted() === "asc" ? "ascending" : header.column.getIsSorted() === "desc" ? "descending" : undefined}><button type="button" onClick={header.column.getToggleSortingHandler()}>{flexRender(header.column.columnDef.header, header.getContext())} {header.column.getIsSorted() || ""}</button></TableHead>)}</TableRow>)}</TableHeader><TableBody>{table.getRowModel().rows.map(row => <TableRow key={row.id}>{row.getVisibleCells().map(cell => <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>)}</TableRow>)}</TableBody></Table>', `const data = React.useMemo(() => ${rows}, []); const columns = React.useMemo(() => [{ accessorKey: "name", header: "Name" }, { accessorKey: "role", header: "Role" }, { accessorKey: "score", header: "Score" }], []); const [sorting, setSorting] = React.useState<SortingState>([]); const table = useReactTable({ data, columns, state: { sorting }, onSortingChange: setSorting, getCoreRowModel: getCoreRowModel(), getSortedRowModel: getSortedRowModel() });`, "", 'import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from "@tanstack/react-table";\nimport type { SortingState } from "@tanstack/react-table";'),
  "Custom Cells": example("DataTable, Avatar, Badge", `<DataTable caption="Team performance" columns={[{ key: "name", label: "Name", render: (value, row) => <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Avatar name={String(value)} size="sm" />{row.name}</span> }, { key: "role", label: "Role", render: value => <Badge tone="primary">{value}</Badge> }, { key: "score", label: "Score", sortable: true, render: value => <strong>{value}/100</strong> }]} rows={${rows}} />`),
};

export function buildDomain(snapshot) {
  const result = [];
  for (const [referenceId, sections] of Object.entries(recipes)) {
    const reference = snapshot.heroComponents.find(component => component.id === referenceId);
    if (!reference) throw new Error(`Missing display reference: ${referenceId}`);
    const family = reference.existingHulmioFamilies[0] ?? referenceId;
    const headings = [...reference.requiredSections.map(section => section.title), "Customization"];
    for (const title of headings) {
      const definition = title === "Customization" ? { ...sections.Basic, body: `<><style>{".custom-${referenceId} [data-hulmio-ui] { border-radius: calc(var(--hulmio-radius-md) * 1.5); } .custom-${referenceId} { padding: 20px; background: var(--hulmio-subtle); color: var(--hulmio-text); border: 1px solid var(--hulmio-border); border-radius: var(--hulmio-radius-md); }"}</style><div className="custom-${referenceId}">${sections.Basic.body}</div></>` } : sections[title];
      if (!definition) throw new Error(`Missing display behavior: ${referenceId} / ${title}`);
      result.push({ family, referenceId, title, slug: `${referenceId}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`, ...definition });
    }
  }
  return result;
}
