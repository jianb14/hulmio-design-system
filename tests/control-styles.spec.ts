import { libraryFamilies } from "../src/lib/distribution";
import { expect, test } from "@playwright/test";

test("text fields share a separated focus ring and clear it on blur", async ({ page }) => {
  for (const [route, selector, shellSelector] of [
    ["input", '.library-live-input input:not([aria-invalid="true"])', ".input-shell"],
    ["textarea", ".library-live-textarea textarea", ""],
    ["tag-input", ".library-live-tag-input .h-tag-entry", ".h-tag-shell"],
    ["input-group", ".library-live-input-group input", ".h-input-group"],
    ["color-picker", ".library-live-color-picker input", ""],
    ["field", ".library-live-field input", ""],
    ["label", ".library-live-label input", ""],
    ["table", '.library-live-table input[type="search"]', ""],
    ["table", ".library-live-table .h-table-edit", ""],
  ]) {
    await page.goto(`/#/components/${route}`);
    const input = page.locator(`[data-legacy-example] ${selector}`).first();
    await expect(input).toBeVisible({ timeout: 20000 });
    await input.scrollIntoViewIfNeeded();
    await input.focus();
    await expect.poll(() => input.evaluate((el, shell) => {
      const outer = shell ? el.closest(shell)! : el;
      const css = getComputedStyle(outer);
      return { width: css.outlineWidth, offset: css.outlineOffset, shadow: css.boxShadow, inner: outer === el ? "none" : getComputedStyle(el).outlineStyle };
    }, shellSelector), { message: route }).toEqual({ width: "2px", offset: "2px", shadow: "none", inner: "none" });
    await input.evaluate(el => (el as HTMLElement).blur());
    await expect.poll(() => input.evaluate((el, shell) => getComputedStyle(shell ? el.closest(shell)! : el).outlineStyle, shellSelector), { message: route }).toBe("none");
  }
});

test("pressed actions have no ring while keyboard focus remains visible", async ({ page }) => {
  await page.goto("/#/components/button");
  const button = page.locator(".library-source-example button").first();
  await button.focus();
  await expect(button).toHaveCSS("outline-width", "2px");
  await page.keyboard.down("Space");
  await expect(button).toHaveCSS("outline-style", "none");
  await page.keyboard.up("Space");
  await expect(button).toHaveCSS("outline-width", "2px");
  await page.locator("main h1").click();
  await button.click();
  await expect(button).toHaveCSS("outline-style", "none");
  await page.goto("/#/components/tabs");
  const tab = page.getByRole("tab", { name: "Details", exact: true });
  await tab.click();
  await expect(tab).toHaveAttribute("aria-selected", "true");
  await expect(tab).toHaveCSS("outline-style", "none");
});

test("component galleries expose useful variants without decorative presets", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("combobox", { name: "Button design", exact: true })).toHaveCount(0);
  for (const [route, count] of [["button", 4], ["input", 8], ["badge", 2], ["card", 3], ["tabs", 4]] as const) {
    await page.goto(`/#/components/${route}`);
    await expect(page.locator(".library-design"), route).toHaveCount(libraryFamilies[route].designs.length);
    await expect(page.locator(".library-references"), route).toHaveCount(0);
  }
});
