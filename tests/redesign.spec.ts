import { components } from "../src/lib/catalog";
import { expect, test } from "@playwright/test";

test("input ring follows the theme focus token and consumer override", async ({ page }) => {
  await page.goto("/#/components/input");
  const input = page.locator('[data-example-id="input--basic"] .library-live-input input');
  await expect(input).toBeVisible();
  for (const theme of ["light", "dark"]) {
    await page.evaluate(value => document.documentElement.dataset.hulmioTheme = value, theme);
    await input.focus();
    const colors = await input.evaluate(el => {
      const shell = getComputedStyle(el.parentElement!);
      const probe = document.createElement("span");
      probe.style.color = "var(--hulmio-focus)";
      el.parentElement!.append(probe);
      const expected = getComputedStyle(probe).color;
      probe.remove();
      return { actual: shell.outlineColor, expected, gap: shell.outlineOffset };
    });
    expect(colors.actual, theme).toBe(colors.expected);
    expect(colors.gap).toBe("2px");
  }
  await input.evaluate(el => el.parentElement!.style.setProperty("--hulmio-input-focus", "rgb(0, 90, 180)"));
  await expect.poll(() => input.evaluate(el => getComputedStyle(el.parentElement!).outlineColor)).toBe("rgb(0, 90, 180)");
});

test("examples keep the preview visible while code expands and copies complete source", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#/components/button");
  const section = page.locator('[data-example-id="button--variants"]');
  const expand = section.getByRole("button", { name: "Expand code", exact: true });
  await expect(expand).toHaveAttribute("aria-expanded", "false");
  await expect(section.locator(".example-code-excerpt")).toBeVisible();
  const source = await section.locator(".example-source").boundingBox();
  const button = await expand.boundingBox();
  expect(Math.abs(button!.x + button!.width / 2 - source!.x - source!.width / 2)).toBeLessThan(1);
  expect(button!.y).toBeGreaterThan(source!.y);
  expect(button!.y + button!.height).toBeLessThan(source!.y + source!.height);
  await section.getByRole("button", { name: "Copy code", exact: true }).click();
  const collapsedCopy = await page.evaluate(() => navigator.clipboard.readText());
  expect(collapsedCopy).toContain('"destructive"');
  await expand.click();
  await expect(section.getByRole("button", { name: "Collapse code", exact: true })).toHaveAttribute("aria-expanded", "true");
  await expect(section.locator(".library-preview")).toBeVisible();
  await section.getByRole("button", { name: "Copy code", exact: true }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(collapsedCopy);
});

test("catalog has 104 illustrated entries without live controls in thumbnails", async ({ page }) => {
  await page.goto("/#/components");
  await expect(page.locator(".component-catalog-card")).toHaveCount(components.length);
  await expect(page.locator(".component-catalog-card .component-artwork svg")).toHaveCount(components.length);
  await expect(page.locator(".component-artwork input, .component-artwork button, .component-artwork select")).toHaveCount(0);
});

test("default surfaces and hovered menu rows use the input radius while explicit shapes remain", async ({ page }) => {
  await page.goto("/#/components");
  await expect(page.locator(".site-search")).toHaveCSS("border-radius", "10px");
  await expect(page.locator(".component-catalog-card").first()).toHaveCSS("border-radius", "10px");
  await page.goto("/#/components/input");
  await expect(page.locator('.library-live-input .input-shell').first()).toHaveCSS("border-radius", "10px");
  await page.goto("/#/components/card");
  await expect(page.locator('.library-preview [data-hulmio-ui="card"]').first()).toHaveCSS("border-radius", "10px");
  await page.getByRole("button", { name: "Choose theme", exact: true }).click();
  const row = page.getByRole("menuitemradio", { name: "Light", exact: true });
  await row.hover();
  await expect(row).toHaveCSS("border-radius", "10px");
  await page.keyboard.press("Escape");
  await page.goto("/#/components/button");
  await expect(page.locator('.library-preview button.rounded-none').first()).toHaveCSS("border-radius", "0px");
  await expect(page.locator('.library-preview button.rounded-full').first()).toHaveCSS("border-radius", "9999px");
});

test("homepage presents the library and six focused product sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Build with Hulmio.", exact: true })).toBeVisible();
  await expect(page.locator("[data-home-section]")).toHaveCount(6);
  await expect(page.locator(".home-hero")).toContainText(String(components.length));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});
