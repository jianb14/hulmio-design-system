import { expect, test } from "@playwright/test";
import { additionalCatalog, additionalFamilies } from "../src/lib/additional";

test("all twenty added families have real examples and public import source", async ({ page }) => {
  expect(additionalCatalog).toHaveLength(20);
  expect(Object.keys(additionalFamilies)).toHaveLength(20);
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  for (const entry of additionalCatalog) {
    const family = additionalFamilies[entry.id];
    expect(family.exports.length).toBeGreaterThan(0);
    expect(family.designs.length).toBeGreaterThan(0);
    for (const design of family.designs) {
      expect(design.code).toContain('from "hulmio-ui"');
      expect(design.code).toContain('import "hulmio-ui/styles.css"');
      expect(design.code).toContain("export default function App()");
    }
    await page.goto(`/#/components/${entry.id}`);
    await expect(page.locator("main h1")).toHaveText(entry.name);
    const preview = page.locator("[data-legacy-example] .library-preview").first();
    if (entry.id === "hover-card") await expect(preview.getByRole("link", { name: "Hulmio Studio", exact: true })).toBeVisible();
    else if (entry.id === "context-menu") await expect(preview.getByRole("button", { name: /Right-click this project/ })).toBeVisible();
    else await expect(preview.locator("[data-hulmio-ui]").first()).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("context menus select commands and support checkable nested actions", async ({ page }) => {
  await page.goto("/#/components/context-menu");
  const previews = page.locator("[data-legacy-example] .library-preview");
  await previews.first().getByRole("button", { name: /Right-click this project/ }).click({ button: "right" });
  await page.getByRole("menuitem", { name: "Duplicate", exact: true }).click();
  await expect(previews.first().getByRole("status")).toHaveText("File duplicated.");
  await previews.nth(1).getByRole("button", { name: /Right-click this project/ }).click({ button: "right" });
  await expect(page.getByRole("menuitemcheckbox", { name: "Show guides" })).toHaveAttribute("aria-checked", "true");
  await page.getByRole("menuitemcheckbox", { name: "Show guides" }).click();
  await previews.nth(1).getByRole("button", { name: /Right-click this project/ }).click({ button: "right" });
  await expect(page.getByRole("menuitemcheckbox", { name: "Show guides" })).toHaveAttribute("aria-checked", "false");
  await page.keyboard.press("Escape");
});

test("menubar supports keyboard opening and command selection", async ({ page }) => {
  await page.goto("/#/components/menubar");
  const preview = page.locator("[data-legacy-example] .library-preview").first();
  await preview.getByRole("menuitem", { name: "File", exact: true }).focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("menu", { name: "File" })).toBeVisible();
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(preview.getByRole("status")).toHaveText("File duplicated.");
  await expect(preview.getByRole("menuitem", { name: "File", exact: true })).toBeFocused();
});

test("tree expansion and listbox selection work with keyboard input", async ({ page }) => {
  await page.goto("/#/components/tree-view");
  const tree = page.locator("[data-legacy-example] .library-preview").first().locator('[data-hulmio-ui="tree-view"]');
  const parent = tree.locator(".h-tree-item").filter({ has: page.getByText("Website", { exact: true }) });
  await expect(parent).toHaveAttribute("aria-expanded", "true");
  await parent.click();
  await page.keyboard.press("ArrowLeft");
  await expect(parent).toHaveAttribute("aria-expanded", "false");
  await page.keyboard.press("ArrowRight");
  await expect(parent).toHaveAttribute("aria-expanded", "true");
  await page.goto("/#/components/list-box");
  const preview = page.locator("[data-legacy-example] .library-preview").first();
  const engineering = preview.getByRole("option", { name: "Engineering" });
  await engineering.click();
  await expect(engineering).toHaveAttribute("aria-selected", "true");
  await expect(preview.locator("output")).toHaveText("Selected: engineering");
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press(" ");
  await expect(preview.getByRole("option", { name: "Design", exact: true })).toHaveAttribute("aria-selected", "true");
  await expect(preview.getByRole("option", { name: "Operations" })).toHaveAttribute("aria-disabled", "true");
});

test("inline and range calendars return ISO dates and enforce unavailable days", async ({ page }) => {
  await page.goto("/#/components/inline-calendar");
  const first = page.locator("[data-legacy-example] .library-preview").first();
  await first.getByRole("button", { name: /November 13, 2026/ }).click();
  await expect(first.locator("output")).toHaveText("Selected: 2026-11-13");
  const unavailable = page.locator("[data-legacy-example] .library-preview").nth(1);
  await expect(unavailable.getByRole("button", { name: /November 15, 2026/ })).toHaveAttribute("aria-disabled", "true");
  await page.goto("/#/components/range-calendar");
  const range = page.locator("[data-legacy-example] .library-preview").first();
  await range.getByRole("button", { name: /November 9, 2026/ }).click();
  await range.getByRole("button", { name: /November 11, 2026/ }).click();
  await expect(range.locator("output")).toHaveText("2026-11-09 → 2026-11-11");
});

test("choice cards and named color swatches expose native input state", async ({ page }) => {
  await page.goto("/#/components/checkbox-card");
  const check = page.locator("[data-legacy-example] .library-preview").first();
  await expect(check.getByRole("checkbox", { name: /Weekly digest/ })).toBeChecked();
  await check.getByRole("checkbox", { name: /Weekly digest/ }).uncheck();
  await expect(check.locator("output")).toHaveText("Weekly digest: off");
  await expect(check.getByRole("checkbox", { name: /SMS notifications/ })).toBeDisabled();
  await page.goto("/#/components/radio-card");
  const radio = page.locator("[data-legacy-example] .library-preview").first();
  await radio.getByRole("radio", { name: /Personal/ }).check();
  await expect(radio.locator("output")).toHaveText("Selected: personal");
  await expect(radio.getByRole("radio", { name: /Studio/ })).not.toBeChecked();
  await page.goto("/#/components/color-swatch-picker");
  const swatches = page.locator("[data-legacy-example] .library-preview").first();
  await swatches.getByRole("radio", { name: "Lime", exact: true }).check();
  await expect(swatches.locator("output")).toHaveText("Selected: #d9ed92");
  await expect(swatches.getByRole("radio", { name: "Mist", exact: true })).toBeDisabled();
});

test("chips remove, restore, and toggle values locally", async ({ page }) => {
  await page.goto("/#/components/chip");
  await page.getByRole("button", { name: "Remove Design", exact: true }).click();
  await expect(page.getByRole("button", { name: "Remove Design", exact: true })).toHaveCount(0);
  await page.getByRole("button", { name: "Reset tags", exact: true }).click();
  await expect(page.getByRole("button", { name: "Remove Design", exact: true })).toBeVisible();
  const toggle = page.getByRole("button", { name: "Design resources", exact: true });
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
});

test("clipboard announces success and a denied write locally", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#/components/clipboard");
  const preview = page.locator("[data-legacy-example] .library-preview").first();
  await preview.getByRole("button", { name: "Copy command", exact: true }).click();
  await expect(preview.getByRole("status")).toHaveText("Copied");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe("npm install ./hulmio-ui-0.1.0.tgz");
  await page.evaluate(() => Object.defineProperty(navigator.clipboard, "writeText", { configurable: true, value: () => Promise.reject(new Error("Denied")) }));
  await preview.getByRole("button", { name: "Copied", exact: true }).click();
  await expect(preview.getByRole("status")).toContainText("Could not copy");
});

test("resizable separators support keyboard sizing and scroll shadows track overflow", async ({ page }) => {
  await page.goto("/#/components/resizable");
  const preview = page.locator("[data-legacy-example] .library-preview").first();
  const handle = preview.getByRole("separator", { name: "Resize project panels" });
  const before = await handle.getAttribute("aria-valuenow");
  await handle.focus();
  await page.keyboard.press("ArrowRight");
  await expect.poll(() => handle.getAttribute("aria-valuenow")).not.toBe(before);
  await page.goto("/#/components/scroll-shadow");
  const scroll = page.locator('[data-hulmio-ui="scroll-shadow"]').first();
  await expect(scroll).toHaveAttribute("data-bottom-shadow", "true");
  await expect(scroll).not.toHaveAttribute("data-top-shadow");
  await scroll.focus();
  await page.keyboard.press("End");
  await expect(scroll).toHaveAttribute("data-top-shadow", "true");
  await expect(scroll).not.toHaveAttribute("data-bottom-shadow");
});

test("image fallback retains its accessible description and meters expose measurements", async ({ page }) => {
  await page.goto("/#/components/image");
  const fallback = page.locator("[data-legacy-example] .library-preview").nth(2);
  await fallback.scrollIntoViewIfNeeded();
  await expect(fallback.getByRole("img", { name: "Green mountain landscape beneath a lime sun" })).toBeVisible();
  await expect(fallback).toContainText("The image could not be loaded.");
  await page.goto("/#/components/meter");
  const meter = page.locator("[data-legacy-example] .library-preview").first().getByRole("meter", { name: "Storage used" });
  await expect(meter).toHaveAttribute("aria-valuenow", "64");
  await expect(meter).toHaveAttribute("aria-valuetext", "6.4 GB of 10 GB");
});

test("panels resize with a pointer drag", async ({ page }) => {
  await page.goto("/#/components/resizable");
  const handle = page.locator("[data-legacy-example] .library-preview").first().getByRole("separator", { name: "Resize project panels" });
  await handle.scrollIntoViewIfNeeded();
  const before = Number(await handle.getAttribute("aria-valuenow"));
  const bounds = (await handle.boundingBox())!;
  await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
  await page.mouse.down();
  await page.mouse.move(bounds.x + bounds.width / 2 + 80, bounds.y + bounds.height / 2, { steps: 8 });
  await page.mouse.up();
  await expect.poll(async () => Number(await handle.getAttribute("aria-valuenow"))).toBeGreaterThan(before);
});
