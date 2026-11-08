import { expect, test } from "@playwright/test";

const badgeDots = ".h-badge-dot, .badge > .status-dot";

test("badge previews and copied examples use text labels without leading dots", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#/components/badge");
  await expect(page.locator(".library-preview .h-badge").first()).toBeVisible();
  await expect(page.locator('[data-legacy-example] ' + badgeDots)).toHaveCount(0);
  for (const example of await page.locator("[data-legacy-example]").all()) {
    await example.getByRole("button", { name: "Copy code", exact: true }).click();
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    expect(copied).toContain('from "hulmio-ui"');
    expect(copied).toContain("<Badge");
    expect(copied).not.toMatch(/<Badge\b[^>]*\bdot\b/);
  }
});

test("home and pattern pages keep badge labels free of decorative dots", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".h-badge").first()).toBeVisible();
  await expect(page.locator(badgeDots)).toHaveCount(0);
  await page.goto("/#/patterns");
  for (const name of ["Authentication", "Dashboard", "Settings", "System pages"]) {
    await page.getByRole("tab", { name, exact: true }).click();
    await expect(page.getByRole("tabpanel", { name, exact: true })).toBeVisible();
    await expect(page.locator(badgeDots)).toHaveCount(0);
  }
});

test("badges inside detail lists and hover cards stay dot-free in previews and source", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  for (const id of ["data-list", "hover-card"]) {
    await page.goto(`/#/components/${id}`);
    if (id === "hover-card") await page.locator("[data-legacy-example] .library-preview").first().getByRole("link", { name: "Hulmio Studio", exact: true }).hover();
    await expect(page.locator(".h-badge").first()).toBeVisible();
    await expect(page.locator(badgeDots)).toHaveCount(0);
    for (const example of await page.locator("[data-legacy-example]").all()) {
      await example.getByRole("button", { name: "Copy code", exact: true }).click();
      const copied = await page.evaluate(() => navigator.clipboard.readText());
      expect(copied).toContain('from "hulmio-ui"');
      expect(copied).not.toMatch(/<Badge\b[^>]*\bdot\b/);
    }
  }
});

test("badge catalog artwork shows a centered text label without a leading circle", async ({ page }) => {
  await page.goto("/#/components");
  const artwork = page.locator('[data-artwork="badge"]');
  await expect(artwork).toBeVisible();
  await expect(artwork.locator("text")).toHaveText("Available");
  await expect(artwork.locator("circle")).toHaveCount(0);
});
