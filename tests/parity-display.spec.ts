import { expect, test } from "@playwright/test";

test("resizable examples isolate panel IDs and still accept controlled layouts", async ({ page }) => {
  await page.goto("/#/components/resizable");
  const example = page.locator('[data-example-id="resizable--controlled-layout"]');
  await example.getByRole("button", { name: "Set 30 / 70 layout", exact: true }).click();
  await expect.poll(async () => {
    const text = await example.locator(".library-preview output").textContent();
    return Object.values(JSON.parse(text!.replace("Layout: ", "")));
  }).toEqual([30, 70]);
  const ids = await page.locator('[data-hulmio-ui="resizable-panel"]').evaluateAll(panels => panels.map(panel => panel.id));
  expect(new Set(ids).size).toBe(ids.length);
});
import type { Page } from "@playwright/test";

async function mount(page: Page, module: string, component: string, props: Record<string, unknown>, control?: { stateProp: string; changeProp: string; value: unknown }, inForm = false) {
  await page.goto("/");
  await page.evaluate(async ({ module, component, props, control, inForm }) => {
    const source = await (await fetch(`/packages/ui/src/${module}.tsx`)).text();
    const reactPath = source.match(/from\s+["']([^"']*\/react\.js[^"']*)["']/)?.[1];
    if (!reactPath) throw new Error("Could not resolve Vite React import");
    const reactModule = await import(/* @vite-ignore */ reactPath);
    const React = reactModule.default ?? reactModule;
    const domPath = reactPath.replace(/react\.js/, "react-dom_client.js").replace(/\?.*$/, "");
    const domModule = await import(/* @vite-ignore */ domPath);
    const { createRoot } = domModule.default ?? domModule;
    const library = await import(/* @vite-ignore */ `/packages/ui/src/${module}.tsx`);
    document.getElementById("root")!.replaceChildren();
    function Fixture() {
      const [value, setValue] = React.useState(control?.value);
      return React.createElement(inForm ? "form" : "div", null, React.createElement(library[component], { ...props, ...(control ? { [control.stateProp]: value, [control.changeProp]: setValue } : {}) }), control && React.createElement("output", { "data-test-state": true }, JSON.stringify(value)), inForm && React.createElement("button", { type: "reset" }, "Reset selection"));
    }
    createRoot(document.getElementById("root")!).render(React.createElement(Fixture));
  }, { module, component, props, control, inForm });
}

test("accordion controlled defaults and disabled items preserve native keyboard behavior", async ({ page }) => {
  await mount(page, "Display", "Accordion", { items: [{ id: "one", title: "One", content: "First answer" }, { id: "two", title: "Two", content: "Second answer", disabled: true }], defaultExpandedKeys: ["one"] });
  await expect(page.getByText("First answer")).toBeVisible();
  await expect(page.locator("summary").filter({ hasText: "Two" })).toHaveAttribute("aria-disabled", "true");
  await page.locator("summary").filter({ hasText: "Two" }).evaluate(element => (element as HTMLElement).click());
  await expect(page.getByText("Second answer")).toBeHidden();
  await page.locator("summary").filter({ hasText: "One" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByText("First answer")).toBeHidden();
});

test("calendar supports six-week grids, a real year picker and week/day views", async ({ page }) => {
  await mount(page, "AdditionalSelection", "Calendar", { label: "Choose date", defaultFocusedValue: "2026-02-10", weeksInMonth: 6, yearPicker: true });
  await expect(page.locator(".h-calendar-grid tbody tr")).toHaveCount(6);
  await page.getByRole("button", { name: "Choose year" }).click();
  await page.getByRole("button", { name: "2028", exact: true }).click();
  await expect(page.locator(".h-calendar-heading")).toContainText("2028");
  await mount(page, "AdditionalSelection", "Calendar", { label: "Week", defaultFocusedValue: "2026-02-10", view: "week" });
  await expect(page.locator(".h-calendar-grid tbody tr")).toHaveCount(1);
  await mount(page, "AdditionalSelection", "Calendar", { label: "Day", defaultFocusedValue: "2026-02-10", view: "day" });
  await expect(page.locator('[role="gridcell"]')).toHaveCount(1);
});

test("virtual tables render a bounded window and scroll to later rows", async ({ page }) => {
  await mount(page, "Display", "DataTable", { caption: "Large dataset", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Name", sortable: true }], rows: Array.from({ length: 5000 }, (_, id) => ({ id, name: `Person ${id}` })), virtualized: true, height: 240, rowHeight: 40 });
  await expect(page.locator("tbody tr[data-row-id]")).toHaveCount(14);
  await page.locator(".h-table-scroll").evaluate(node => { node.scrollTop = 120000; node.dispatchEvent(new Event("scroll")); });
  await expect(page.locator("tbody tr[data-row-id]").first()).toHaveAttribute("data-row-id", "2996");
  await expect(page.locator("tbody tr[data-row-id]")).toHaveCount(14);
});

test("list box virtualization keeps DOM bounded while preserving accessible collection", async ({ page }) => {
  await mount(page, "AdditionalSelection", "ListBox", { label: "People", options: Array.from({ length: 1000 }, (_, id) => ({ id: String(id), label: `Person ${id}` })), virtualized: true, height: 240, rowHeight: 40 });
  await expect.poll(() => page.getByRole("option").count()).toBeGreaterThan(0);
  expect(await page.getByRole("option").count()).toBeLessThan(40);
  await expect(page.getByRole("option").first()).toHaveAttribute("aria-setsize", "1000");
});

test("controlled disclosure groups update expansions without changing disabled items", async ({ page }) => {
  await mount(page, "Surface", "DisclosureGroup", { multiple: true, items: [{ id: "one", title: "First", content: "First content" }, { id: "two", title: "Second", content: "Second content" }] }, { stateProp: "expandedKeys", changeProp: "onExpandedChange", value: ["one"] });
  await page.locator("summary").filter({ hasText: "Second" }).click();
  await expect(page.locator("[data-test-state]")).toHaveText('["one","two"]');
  await page.locator("summary").filter({ hasText: "First" }).click();
  await expect(page.locator("[data-test-state]")).toHaveText('["two"]');
});

test("multiple calendar selection emits Gregorian ISO values", async ({ page }) => {
  await mount(page, "AdditionalSelection", "Calendar", { label: "Choose dates", defaultFocusedValue: "2026-11-10", selectionMode: "multiple" }, { stateProp: "selectedValues", changeProp: "onSelectedValuesChange", value: ["2026-11-10"] });
  await page.getByRole("button", { name: /November 18, 2026/ }).click();
  await expect(page.locator("[data-test-state]")).toContainText("2026-11-18");
  await expect(page.locator("[data-test-state]")).toContainText("2026-11-10");
});

test("table numeric sorting, controlled selection and keyboard resizing are real", async ({ page }) => {
  await mount(page, "Display", "DataTable", { caption: "Scores", selectable: true, resizableColumns: true, columns: [{ key: "id", label: "ID", width: 120 }, { key: "score", label: "Score", sortable: true, width: 160 }], rows: [{ id: 1, score: 20 }, { id: 2, score: 3 }] }, { stateProp: "selectedRowIds", changeProp: "onSelectionChange", value: [] });
  await page.getByRole("button", { name: /Score/ }).click();
  await expect(page.locator("tbody tr[data-row-id]").first()).toHaveAttribute("data-row-id", "2");
  await page.getByRole("checkbox", { name: "Select row 2", exact: true }).check();
  await expect(page.locator("[data-test-state]")).toHaveText("[2]");
  await page.getByRole("separator", { name: "Resize Score" }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("separator", { name: "Resize Score" })).toHaveAttribute("aria-valuenow", "170");
});

test("native Link retains anchor semantics and suppresses disabled navigation", async ({ page }) => {
  await mount(page, "Surface", "Link", { href: "#should-not-navigate", children: "Unavailable", disabled: true });
  await expect(page.locator("a")).toHaveAttribute("aria-disabled", "true");
  await expect(page.locator("a")).not.toHaveAttribute("href");
  await expect(page.locator("a")).toHaveAttribute("tabindex", "-1");
});

test("uncontrolled swatches reset to their default selection", async ({ page }) => {
  await mount(page, "AdditionalSelection", "ColorSwatchPicker", { label: "Palette", colors: [{ value: "#284c3f", label: "Forest" }, { value: "#d9ed92", label: "Lime" }], defaultValue: "#284c3f" }, undefined, true);
  await page.getByRole("radio", { name: "Lime", exact: true }).check();
  await page.getByRole("button", { name: "Reset selection", exact: true }).click();
  await expect(page.getByRole("radio", { name: "Forest", exact: true })).toBeChecked();
});
