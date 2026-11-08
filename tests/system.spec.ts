import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { components } from "../src/lib/catalog";

test("catalog search, categories, and clear control stay in sync", async ({
  page,
}) => {
  await page.goto("/#/components");
  await expect(page.locator(".component-catalog-card")).toHaveCount(
    components.length,
  );
  const search = page.getByRole("searchbox", { name: "Search components" });
  await search.fill("slider");
  await expect(page.locator(".component-catalog-card")).toHaveCount(3);
  for (const name of ["Slider", "Color picker", "Color slider"]) await expect(page.locator(".component-catalog-card").getByRole("heading", { name, exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Clear input", exact: true }).click();
  await expect(search).toHaveValue("");
  await expect(page.locator(".component-catalog-card")).toHaveCount(
    components.length,
  );
  await page
    .locator(".category-filters")
    .getByRole("link", { name: /^Forms/ })
    .click();
  await expect(page.locator(".component-catalog-card")).toHaveCount(
    components.filter((c) => c.category === "Forms").length,
  );
  await search.fill("nothingmatches123");
  await expect(page.getByText("No components found.")).toBeVisible();
});

test("component variants and native form validation work", async ({ page }) => {
  await page.goto("/#/components/button");
  await expect(page.locator('[data-example-id="button--variants"] button[data-variant="destructive"]')).toBeVisible();
  await expect(page.getByRole("button", { name: "Saving changes", exact: true })).toHaveAttribute("aria-busy", "true");
  await page.goto("/#/components/form");
  const form = page.locator('[data-example-id="form--legacy-native-form"] form');
  await form.getByRole("button", { name: "Submit example", exact: true }).click();
  await expect(form.getByRole("textbox", { name: "Your name", exact: true })).toBeFocused();
  await form.getByRole("textbox", { name: "Your name", exact: true }).fill("Alex Morgan");
  await form.getByRole("textbox", { name: "Email address", exact: true }).fill("alex@example.com");
  await form.getByRole("button", { name: "Submit example", exact: true }).click();
  await expect(form.getByRole("status")).toHaveText("Form submitted.");
});

test("package overlays open, dismiss, and retain selection", async ({ page }) => {
  await page.goto("/#/components/dialog");
  const trigger = page.getByRole("button", { name: "Open dialog", exact: true });
  await trigger.click();
  await expect(page.getByRole("dialog", { name: "A focused moment", exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await page.goto("/#/components/dropdown");
  const actions = page.locator("[data-legacy-example]").getByRole("button", { name: "Project actions", exact: true });
  await actions.click();
  await page.getByRole("menuitemcheckbox", { name: "Show completed", exact: true }).click();
  await actions.click();
  await expect(page.getByRole("menuitemcheckbox", { name: "Show completed", exact: true })).toHaveAttribute("aria-checked", "true");
  await page.keyboard.press("Escape");
});

test("package tables support filtering, selection, editing, and pagination", async ({ page }) => {
  await page.goto("/#/components/table");
  const demo = page.locator('[data-example-id="table--legacy-interactive-data-table"] .library-live-example');
  await demo.getByRole("checkbox", { name: "Select row 1", exact: true }).check();
  await expect(demo.locator(".h-table-pagination [role=status]")).toContainText("1 selected");
  await demo.locator('.h-table-tools input').fill("Review");
  await expect(demo.getByRole("textbox", { name: "Edit Task for row 1", exact: true })).toBeVisible();
  await demo.getByRole("textbox", { name: "Edit Task for row 1", exact: true }).fill("Review complete");
  await demo.getByRole("textbox", { name: "Edit Task for row 1", exact: true }).press("Enter");
  await expect(demo.getByRole("textbox", { name: "Edit Task for row 1", exact: true })).toHaveValue("Review complete");
  await demo.locator('.h-table-tools input').fill("");
  await demo.getByRole("button", { name: "Next table page", exact: true }).click();
  await expect(demo.getByRole("checkbox", { name: "Select row 4", exact: true })).toBeVisible();
});

test("keyboard search, tab navigation, themes, and local settings work", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Control+k");
  const search = page.getByRole("combobox", {
    name: "Search the design gallery",
  });
  await expect(search).toBeFocused();
  await search.fill("switch");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/components\/switch/);
  await expect(page.locator("[data-legacy-example]").getByRole("switch", { name: "Enable previews", exact: true })).not.toBeChecked();
  await expect(page.locator("[data-legacy-example]").getByRole("switch", { name: "Email notifications", exact: true })).toBeChecked();
  await page.goto("/#/components/tabs");
  const preview = page.locator('[data-example-id="tabs--legacy-tabs"] .library-live-tabs');
  await preview.getByRole("tab", { name: "Overview", exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    preview.getByRole("tab", { name: "Details", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await expect(preview.getByRole("tabpanel")).toContainText(
    "A closer look",
  );
  await page.getByRole("button", { name: "Choose theme", exact: true }).click();
  await page.getByRole("menuitemradio", { name: "Dark", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Choose theme", exact: true }).click();
  await page
    .getByRole("menuitemradio", { name: "System", exact: true })
    .click();
  await page.emulateMedia({ colorScheme: "light" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.goto("/#/patterns");
  await page.getByRole("tab", { name: "Settings", exact: true }).click();
  await page
    .getByRole("textbox", { name: "Workspace name", exact: true })
    .fill("My thoughtful team");
  await page.getByRole("button", { name: "Save changes" }).click();
  await page.reload();
  await page.getByRole("tab", { name: "Settings", exact: true }).click();
  await expect(
    page.getByRole("textbox", { name: "Workspace name", exact: true }),
  ).toHaveValue("My thoughtful team");
});

test("mobile navigation is focus-managed and closes on navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".sidebar")).toHaveAttribute("inert");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.click();
  const drawer = page.getByRole("dialog", { name: "Main navigation" });
  await expect(drawer).toBeVisible();
  expect(
    await page.evaluate(() => !!document.activeElement?.closest(".sidebar")),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await trigger.click();
  await drawer.getByRole("link", { name: "Colors", exact: true }).click();
  await expect(page).toHaveURL(/colors/);
  await expect(page.locator(".sidebar")).toHaveAttribute("inert");
});

test("gallery previews and the usage guide render on desktop and mobile", async ({
  page,
}) => {
  test.setTimeout(360_000);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const routes = [
    "overview",
    "branding",
    "colors",
    "typography",
    "spacing",
    "effects",
    "components",
    "patterns",
    "using-hulmio",
    ...components.map((c) => `components/${c.id}`),
  ];
  const headings: Record<string, string> = { overview: "Build withHulmio.", branding: "Give good ideas a shape.", colors: "A considered palette.", typography: "Typography", spacing: "A little room makes a difference.", effects: "Details that make it feel right.", components: "Components", patterns: "Familiar patterns. Fresh possibilities.", "using-hulmio": "Take the good parts with you." };
  await page.goto("/");
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.evaluate(value => { location.hash = `/${value}`; }, route);
      const component = components.find(entry => route === `components/${entry.id}`);
      await expect(page.locator("main h1")).toHaveText(component?.name ?? headings[route]);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth > window.innerWidth + 1,
        ),
        `${route} at ${width}px overflows`,
      ).toBe(false);
      const brokenReferences = await page
        // Closed Radix popups may reference content that is not mounted yet.
        .locator('[aria-controls]:not([aria-expanded="false"])')
        .evaluateAll((elements) =>
          elements.flatMap((el) =>
            (el.getAttribute("aria-controls") || "")
              .split(" ")
              .filter((id) => !document.getElementById(id)),
          ),
        );
      expect(brokenReferences, `${route} has broken aria-controls`).toEqual([]);
      if (route === "overview" && width === 1440) await expect(page.locator(".sidebar")).toHaveCount(0);
      else await expect(page.locator('.sidebar a[href="#/using-hulmio"]')).toHaveCount(1);
      await expect(
        page.getByRole("button", { name: "View code", exact: true }),
      ).toHaveCount(0);
      if (route.startsWith("components/")) {
        await expect(page.locator(".library-design").first()).toBeVisible();
        await expect(page.locator(".library-code pre").first()).toContainText('from "hulmio-ui"');
      }
    }
  }
  expect(errors).toEqual([]);
});

test("usage guide shows the local install path and working package components", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#/using-hulmio");
  await expect(page.getByRole("note")).toContainText("Not published to npm");
  await expect(page.locator(".usage-step")).toHaveCount(4);
  await page.getByRole("button", { name: "Copy code", exact: true }).first().click();
  await expect(page.getByRole("button", { name: "Copy code", exact: true }).first()).toContainText("Copied");
  await expect(page.locator(".toast")).toHaveCount(0);
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain("npm run pack:ui");
  const preview = page.locator(".usage-live");
  await preview.getByLabel("Email", { exact: true }).fill("hello@example.com");
  await preview.getByRole("button", { name: "Clear input", exact: true }).click();
  await expect(preview.getByLabel("Email", { exact: true })).toHaveValue("");
  const trigger = preview.getByRole("button", { name: "Open example" });
  await trigger.click();
  const modal = page.getByRole("dialog", { name: "Your first Hulmio modal", exact: true });
  await expect(modal).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(modal).toBeHidden();
  await expect(trigger).toBeFocused();
  await page.evaluate(() => { (document.activeElement as HTMLElement)?.blur(); window.scrollTo({ top: 0, behavior: "instant" }); });
  await page.screenshot({ path: "artifacts/using-hulmio-desktop.png", fullPage: true, animations: "disabled" });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(".sidebar")).toHaveAttribute("inert");
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({ path: "artifacts/using-hulmio-mobile.png", fullPage: true, animations: "disabled" });
  await page.goto("/#/components/button");
  await expect(page.locator(".library-page-tools").getByRole("link", { name: "Installation" })).toHaveAttribute("href", "#/using-hulmio");
  await page.goto("/#/components/table");
  await expect(page.locator(".library-page-tools").getByRole("link", { name: "Installation" })).toHaveAttribute("href", "#/using-hulmio");
});

test("Hulmio branding, favicon, downloaded mark, and existing preferences stay in sync", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("forma-theme", "dark");
    localStorage.setItem("forma-workspace", "My saved workspace");
    localStorage.setItem("forma-notifications", "false");
  });
  await page.goto("/#/branding");
  await expect(page).toHaveTitle(/Hulmio UI Library$/);
  await expect(page.locator(".site-wordmark .brand")).toHaveText("hulmio.");
  await expect(page.locator("html")).toHaveAttribute("data-hulmio-theme", "dark");
  expect(await page.evaluate(() => localStorage.getItem("hulmio-theme"))).toBe("dark");
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute("href", "/hulmio-icon.svg");
  const faviconResponse = await page.request.get("/hulmio-icon.svg");
  expect(faviconResponse.ok()).toBe(true);
  const faviconText = await faviconResponse.text();
  const markPath = await page.locator(".site-wordmark .brand path").getAttribute("d");
  expect(faviconText).toContain(`<title>Hulmio</title>`);
  expect(faviconText).toContain(`d="${markPath}"`);
  const compactIcon = page.getByAltText("Hulmio favicon at 16 pixels", { exact: true });
  await expect(compactIcon).toBeVisible();
  expect(await compactIcon.evaluate(element => (element as HTMLImageElement).complete && (element as HTMLImageElement).naturalWidth > 0)).toBe(true);
  const downloadEvent = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download mark", exact: true }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe("hulmio-brand-mark.svg");
  await download.saveAs("artifacts/hulmio-brand-mark.svg");
  expect(await readFile("artifacts/hulmio-brand-mark.svg", "utf8")).toContain(`d="${markPath}"`);
  await page.getByRole("button", { name: "Choose theme", exact: true }).click();
  await page.getByRole("menuitemradio", { name: "Light", exact: true }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-hulmio-theme", "light");
  await page.evaluate(() => { (document.activeElement as HTMLElement)?.blur(); window.scrollTo({ top: 0, behavior: "instant" }); });
  await page.screenshot({ path: "artifacts/hulmio-branding-desktop.png", fullPage: true, animations: "disabled" });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(".sidebar")).toHaveAttribute("inert");
  await page.screenshot({ path: "artifacts/hulmio-branding-mobile.png", fullPage: true, animations: "disabled" });
  await page.goto("/#/patterns");
  await page.getByRole("tab", { name: "Settings", exact: true }).click();
  await expect(page.getByRole("textbox", { name: "Workspace name", exact: true })).toHaveValue("My saved workspace");
  await expect(page.getByRole("switch", { name: "Email notifications", exact: true })).not.toBeChecked();
});
