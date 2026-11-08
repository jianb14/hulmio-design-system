import assert from "node:assert/strict";
import { expect } from "@playwright/test";

export const redesignConsumerSource = `import { useRef, useState } from "react";
import { Combobox, MultiSelect, DatePicker, DateRangePicker, NumberInput, Slider, OtpInput, FileUpload, Calendar, RangeCalendar, ListBox, TreeView, CheckboxCard, RadioCard, ColorSwatchPicker, Chip, Stat, DataList, Image, CodeBlock, Meter, Clipboard, Resizable, ResizablePanel, ResizableHandle, ScrollShadow, HoverCard, ContextMenu, Menubar, NavigationMenu, Button, Badge, Tabs } from "hulmio-ui";

export default function RedesignConsumer() {
  const dateRef = useRef<HTMLInputElement>(null);
  const [city, setCity] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState("2026-11-06");
  const [range, setRange] = useState({ start: "2026-11-06", end: "2026-11-10" });
  const [price, setPrice] = useState<number[]>([20, 80]);
  const [code, setCode] = useState("");
  const [form, setForm] = useState("");
  const [sliderEvents, setSliderEvents] = useState<string[]>([]);
  const [showSlider, setShowSlider] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);
  return <section aria-label="Redesigned package consumer" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 24, maxWidth: 640, overflowWrap: "anywhere" }}>
    <form onSubmit={event => { event.preventDefault(); const data = new FormData(event.currentTarget); setForm(JSON.stringify(Object.fromEntries(data))); }}>
      <Combobox label="Consumer city" name="city" value={city} onChange={event => setCity(event.target.value)} options={[{ value: "manila", label: "Manila" }, { value: "cebu", label: "Cebu" }]} />
      <MultiSelect label="Consumer skills" name="skill" value={tags} onValueChange={setTags} options={[{ value: "design", label: "Design" }, { value: "code", label: "Code" }]} />
      <DatePicker label="Consumer custom date" ref={dateRef} name="date" value={date} onChange={event => setDate(event.target.value)} />
      <button type="button" onClick={() => setForm(dateRef.current?.value ?? "")}>Read date ref</button>
      <DateRangePicker label="Consumer custom range" name="trip" value={range} onValueChange={setRange} />
      <NumberInput label="Consumer custom quantity" name="quantity" min={1} max={5} defaultValue={2} />
      <Slider label="Consumer price range" name="price" value={price} onValueChange={setPrice} />
      <OtpInput label="Consumer custom code" name="code" value={code} onValueChange={setCode} />
      <FileUpload label="Consumer custom files" name="files" accept="image/*" multiple maxSize={1000} />
      <Button type="submit">Submit redesigned controls</Button>
    </form>
    <output aria-label="Redesigned form data">{form}</output>
    <Calendar label="Consumer inline calendar" defaultValue="2026-11-06" />
    <RangeCalendar label="Consumer inline range" defaultValue={{ start: "2026-11-06", end: "2026-11-10" }} />
    <ListBox label="Consumer role list" options={[{ id: "viewer", label: "Viewer" }, { id: "editor", label: "Editor" }]} />
    <TreeView label="Consumer project tree" items={[{ id: "project", label: "Project", children: [{ id: "readme", label: "Readme" }] }]} />
    <CheckboxCard label="Consumer checkbox card" description="A selectable card" />
    <fieldset><legend>Consumer card choices</legend><RadioCard name="plan" label="Personal plan" value="personal" defaultChecked /><RadioCard name="plan" label="Team plan" value="team" /></fieldset>
    <ColorSwatchPicker label="Consumer swatches" colors={[{ label: "Forest", value: "#284c3f" }, { label: "Lime", value: "#d9ed92" }]} />
    <Chip onRemove={() => setForm("Chip removed")}>Removable consumer chip</Chip>
    <Stat label="Consumer completion" value="12" description="Local example data" />
    <DataList items={[{ label: "Workspace", value: "Hulmio" }]} />
    <Image srcSet="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='60'%3E%3Crect%20width='100'%20height='60'%20fill='%23284c3f'/%3E%3C/svg%3E" alt="Consumer image" aspectRatio={16 / 9} />
    <CodeBlock code={'const answer = 42;'} language="typescript" showLineNumbers />
    <Meter label="Consumer storage" value={65} />
    <Clipboard value="copied from installed package">Copy consumer redesign</Clipboard>
    <Resizable orientation="horizontal"><ResizablePanel id="left" defaultSize="50%" minSize="20%">Left</ResizablePanel><ResizableHandle label="Resize consumer panels" /><ResizablePanel id="right" defaultSize="50%" minSize="20%">Right</ResizablePanel></Resizable>
    <ScrollShadow aria-label="Consumer notes" maxHeight={100}>{Array.from({length: 10}, (_, i) => <p key={i}>Note {i + 1}</p>)}</ScrollShadow>
    <HoverCard trigger={<a href="#consumer">Consumer hover profile</a>}><p>Profile details from the installed package.</p></HoverCard>
    <ContextMenu items={[{id:"open", label:"Open consumer item", onSelect:() => setForm("Context action") }]}><button>Consumer context area</button></ContextMenu>
    <Menubar label="Consumer menu bar" menus={[{id:"file", label:"Consumer file", items:[{id:"new", label:"New consumer item"}]}]} />
    <NavigationMenu label="Consumer site menu" items={[{id:"learn", label:"Consumer resources", content:<a href="#consumer-docs">Consumer documentation</a>},{id:"docs", label:"Documentation", href:"#consumer-docs"}]} />
    <Badge outline variant="solid" tone="success" data-testid="consumer-badge-precedence">Solid wins</Badge>
    <Tabs variant="underline" label="Consumer variant tabs" items={[{value:"first",label:"First variant tab",content:"First panel"},{value:"second",label:"Second variant tab",content:"Second panel"}]} />
    <form onReset={event => event.preventDefault()}>
      <NumberInput label="Cancelled reset quantity" defaultValue={2} />
      <button type="reset">Cancel rich control reset</button>
    </form>
    <button onClick={() => setShowSlider(true)}>Mount autofocus slider</button>
    {showSlider && <Slider label="Native event slider" defaultValue={30} tabIndex={2} title="Native slider title" autoFocus onFocus={event => { const tag = event.currentTarget.tagName; setSliderEvents(events => [...events, "focus:" + tag]); }} onBlur={event => { const tag = event.currentTarget.tagName; setSliderEvents(events => [...events, "blur:" + tag]); }} onKeyDown={event => { const key = event.key; setSliderEvents(events => [...events, "down:" + key]); }} onKeyUp={event => { const key = event.key; setSliderEvents(events => [...events, "up:" + key]); }} />}
    <output aria-label="Native slider events">{sliderEvents.join(",")}</output>
    <div ref={setPortalContainer} data-testid="rich-scoped-theme" data-hulmio-theme="dark" style={{ "--hulmio-surface": "#1e2821" } as React.CSSProperties}>
      <Combobox label="Scoped city" options={[{value:"manila",label:"Scoped Manila"}]} portalContainer={portalContainer} />
      <MultiSelect label="Scoped skills" options={[{value:"code",label:"Scoped Code"}]} portalContainer={portalContainer} />
      <DatePicker label="Scoped date" defaultValue="2026-11-06" portalContainer={portalContainer} />
      <DateRangePicker label="Scoped range" defaultValue={{start:"2026-11-06",end:"2026-11-10"}} portalContainer={portalContainer} />
    </div>
  </section>;
}`;

export async function verifyRedesignConsumer(page) {
  const region = page.getByRole("region", { name: "Redesigned package consumer" });
  const city = region.getByRole("combobox", { name: "Consumer city", exact: true });
  await city.scrollIntoViewIfNeeded();
  await city.fill("Ceb");
  await expect(page.getByRole("option", { name: "Cebu", exact: true })).toBeVisible();
  await page.getByRole("option", { name: "Cebu", exact: true }).click();
  await expect(city).toHaveValue("Cebu");
  const skills = region.getByRole("combobox", { name: "Consumer skills", exact: true });
  await skills.scrollIntoViewIfNeeded();
  await skills.fill("Code");
  await page.getByRole("option", { name: "Code", exact: true }).click();
  await page.keyboard.press("Escape");
  await expect(region.getByRole("button", { name: "Remove Code", exact: true })).toBeVisible();
  const quantity = region.locator('[data-hulmio-ui="number-input"]').filter({ has: page.getByRole("spinbutton", { name: "Consumer custom quantity", exact: true }) });
  await quantity.getByRole("button", { name: "Increase value", exact: true }).click();
  await expect(quantity.getByRole("spinbutton")).toHaveValue("3");
  const range = region.locator('[data-hulmio-ui="slider"]').getByRole("slider").first();
  await range.focus();
  await range.press("ArrowRight");
  await expect(range).toHaveValue("21");
  await region.locator('input[data-input-otp]').fill("123456");
  await region.getByRole("button", { name: "Read date ref", exact: true }).click();
  await expect(region.getByLabel("Redesigned form data", { exact: true })).toHaveText("2026-11-06");
  await region.getByRole("button", { name: "Submit redesigned controls", exact: true }).click();
  const submitted = JSON.parse(await region.getByLabel("Redesigned form data", { exact: true }).textContent());
  assert.equal(submitted.city, "cebu");
  assert.equal(submitted.skill, "code");
  assert.equal(submitted.quantity, "3");
  assert.equal(submitted["price-start"], "21");
  assert.equal(submitted["price-end"], "80");
  assert.equal(submitted.code, "123456");
  assert.equal(submitted.date, "2026-11-06");
  assert.equal(submitted["trip-start"], "2026-11-06");
  await region.getByRole("checkbox", { name: /Consumer checkbox card/ }).check();
  await expect(region.getByRole("meter", { name: "Consumer storage", exact: true })).toHaveAttribute("aria-valuenow", "65");
  const image = region.getByRole("img", { name: "Consumer image", exact: true });
  await image.scrollIntoViewIfNeeded();
  await expect.poll(() => image.evaluate(el => el instanceof HTMLImageElement && el.complete && el.naturalWidth > 0)).toBe(true);
  assert.equal(await region.locator('[data-hulmio-ui="resizable"]').evaluate(el => getComputedStyle(el).display), "flex");
  assert.notEqual(await region.getByTestId("consumer-badge-precedence").evaluate(el => getComputedStyle(el).backgroundColor), "rgba(0, 0, 0, 0)");
  await region.getByRole("tab", { name: "Second variant tab", exact: true }).click();
  await expect(region.getByRole("tabpanel")).toHaveText("Second panel");
  await region.getByRole("button", { name: "Consumer context area", exact: true }).click({ button: "right" });
  await page.getByRole("menuitem", { name: "Open consumer item", exact: true }).click();
  await expect(region.getByLabel("Redesigned form data", { exact: true })).toHaveText("Context action");
  const profile = region.getByRole("link", { name: "Consumer hover profile", exact: true });
  await profile.scrollIntoViewIfNeeded();
  await profile.focus();
  await expect(page.getByText("Profile details from the installed package.", { exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByText("Profile details from the installed package.", { exact: true })).not.toBeVisible();
  const resources = region.getByRole("button", { name: "Consumer resources", exact: true });
  await resources.click();
  await expect(region.getByRole("link", { name: "Consumer documentation", exact: true })).toBeVisible();
  await resources.press("Escape");
  await expect(resources).toBeFocused();
  await expect(region.locator('[data-hulmio-ui="code-block"] .token.keyword')).toHaveText("const");
  const resetQuantity = region.getByRole("spinbutton", { name: "Cancelled reset quantity", exact: true });
  await resetQuantity.fill("4");
  await region.getByRole("button", { name: "Cancel rich control reset", exact: true }).click();
  await expect(resetQuantity).toHaveValue("4");
  await region.getByRole("button", { name: "Mount autofocus slider", exact: true }).click();
  const nativeSlider = region.getByRole("slider", { name: "Native event slider", exact: true });
  await expect(nativeSlider).toBeFocused();
  await expect(nativeSlider).toHaveAttribute("tabindex", "2");
  await expect(nativeSlider).toHaveAttribute("title", "Native slider title");
  await nativeSlider.press("ArrowRight");
  await expect(nativeSlider).toHaveValue("31");
  await city.focus();
  await expect(region.getByLabel("Native slider events")).toContainText("focus:INPUT");
  await expect(region.getByLabel("Native slider events")).toContainText("blur:INPUT");
  await expect(region.getByLabel("Native slider events")).toContainText("down:ArrowRight");
  await expect(region.getByLabel("Native slider events")).toContainText("up:ArrowRight");
  await page.keyboard.press("Escape");
  const scope = page.getByTestId("rich-scoped-theme");
  for (const label of ["Scoped city", "Scoped skills"]) {
    const input = scope.getByRole("combobox", { name: label, exact: true });
    await input.scrollIntoViewIfNeeded();
    await input.click();
    const popover = scope.locator('[data-hulmio-ui="control-popover"]');
    await expect(popover).toBeVisible();
    await expect(popover).toHaveCSS("background-color", "rgb(30, 40, 33)");
    await page.keyboard.press("Escape");
  }
  for (const label of ["Scoped date", "Scoped range"]) {
    const field = scope.locator('[data-hulmio-ui="date-picker"], [data-hulmio-ui="date-range-picker"]').filter({ has: page.getByText(label, { exact: true }) });
    await field.getByRole("button", { name: /^Open calendar/ }).click();
    const popover = scope.locator('[data-hulmio-ui="date-popover"]');
    await expect(popover).toBeVisible();
    await expect(popover).toHaveCSS("background-color", "rgb(30, 40, 33)");
    await page.keyboard.press("Escape");
  }
}
