import { expect, test } from "@playwright/test";

test("component examples keep preview visible and copy full code quietly", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#/components/button");
  await expect(page.locator(".library-breadcrumb")).toHaveCount(0);
  const example = page.locator('[data-example-id="button--variants"]');
  await example.getByRole("button", { name: "Primary", exact: true }).click();
  await expect(page.locator(".toast")).toHaveCount(0);
  await expect(example.locator(".library-code")).not.toBeVisible();
  await expect(example.locator(".example-code-excerpt")).toBeVisible();
  await example.getByRole("button", { name: "Expand code", exact: true }).click();
  await expect(example.locator(".library-code")).toBeVisible();
  await expect(example.getByRole("button", { name: "Primary", exact: true })).toBeVisible();
  await example.getByRole("button", { name: "Copy code", exact: true }).click();
  await expect(example.getByRole("button", { name: "Copy code", exact: true })).toContainText("Copied");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain('"destructive"');
  await expect(page.locator(".toast")).toHaveCount(0);
  await example.getByRole("button", { name: "Collapse code", exact: true }).click();
  await expect(example.locator(".library-code")).not.toBeVisible();
});

test("stepper preview starts on the first screen and reset restores its state", async ({ page }) => {
  await page.goto("/#/components/stepper");
  const preview = page.locator(".library-live-stepper").first();
  await expect(preview).toBeInViewport();
  await preview.getByRole("button", { name: /Review/ }).click();
  await expect(preview.locator('button[aria-current="step"]')).toContainText("Review");
  await page.getByRole("button", { name: "Reset examples", exact: true }).click();
  await expect(preview.locator('button[aria-current="step"]')).toContainText("Details");
  await expect(page.locator(".toast")).toHaveCount(0);
});

test("alert dialog requires an explicit choice and returns focus", async ({ page }) => {
  await page.goto("/#/components/alert-dialog");
  const trigger = page.getByRole("button", { name: "Delete project", exact: true });
  await trigger.click();
  const dialog = page.getByRole("alertdialog", { name: "Delete this project?" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Cancel", exact: true })).toBeFocused();
  await page.mouse.click(8, 8);
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(page.locator(".library-preview").getByText("Project deleted.", { exact: true })).toHaveCount(0);
  await trigger.click();
  await dialog.getByRole("button", { name: "Delete", exact: true }).click();
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(page.locator(".library-preview").getByText("Project deleted.", { exact: true })).toBeVisible();
  await expect(page.locator(".toast")).toHaveCount(0);
});

test("new input, item and table primitives expose useful native semantics", async ({ page }) => {
  await page.goto("/#/components/input-group");
  const input = page.getByRole("searchbox", { name: "Search projects", exact: true });
  await input.fill("Design");
  await input.press("Enter");
  await expect(page.getByRole("status").filter({ hasText: "Results for Design" })).toBeVisible();
  await page.goto("/#/components/item");
  await expect(page.getByRole("list", { name: "Project files" }).getByRole("listitem")).toHaveCount(2);
  await expect(page.locator('[data-example-id="item--legacy-project-files"]').getByRole("link", { name: "Open", exact: true })).toHaveAttribute("href", "#/using-hulmio");
  await page.goto("/#/components/simple-table");
  const table = page.getByRole("table", { name: "Recent invoices" });
  await expect(table.getByRole("columnheader")).toHaveCount(3);
  await expect(table.getByRole("rowheader")).toHaveCount(3);
  await expect(table.getByRole("cell", { name: "$250.00", exact: true })).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});
