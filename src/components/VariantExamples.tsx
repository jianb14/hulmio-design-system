import { useState } from "react";
import { Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Button, ButtonGroup, ButtonLink, Card, Checkbox, Combobox, DatePicker, Drawer, DropdownMenu, EmptyState, FileUpload, Heading, IconButton, Input, InputGroup, InputGroupAddon, InputGroupInput, Item, ItemContent, ItemDescription, ItemGroup, ItemTitle, Kbd, MultiSelect, NumberInput, OtpInput, Pagination, Progress, RadioGroup, Rating, Select, Separator, Skeleton, Slider, Spinner, Stepper, Switch, Tabs, Text, Textarea, Toast, Toggle, Tooltip } from "hulmio-ui";

export function VariantExample({ name }: { name: string }) {
  const [first, setFirst] = useState(1);
  const [last, setLast] = useState(5);
  switch (name) {
    case "Affixes and input types": return <div className="library-variant-row"><Input label="Contact email" type="email" leading={<span aria-hidden="true">@</span>} placeholder="you@example.com" />
      <Input label="Website" type="url" leading={<span>https://</span>} placeholder="your-site.com" />
      <Input label="Budget" type="number" leading={<span>$</span>} trailing={<span>USD</span>} placeholder="0.00" />
      <Input label="Phone number" type="tel" placeholder="+63 900 000 0000" /></div>;
    case "Combobox disabled and empty": return <div className="library-variant-row"><Combobox label="Unavailable city" disabled options={[{ value: "Manila", label: "Manila" }]} />
      <Combobox label="Search empty collection" options={[]} placeholder="Search cities" /></div>;
    case "Multi-select disabled and empty": return <div className="library-variant-row"><MultiSelect label="Unavailable interests" disabled defaultValue={["design"]} options={[{ value: "design", label: "Design" }]} />
      <MultiSelect label="Choose optional interests" options={[]} /></div>;
    case "Range, steps and disabled sliders": return <div className="library-variant-row"><Slider label="Price range" min={0} max={100} defaultValue={[20, 80]} />
      <Slider label="Stepped volume" step={10} defaultValue={40} />
      <Slider label="Unavailable volume" disabled defaultValue={60} /></div>;
    case "Number limits and stepper states": return <div className="library-variant-row"><NumberInput label="Seats" min={1} max={10} step={1} defaultValue={4} />
      <NumberInput label="Readonly quantity" readOnly defaultValue={12} />
      <NumberInput label="Unavailable quantity" disabled defaultValue={0} /></div>;
    case "OTP lengths and masked codes": return <div className="library-variant-row"><OtpInput label="Four-digit PIN" length={4} masked />
      <OtpInput label="Unavailable code" length={6} disabled /></div>;
    case "File restrictions": return <div className="library-variant-row"><FileUpload label="Choose profile image" accept="image/*" maxSize={1024 * 1024} />
      <FileUpload label="Unavailable upload" disabled /></div>;
    case "Date limits and native time fields": return <div className="library-variant-row"><DatePicker label="Project deadline" min="2026-11-01" max="2026-12-31" defaultValue="2026-11-15" />
      <DatePicker label="Meeting time" type="time" defaultValue="09:30" />
      <DatePicker label="Unavailable date" disabled /></div>;
    case "Icon sizes and shapes": return <div className="library-variant-row"><IconButton label="Add small item" size="sm">+</IconButton>
      <IconButton label="Add item" shape="circle">+</IconButton>
      <IconButton label="Add large item" variant="outline" size="lg">+</IconButton>
      <IconButton label="Unavailable action" disabled>+</IconButton></div>;
    case "Outlined and mixed actions": return <div className="library-variant-row"><ButtonGroup label="Edit actions"><Button variant="outline">Cut</Button><Button variant="outline">Copy</Button><Button variant="outline">Paste</Button></ButtonGroup>
      <ButtonGroup label="Save actions"><Button>Save changes</Button><Button variant="outline">Cancel</Button></ButtonGroup></div>;
    case "Textarea validation and readonly": return <div className="library-variant-row"><Textarea label="Required notes" required error="Add a few details before continuing." />
      <Textarea label="Readonly notes" readOnly defaultValue="This content is shared with the team." />
      <Textarea label="Unavailable notes" disabled placeholder="Editing is unavailable" /></div>;
    case "Checkbox states": return <div className="library-variant-row"><Checkbox label="Unchecked option" />
      <Checkbox label="Checked option" defaultChecked />
      <Checkbox label="Partial selection" indeterminate />
      <Checkbox label="Disabled option" disabled />
      <Checkbox label="Disabled checked option" disabled defaultChecked /></div>;
    case "Radio disabled states": return <div className="library-variant-row"><RadioGroup label="Membership plan" name="plan" defaultValue="team" options={[{ value: "personal", label: "Personal" }, { value: "team", label: "Team" }, { value: "enterprise", label: "Enterprise", disabled: true }]} /></div>;
    case "Switch states": return <div className="library-variant-row"><Switch label="Enable previews" />
      <Switch label="Enable sharing" defaultChecked />
      <Switch label="Unavailable preference" disabled />
      <Switch label="Locked preference" disabled defaultChecked /></div>;
    case "Select placeholder and errors": return <div className="library-variant-row"><Select label="Choose a team" placeholder="Choose a team" options={[{ value: "design", label: "Design" }, { value: "engineering", label: "Engineering" }]} />
      <Select label="Team with error" error="Choose a team to continue." options={[{ value: "design", label: "Design" }]} />
      <Select label="Unavailable team" disabled options={[{ value: "design", label: "Design" }]} /></div>;
    case "Rating readonly and disabled": return <div className="library-variant-row"><Rating label="Read-only score" readOnly defaultValue={4} />
      <Rating label="Unavailable score" disabled defaultValue={3} />
      <Rating label="Three-point score" max={3} defaultValue={2} /></div>;
    case "Badge styles and tones": return <div className="library-variant-row">{(["solid", "soft", "outline"] as const).map(variant => <div key={variant} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{(["neutral", "primary", "success", "warning", "danger", "info"] as const).map(tone => <Badge key={tone} variant={variant} tone={tone}>{tone}</Badge>)}</div>)}</div>;
    case "Avatar sizes and status": return <div className="library-variant-row"><Avatar name="Alex Morgan" size="sm" />
      <Avatar name="Jules Santos" size="md" status="online" />
      <Avatar name="Morgan Lee" size="lg" status="busy" />
      <Avatar name="Riley Chen" size={64} status="away" /></div>;
    case "Card surface variants": return <div className="library-variant-row"><Card title="Default surface" description="For everyday content."><p>Your content belongs here.</p></Card>
      <Card variant="outlined" title="Outlined surface" description="A defined border, without a fill."><p>Your content belongs here.</p></Card>
      <Card variant="soft" title="Soft surface" description="A quiet brand-tinted surface."><p>Your content belongs here.</p></Card></div>;
    case "Profile and product cards": return <div className="library-variant-row"><Card title="Alex Morgan" description="Product designer"><Avatar name="Alex Morgan" size="lg" /><p>Designing the next useful thing.</p><Button variant="outline">View profile</Button></Card>
      <Card title="Studio workspace" description="A place for your next project."><Badge tone="success">Available</Badge><p>Shared components, one clear system.</p><Button>Open workspace</Button></Card></div>;
    case "Accordion multiple and disabled": return <div className="library-variant-row"><Accordion multiple items={[{ id: "design", title: "Design tokens", content: "One shared source for colors, typography, and spacing." }, { id: "components", title: "Components", content: "Reusable React components with native props and scoped styles." }, { id: "unavailable", title: "Unavailable section", content: "Not available.", disabled: true }]} /></div>;
    case "Underline tabs": return <div className="library-variant-row"><Tabs variant="underline" label="Underline project tabs" items={[{ value: "overview", label: "Overview", content: "Everything you need to get started." }, { value: "activity", label: "Activity", content: "Recent changes from your team." }]} /></div>;
    case "Pill tabs": return <div className="library-variant-row"><Tabs variant="pill" label="Pill project tabs" items={[{ value: "overview", label: "Overview", content: "Everything you need to get started." }, { value: "activity", label: "Activity", content: "Recent changes from your team." }]} /></div>;
    case "Vertical tabs and disabled": return <div className="library-variant-row"><Tabs orientation="vertical" label="Vertical project tabs" items={[{ value: "overview", label: "Overview", content: "Everything you need to get started." }, { value: "activity", label: "Activity", content: "Recent changes from your team." }, { value: "archive", label: "Archive", content: "Archived content.", disabled: true }]} /></div>;
    case "Pagination boundaries": return <div className="library-variant-row"><Pagination label="First page example" page={first} totalPages={5} onPageChange={setFirst} />
      <Pagination label="Last page example" page={last} totalPages={5} onPageChange={setLast} /></div>;
    case "Completed and final steps": return <div className="library-variant-row"><Stepper steps={["Details", "Review", "Complete"]} current={2} /></div>;
    case "Grouped menu actions": return <div className="library-variant-row"><DropdownMenu trigger={<Button variant="outline">Document actions</Button>} items={[{ label: "Edit document", shortcut: "⌘E" }, { label: "Duplicate", shortcut: "⌘D" }, { label: "Archive", disabled: true }, { label: "Delete document", destructive: true }]} /></div>;
    case "Alert tones": return <div className="library-variant-row">{(["info", "success", "warning", "danger"] as const).map(tone => <Alert key={tone} title={`${tone[0].toUpperCase()}${tone.slice(1)} update`} tone={tone}>Keep the next step clear with a useful message.</Alert>)}</div>;
    case "Toast messages": return <div className="library-variant-row"><Toast title="Changes saved" description="Everything is up to date." tone="success" />
      <Toast title="Connection interrupted" description="Check your connection and try again." tone="danger" />
      <Toast title="A new update" description="Your team added a comment." tone="info" /></div>;
    case "Progress states": return <div className="library-variant-row"><Progress label="Starting" value={0} />
      <Progress label="Complete" value={100} />
      <Progress label="Working" indeterminate />
      <Progress label="Circular progress" value={72} circular /></div>;
    case "Skeleton layouts": return <div className="library-variant-row"><div style={{ display: "grid", gap: 12, width: 240 }}><Skeleton width={48} height={48} style={{ borderRadius: "50%" }} /><Skeleton width="100%" height={20} /><Skeleton width="80%" height={14} /><Skeleton width="60%" height={14} /></div></div>;
    case "Spinner sizes": return <div className="library-variant-row"><Spinner size="sm" label="Loading small preview" />
      <Spinner size="md" label="Loading preview" />
      <Spinner size="lg" label="Loading large preview" /></div>;
    case "Empty search and error states": return <div className="library-variant-row"><EmptyState title="No matching projects" description="Try a different search or clear your filters." action={<Button variant="outline">Clear filters</Button>} />
      <EmptyState title="Could not load projects" description="Check your connection and try again." action={<Button>Try again</Button>} /></div>;
    case "Destructive confirmation": return <div className="library-variant-row"><AlertDialog title="Archive this workspace?" description="You can restore it later from your archive." trigger={<Button variant="outline">Archive workspace</Button>} confirmLabel="Archive" onConfirm={() => {}} /></div>;
    case "Drawer positions": return <div className="library-variant-row"><Drawer side="left" title="Left panel" trigger={<Button variant="outline">Open left panel</Button>}><p>Extra context, close at hand.</p></Drawer>
      <Drawer side="bottom" title="Bottom panel" trigger={<Button variant="outline">Open bottom panel</Button>}><p>A compact surface for the next step.</p></Drawer></div>;
    case "Tooltip positions": return <div className="library-variant-row">{(["top", "right", "bottom", "left"] as const).map(side => <Tooltip key={side} content={`${side} tooltip`} side={side}><Button variant="outline">{side}</Button></Tooltip>)}</div>;
    case "Button link variants": return <div className="library-variant-row"><ButtonLink href="#/components" variant="primary">Browse components</ButtonLink>
      <ButtonLink href="#/using-hulmio" variant="outline">Installation</ButtonLink>
      <ButtonLink href="#/patterns" variant="ghost">Patterns</ButtonLink></div>;
    case "Toggle states": return <div className="library-variant-row"><Toggle>Grid view</Toggle>
      <Toggle defaultPressed>Selected view</Toggle>
      <Toggle disabled>Unavailable view</Toggle></div>;
    case "Input group prefixes": return <div className="library-variant-row"><InputGroup><InputGroupAddon>https://</InputGroupAddon><InputGroupInput aria-label="Website address" placeholder="your-site.com" /><InputGroupAddon>.com</InputGroupAddon></InputGroup></div>;
    case "Aspect ratio formats": return <div className="library-variant-row"><AspectRatio ratio={16 / 9} style={{ width: 240, background: "var(--hulmio-soft)" }}>16:9 landscape</AspectRatio>
      <AspectRatio ratio={1} style={{ width: 160, background: "var(--hulmio-subtle)" }}>1:1 square</AspectRatio>
      <AspectRatio ratio={3 / 4} style={{ width: 120, background: "var(--hulmio-soft)" }}>3:4 portrait</AspectRatio></div>;
    case "Separator directions": return <div className="library-variant-row"><div style={{ display: "grid", gap: 16, width: 240 }}><span>Project overview</span><Separator /><span>Project details</span></div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, height: 48 }}><span>Design</span><Separator orientation="vertical" /><span>Build</span></div></div>;
    case "Heading hierarchy and text": return <div className="library-variant-row"><div><Heading as="h2">A clear heading</Heading><Heading as="h3">A useful subheading</Heading><Heading as="h4">A little more detail</Heading><Text>Comfortable body text for your interface.</Text><Text tone="muted">Secondary information, still readable.</Text></div></div>;
    case "Keyboard combinations": return <div className="library-variant-row"><span><Kbd>⌘</Kbd> <Kbd>K</Kbd></span>
      <span><Kbd>Ctrl</Kbd> <Kbd>Shift</Kbd> <Kbd>P</Kbd></span>
      <Kbd>Esc</Kbd></div>;
    case "Item surface variants": return <div className="library-variant-row"><ItemGroup><Item><ItemContent><ItemTitle>Default item</ItemTitle><ItemDescription>A simple list row.</ItemDescription></ItemContent></Item><Item variant="outline"><ItemContent><ItemTitle>Outlined item</ItemTitle><ItemDescription>A more defined boundary.</ItemDescription></ItemContent></Item><Item variant="muted"><ItemContent><ItemTitle>Muted item</ItemTitle><ItemDescription>A quiet surface.</ItemDescription></ItemContent></Item></ItemGroup></div>;
    default: return null;
  }
}
