import { expect, test } from "@playwright/test";
import { libraryFamilies } from "../src/lib/distribution";
import { components } from "../src/lib/catalog";

test("homepage is a readable product website and the library has its own sidebar", async ({ page }) => {
  const failed: string[] = [];
  page.on("pageerror", error => failed.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await expect(page.locator(".sidebar")).toHaveCount(0);
  await page.evaluate(() => document.fonts.ready);
  await expect.poll(() => page.evaluate(() => document.fonts.check('16px "Google Sans Flex"'))).toBe(true);
  await expect.poll(() => page.evaluate(() => document.fonts.check('600 48px "Onest"'))).toBe(true);
  expect(await page.locator("body").evaluate(element => parseFloat(getComputedStyle(element).fontSize))).toBeGreaterThanOrEqual(16);
  await expect(page.locator(".home-hero")).toContainText(`${components.length} component families`);
  await expect(page.getByRole("heading", { name: "Build with Hulmio.", exact: true })).toBeVisible();
  await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Components", exact: true }).click();
  await expect(page.locator(".sidebar")).toBeVisible();
  await expect(page.locator(".sidebar .component-nav-link")).toHaveCount(components.length);
  await page.locator('.sidebar a[href="#/components/button"]').click();
  await expect(page.locator("main h1")).toHaveText("Button");
  await expect(page.locator('.sidebar a[href="#/components/button"]')).toHaveAttribute("aria-current", "page");
  await page.getByRole("link", { name: "Hulmio home", exact: true }).click();
  await expect(page.locator(".sidebar")).toHaveCount(0);
  await page.evaluate(() => { (document.activeElement as HTMLElement)?.blur(); window.scrollTo({ top: 0, behavior: "instant" }); });
  await page.screenshot({ path: "artifacts/hulmio-home-desktop.png", fullPage: true, animations: "disabled" });
  expect(failed).toEqual([]);
});

test("button variants, sizes, shapes, and states remain visible with copyable source", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#/components/button");
  await expect(page.locator(".library-button-design")).toHaveCount(libraryFamilies.button.designs.length);
  const variants = page.locator('[data-example-id="button--variants"]');
  for (const name of ["Primary", "Secondary", "Outline", "Ghost", "Link", "Destructive", "Soft", "Success", "Warning", "Information"]) await expect(variants.getByRole("button", { name, exact: true })).toBeVisible();
  const sizes = page.locator('[data-example-id="button--sizes"]');
  await expect(sizes.locator(".library-source-example button")).toHaveCount(5);
  await expect(page.getByRole("button", { name: "Saving changes", exact: true })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Saving changes", exact: true })).toHaveAttribute("aria-busy", "true");
  await variants.getByRole("button", { name: "Copy code", exact: true }).click();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toContain('import { Button } from "hulmio-ui"');
  expect(copied).toContain('"destructive"');
  await page.screenshot({ path: "artifacts/redesign/button-desktop.png", fullPage: true, animations: "disabled" });
});

test("mobile homepage and library navigation retain focus and fit the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator(".sidebar")).not.toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  await page.screenshot({ path: "artifacts/hulmio-home-mobile.png", fullPage: true, animations: "disabled" });
  const trigger = page.getByRole("button", { name: "Open navigation", exact: true });
  await trigger.click();
  const navigation = page.getByRole("dialog", { name: "Main navigation" });
  await expect(navigation).toBeVisible();
  await navigation.getByRole("link", { name: "Button", exact: true }).click();
  await expect(page).toHaveURL(/components\/button/);
  await expect(page.locator(".sidebar")).toHaveAttribute("inert");
  await expect(page.locator(".library-button-design")).toHaveCount(libraryFamilies.button.designs.length);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({ path: "artifacts/hulmio-button-designs-mobile.png", fullPage: true, animations: "disabled" });
  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});

test("library overlays cover the navbar and retain readable mobile text", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#/components/drawer");
  const trigger = page.locator(".library-design").getByRole("button", { name: "Open drawer", exact: true });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Project details", exact: true });
  await expect(dialog).toBeVisible();
  expect(await dialog.evaluate(element => parseFloat(getComputedStyle(element).fontSize))).toBeGreaterThanOrEqual(15);
  expect(await dialog.locator(".dialog-description").evaluate(element => parseFloat(getComputedStyle(element).fontSize))).toBeGreaterThanOrEqual(14);
  expect(await page.evaluate(() => {
    const header = document.querySelector(".site-navbar")!;
    const target = document.elementFromPoint(20, 20);
    return target != null && !header.contains(target);
  })).toBe(true);
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});
