import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";
// @ts-expect-error The example builder is a deliberately dependency-free ES module.
import { buildDomain } from "../scripts/parity/forms.mjs";

test("date and time segments retain controlled keyboard editing with unique IDs", async ({ page }) => {
  await page.goto("/#/components/date-field");
  const date = page.locator('[data-example-id="date-field--controlled"]');
  await date.locator('[data-type="day"]').press("ArrowUp");
  await expect(date.locator(".library-preview output")).toHaveText("2026-11-07");
  await page.goto("/#/components/time-field");
  const time = page.locator('[data-example-id="time-field--controlled"]');
  await time.locator('[data-type="minute"]').press("ArrowUp");
  await expect(time.locator(".library-preview output")).toHaveText(/^09:31(?::00)?$/);
});

test("form and color examples cover their complete pinned reference", () => {
  const snapshot = JSON.parse(readFileSync("docs/research/heroui-v3.2.7-coverage.json", "utf8"));
  const definitions = buildDomain(snapshot);
  const ids = new Set(definitions.map((item: { referenceId: string }) => item.referenceId));
  expect(ids.size).toBe(32);
  for (const reference of snapshot.heroComponents.filter((item: { id: string }) => ids.has(item.id))) {
    for (const section of [...reference.requiredSections, { title: "Customization" }]) {
      const matches = definitions.filter((item: { referenceId: string; title: string }) => item.referenceId === reference.id && item.title === section.title);
      expect(matches, `${reference.id}: ${section.title}`).toHaveLength(1);
      expect(matches[0].body.trim().length).toBeGreaterThan(30);
    }
  }
});

test("color sliders change channels with the keyboard", async ({ page }) => {
  await page.goto("/#/components/color-slider");
  const slider = page.getByRole("slider").first();
  const before = await slider.inputValue();
  await slider.focus();
  await slider.press("ArrowRight");
  await expect(slider).not.toHaveValue(before);
});

test("virtualized autocomplete mounts a bounded collection and can reach its end", async ({ page }) => {
  await page.goto("/#/components/autocomplete?example=autocomplete--virtualization");
  const scope = page.locator('[data-example-id="autocomplete--virtualization"]');
  const input = scope.getByRole("combobox");
  await input.click();
  await input.press("ArrowDown");
  const list = page.getByRole("listbox").last();
  await expect(list).toBeVisible();
  expect(await list.getByRole("option").count()).toBeLessThan(100);
  await input.fill("Location 999");
  await expect(list.getByRole("option", { name: "Location 999", exact: true })).toBeVisible();
});

test("input reset restores its default and respects a cancelled reset", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(async () => {
    const { default: React } = await import("/node_modules/.vite-playwright/deps/react.js");
    const { default: { createRoot } } = await import("/node_modules/.vite-playwright/deps/react-dom_client.js");
    const { Input } = await import("/packages/ui/src/Input.tsx");
    const container = document.createElement("div");
    document.body.append(container);
    createRoot(container).render(React.createElement("form", { id: "reset-contract" }, React.createElement(Input, { label: "Reset name", defaultValue: "Hulmio", name: "name" }), React.createElement("button", { type: "reset" }, "Reset field")));
  });
  const input = page.getByRole("textbox", { name: "Reset name", exact: true });
  await input.fill("Edited name");
  await page.getByRole("button", { name: "Reset field", exact: true }).click();
  await expect(input).toHaveValue("Hulmio");
  await input.fill("Keep this edit");
  await page.locator("#reset-contract").evaluate(form => form.addEventListener("reset", event => event.preventDefault()));
  await page.getByRole("button", { name: "Reset field", exact: true }).click();
  await expect(input).toHaveValue("Keep this edit");
});
