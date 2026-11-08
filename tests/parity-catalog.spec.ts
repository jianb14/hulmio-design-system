import { expect, test } from "@playwright/test";
import { libraryFamilies } from "../src/lib/distribution";

test("every component page mounts every source-backed example without runtime errors", async ({ page }) => {
  test.setTimeout(360_000);
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(`${page.url()}: ${error.message}`));
  page.on("console", message => {
    // Missing-image examples intentionally exercise resource failures.
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource:")) errors.push(`${page.url()}: ${message.text()}`);
  });
  await page.goto("/#/components");
  for (const [id, family] of Object.entries(libraryFamilies)) {
    await page.evaluate(value => { location.hash = `/components/${value}`; }, id);
    await expect(page.locator(`[data-example-id="${family.designs[0].id}"]`)).toBeVisible();
    await expect(page.locator("[data-source-example]"), id).toHaveCount(family.designs.length, { timeout: 20_000 });
    expect(errors, id).toEqual([]);
    const brokenLabels = await page.locator("main label[for]").evaluateAll(labels => labels.flatMap(label => {
      const id = label.getAttribute("for");
      return id && document.querySelectorAll(`[id="${CSS.escape(id)}"]`).length !== 1 ? [id] : [];
    }));
    expect(brokenLabels, `${id} has ambiguous labels`).toEqual([]);
    const duplicates = await page.locator("[id]").evaluateAll(elements => {
      const ids = elements.map(element => element.id);
      return [...new Set(ids.filter((value, index) => ids.indexOf(value) !== index))];
    });
    expect(duplicates, `${id} has duplicate DOM IDs`).toEqual([]);
  }
});

test("expanded docs fit desktop, tablet and phone in both themes", async ({ page }) => {
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const theme of ["light", "dark"]) {
      for (const id of ["button", "input", "alert-dialog"]) {
        await page.goto(`/#/components/${id}`);
        await page.evaluate(value => { document.documentElement.dataset.hulmioTheme = value; document.documentElement.dataset.theme = value; }, theme);
        await expect(page.locator("[data-source-example]")).toHaveCount(libraryFamilies[id].designs.length, { timeout: 30000 });
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${id}/${width}/${theme}`).toBe(true);
        await page.screenshot({ path: `artifacts/parity/${id}-${width}-${theme}.png`, animations: "disabled" });
        if (id === "alert-dialog") {
          await page.locator('[data-example-id="alert-dialog--basic"]').getByRole("button", { name: "Open details", exact: true }).click();
          await expect(page.getByRole("alertdialog", { name: "Project details", exact: true })).toBeVisible();
          expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
          await page.screenshot({ path: `artifacts/parity/${id}-${width}-${theme}-open.png`, animations: "disabled" });
          await page.keyboard.press("Escape");
        }
      }
    }
  }
});
