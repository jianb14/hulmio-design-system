import { expect, test } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

test("development output files do not reload mounted examples", async ({ page }) => {
  await page.goto("/#/components/button");
  const basic = page.locator('[data-example-id="button--basic"]');
  await basic.getByRole("button", { name: "Click me", exact: true }).click();
  await expect(basic.getByRole("status")).toHaveText("Pressed 1 time.");
  const reloads: string[] = [];
  page.on("framenavigated", frame => { if (frame === page.mainFrame()) reloads.push(frame.url()); });
  await mkdir("artifacts/parity/hmr-probe", { recursive: true });
  await writeFile("artifacts/parity/hmr-probe/index.html", `<div class="h-[123px]">${Date.now()}</div>`);
  await writeFile("artifacts/parity/hmr-probe/tsconfig.json", JSON.stringify({ compilerOptions: { strict: true } }));
  // File watcher events arrive asynchronously, independently of the UI state.
  await page.waitForTimeout(1000);
  expect(reloads).toEqual([]);
  await expect(basic.getByRole("status")).toHaveText("Pressed 1 time.");
});

test("loading action prevents duplicate presses and recovers with its label", async ({ page }) => {
  await page.goto("/#/components/button");
  const example = page.locator('[data-example-id="button--loading-state"]');
  const action = example.getByRole("button", { name: "Upload file", exact: true });
  await action.click();
  await expect(example.getByRole("button", { name: "Uploading…", exact: true })).toBeDisabled();
  await expect(example.locator('[aria-busy="true"]')).toBeVisible();
  await expect(action).toBeEnabled();
  await expect(example.getByRole("status")).toHaveText("File uploaded.");
});

test("button examples copy the source that renders and section links retain demo state", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#/components/button");
  const basic = page.locator('[data-example-id="button--basic"]');
  await basic.getByRole("button", { name: "Click me", exact: true }).click();
  await expect(basic.getByRole("status")).toHaveText("Pressed 1 time.");
  await page.getByRole("navigation", { name: "On this page", exact: true }).getByRole("link", { name: "Loading State", exact: true }).first().click();
  await expect(page).toHaveURL(/components\/button\?example=button--loading-state/);
  await expect(basic.getByRole("status")).toHaveText("Pressed 1 time.");
  await page.goBack();
  await expect(basic.getByRole("status")).toHaveText("Pressed 1 time.");
  await basic.getByRole("button", { name: "Copy code", exact: true }).click();
  const source = await page.evaluate(() => navigator.clipboard.readText());
  expect(source).toContain('from "hulmio-ui"');
  expect(source).toContain("setCount");
  expect(source).toContain("Click me");
});

test("disabled action groups cannot activate and render callbacks expose real state", async ({ page }) => {
  await page.goto("/#/components/button-group");
  const disabled = page.locator('[data-example-id="button-group--disabled-state"]');
  const buttons = disabled.locator('.library-preview [data-hulmio-ui="button"]');
  await expect.poll(() => buttons.count(), { timeout: 30000 }).toBeGreaterThan(1);
  for (const button of await buttons.all()) await expect(button).toBeDisabled();
  await page.goto("/#/components/button");
  const render = page.locator('[data-example-id="button--render-function"]');
  await render.getByRole("button", { name: "Hold to preview", exact: true }).focus();
  await page.keyboard.down("Space");
  await expect(render.getByRole("button", { name: "Pressed", exact: true })).toBeVisible();
  await page.keyboard.up("Space");
});
