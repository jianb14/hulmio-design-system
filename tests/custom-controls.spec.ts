import { expect, test } from "@playwright/test";

test("combobox filters options and commits a keyboard selection", async ({ page }) => {
  await page.goto("/#/components/combobox");
  const control = page.locator('[data-legacy-example] [data-hulmio-ui="combobox"]').first();
  const input = control.getByRole("combobox");
  await input.scrollIntoViewIfNeeded();
  await input.fill("Ceb");
  await expect(page.getByRole("option", { name: "Cebu", exact: true })).toBeVisible();
  await expect(page.getByRole("option", { name: "Manila", exact: true })).toHaveCount(0);
  await input.press("ArrowDown");
  await input.press("Enter");
  await expect(input).toHaveValue("Cebu");
  await expect(page.getByRole("listbox")).toHaveCount(0);
});

test("multi-select supports search, independent selection and removable chips", async ({ page }) => {
  await page.goto("/#/components/multi-select");
  const control = page.locator('[data-legacy-example] [data-hulmio-ui="multi-select"]').first();
  await expect(control.getByRole("button", { name: "Remove Design", exact: true })).toBeVisible();
  await control.getByRole("combobox").fill("Code");
  await page.getByRole("option", { name: "Code", exact: true }).click();
  await page.keyboard.press("Escape");
  await expect(control.getByRole("button", { name: "Remove Code", exact: true })).toBeVisible();
  await control.getByRole("button", { name: "Remove Design", exact: true }).click();
  await expect(control.getByRole("button", { name: "Remove Design", exact: true })).toHaveCount(0);
  expect(await control.locator("select").evaluate((select: HTMLSelectElement) => Array.from(select.selectedOptions, option => option.value))).toEqual(["code"]);
});

test("date picker opens a keyboard accessible calendar and writes an ISO date", async ({ page }) => {
  await page.goto("/#/components/calendar");
  const control = page.locator('[data-legacy-example] [data-hulmio-ui="date-picker"]').first();
  await control.getByRole("button", { name: /^Open calendar/ }).click();
  const calendar = page.locator('[data-hulmio-ui="date-popover"]');
  await expect(calendar.getByRole("grid")).toBeVisible();
  await calendar.locator('.h-rich-day:not([data-disabled]):not([data-outside-month])').filter({ hasText: /^15$/ }).click();
  await expect(calendar).toHaveCount(0);
  await expect(control.locator('input[data-date-value]')).toHaveValue(/^\d{4}-\d{2}-15$/);
});

test("sliders expose keyboard adjustment and number steppers keep native bounds", async ({ page }) => {
  await page.goto("/#/components/slider");
  const slider = page.locator('[data-legacy-example] [data-hulmio-ui="slider"]').first().getByRole("slider").first();
  const before = Number(await slider.inputValue());
  await slider.focus();
  await slider.press("ArrowRight");
  await expect(slider).toHaveValue(String(before + 5));
  await page.goto("/#/components/number-input");
  const control = page.locator('[data-legacy-example] [data-hulmio-ui="number-input"]').first();
  await control.getByRole("button", { name: "Increase value", exact: true }).click();
  await expect(control.getByRole("spinbutton")).toHaveValue("5");
  await control.getByRole("spinbutton").fill("50");
  await expect(control.getByRole("button", { name: "Increase value", exact: true })).toBeDisabled();
});

test("OTP accepts a complete pasted code and renders individual slots", async ({ page }) => {
  await page.goto("/#/components/otp-input");
  const control = page.locator('[data-legacy-example] [data-hulmio-ui="otp-input"]').first();
  const input = control.locator("input[data-input-otp]");
  await input.focus();
  await input.evaluate(element => {
    const data = new DataTransfer();
    data.setData("text/plain", "123 456");
    element.dispatchEvent(new ClipboardEvent("paste", { clipboardData: data, bubbles: true, cancelable: true }));
  });
  await expect(input).toHaveValue("123456");
  await expect(control.locator(".h-rich-otp-slot")).toHaveText(["1", "2", "3", "4", "5", "6"]);
});

test("file selection validates type and size, lists local files and supports removal", async ({ page }) => {
  await page.goto("/#/components/upload");
  const control = page.locator('[data-legacy-example] [data-hulmio-ui="file-upload"]').first();
  const input = control.locator('input[type="file"]');
  await input.setInputFiles({ name: "notes.txt", mimeType: "text/plain", buffer: Buffer.from("notes") });
  await expect(control.getByRole("alert")).toContainText("not an accepted file type");
  await input.setInputFiles({ name: "photo.png", mimeType: "image/png", buffer: Buffer.from([137, 80, 78, 71]) });
  await expect(control.getByRole("button", { name: "Remove photo.png", exact: true })).toBeVisible();
  await expect(control.getByRole("alert")).toHaveCount(0);
  await control.getByRole("button", { name: "Remove photo.png", exact: true }).click();
  expect(await input.evaluate((element: HTMLInputElement) => element.files?.length)).toBe(0);
});

test("touch users can select options and choose a calendar date", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  try {
    await page.goto("/#/components/combobox");
    const city = page.locator('[data-legacy-example] [data-hulmio-ui="combobox"]').first();
    await city.getByRole("button", { name: "Show options", exact: true }).tap();
    // React Aria reveals touch popovers after the on-screen keyboard settles.
    await expect(page.locator('[data-hulmio-ui="control-popover"]')).toHaveCSS("opacity", "1");
    await page.getByRole("option", { name: "Cebu", exact: true }).tap();
    await expect(city.getByRole("combobox")).toHaveValue("Cebu");
    await page.goto("/#/components/calendar");
    const date = page.locator('[data-legacy-example] [data-hulmio-ui="date-picker"]').first();
    await date.getByRole("button", { name: /^Open calendar/ }).tap();
    await expect(page.locator('[data-hulmio-ui="date-popover"]')).toHaveCSS("opacity", "1");
    await page.locator('[data-hulmio-ui="date-popover"] .h-rich-day:not([data-disabled]):not([data-outside-month])').filter({ hasText: /^15$/ }).tap();
    await expect(date.locator("input[data-date-value]")).toHaveValue(/^\d{4}-\d{2}-15$/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  } finally {
    await context.close();
  }
});
