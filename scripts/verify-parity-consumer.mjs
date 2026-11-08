import { expect } from "@playwright/test";

export const parityConsumerSource = `import { useState } from "react";
import { Button, ButtonGroup, Form, TextField, NumberField, DateField, TimeField, SegmentedDatePicker, ComposedColorPicker, ColorSwatchPicker, parseColor, Sheet, ToastProvider, ToastQueue } from "hulmio-ui";
import { parseDate, parseTime } from "@internationalized/date";
const queue = new ToastQueue();
export default function ParityConsumer() {
  const [color, setColor] = useState(parseColor("#284c3f"));
  const [submitted, setSubmitted] = useState("");
  return <section aria-label="Expanded parity consumer" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 20, maxWidth: 640 }}>
    <Form onSubmit={event => { event.preventDefault(); setSubmitted(String(new FormData(event.currentTarget).get("workspace"))); }}>
      <TextField label="Parity workspace" name="workspace" defaultValue="Hulmio" isRequired className="consumer-field" />
      <NumberField label="Parity budget" defaultValue={100} minValue={0} step={50} />
      <SegmentedDatePicker label="Parity event" defaultValue={parseDate("2026-11-06")} />
      <DateField label="Parity calendar field" defaultValue={parseDate("2026-11-06")} />
      <TimeField label="Parity time field" defaultValue={parseTime("09:30")} />
      <Button type="submit">Save parity form</Button><Button type="reset" variant="outline">Reset parity form</Button>
    </Form><output aria-label="Parity submitted">{submitted}</output>
    <ButtonGroup disabled><Button>Disabled parity action</Button></ButtonGroup>
    <ComposedColorPicker label="Parity color" value={color} onChange={setColor}><ColorSwatchPicker label="Parity palette" colors={[{label:"Parity forest",value:"#284c3f"},{label:"Parity lime",value:"#d9ed92"}]} value={color.toString("hex")} onValueChange={value => setColor(parseColor(value))} /></ComposedColorPicker>
    <Sheet title="Parity sheet" trigger={<Button>Open parity sheet</Button>} snapPoints={[0.35,0.8]}><p>Installed package sheet</p></Sheet>
    <ToastProvider queue={queue} /><Button onClick={() => queue.add({ title: "Parity queued notification", timeout: 250 })}>Notify parity consumer</Button>
  </section>;
}`;

export async function verifyParityConsumer(page) {
  const region = page.getByRole("region", { name: "Expanded parity consumer", exact: true });
  const field = region.getByRole("textbox", { name: "Parity workspace", exact: true });
  await expect(region.locator('.consumer-field')).toHaveClass(/h-rich-field/);
  await field.fill("Installed Hulmio");
  await region.getByRole("button", { name: "Save parity form", exact: true }).click();
  await expect(region.getByRole("status", { name: "Parity submitted", exact: true })).toHaveText("Installed Hulmio");
  await region.getByRole("button", { name: "Reset parity form", exact: true }).click();
  await expect(field).toHaveValue("Hulmio");
  await expect(region.getByRole("button", { name: "Disabled parity action", exact: true })).toBeDisabled();
  const day = region.locator('[data-hulmio-ui="date-field"] [data-type="day"]');
  await day.press("ArrowUp");
  await expect(day).toHaveText(/^0?7$/);
  const minute = region.locator('[data-hulmio-ui="time-field"] [data-type="minute"]');
  await minute.press("ArrowUp");
  await expect(minute).toHaveText("31");
  await region.getByRole("button", { name: /Parity color/ }).click();
  const colorDialog = page.getByRole("dialog", { name: "Parity color", exact: true });
  const editor = colorDialog.getByRole("textbox", { name: "Color", exact: true });
  const before = await editor.inputValue();
  await colorDialog.getByRole("slider", { name: "Hue", exact: true }).press("End");
  await expect(editor).not.toHaveValue(before);
  await colorDialog.getByRole("radio", { name: "Parity lime", exact: true }).check();
  await expect(editor).toHaveValue(/#D9ED92/i);
  await page.keyboard.press("Escape");
  const opener = region.getByRole("button", { name: "Open parity sheet", exact: true });
  await opener.click();
  const sheet = page.getByRole("dialog", { name: "Parity sheet", exact: true });
  await sheet.getByRole("slider", { name: "Sheet position", exact: true }).press("End");
  await expect(sheet.getByRole("slider")).toHaveAttribute("aria-valuenow", "1");
  await page.keyboard.press("Escape");
  await expect(opener).toBeFocused();
  await region.getByRole("button", { name: "Notify parity consumer", exact: true }).click();
  await expect(page.getByText("Parity queued notification", { exact: true })).toBeVisible();
  await expect(page.getByText("Parity queued notification", { exact: true })).toHaveCount(0);
}
