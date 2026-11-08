import { expect, test } from "@playwright/test";

test("catalog keeps two readable columns on small screens", async ({ page }) => {
  await page.goto("/#/components");
  for (const width of [320, 360, 390, 477, 600, 768]) {
    await page.setViewportSize({ width, height: 844 });
    const cards = page.locator(".component-catalog-card");
    const first = (await cards.nth(0).boundingBox())!;
    const second = (await cards.nth(1).boundingBox())!;
    expect(Math.abs(first.y - second.y), `${width}px: first row`).toBeLessThan(1);
    expect(second.x).toBeGreaterThan(first.x);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    expect(await cards.evaluateAll(elements => elements.every(element => element.scrollWidth <= element.clientWidth + 1))).toBe(true);
  }
});

test("sidebar uses text navigation on desktop and mobile", async ({ page }) => {
  await page.goto("/#/components");
  await expect(page.locator(".sidebar-nav .nav-link svg")).toHaveCount(0);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open navigation", exact: true }).click();
  await expect(page.getByRole("dialog", { name: "Main navigation" })).toBeVisible();
  await expect(page.locator(".sidebar-nav .nav-link svg")).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open navigation", exact: true })).toBeFocused();
});

test("mobile navbar hover areas stay circular and consistent", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#/components");
  for (const name of ["Open navigation", "Choose theme"]) {
    const control = page.getByRole("button", { name, exact: true });
    await control.hover();
    const box = (await control.boundingBox())!;
    expect(box.width).toBe(44);
    expect(box.height).toBe(44);
    await expect(control).toHaveCSS("border-radius", "50%");
    await expect(control).not.toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  }
});

test("catalog categories scroll in one row and keep the last category reachable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#/components");
  const filters = page.getByRole("navigation", { name: "Component categories" });
  await expect(filters).toHaveCSS("flex-wrap", "nowrap");
  await expect(filters).toHaveCSS("overflow-x", "auto");
  expect(await filters.evaluate(element => element.scrollWidth > element.clientWidth)).toBe(true);
  const tops = await filters.locator("a").evaluateAll(elements => elements.map(element => element.getBoundingClientRect().top));
  expect(Math.max(...tops) - Math.min(...tops)).toBeLessThan(1);
  await filters.getByRole("link", { name: /^Layout/ }).click();
  await expect(page).toHaveURL(/category=Layout/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});

test("search keeps one inset custom clear action and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#/components");
  const search = page.getByRole("searchbox", { name: "Search components", exact: true });
  await search.fill("button");
  const clear = page.getByRole("button", { name: "Clear input", exact: true });
  await expect(clear).toHaveCount(1);
  expect(await search.evaluate(element => getComputedStyle(element, "::-webkit-search-cancel-button").getPropertyValue("-webkit-appearance"))).toBe("none");
  await clear.hover();
  await expect(clear).toHaveCSS("background-clip", "content-box");
  await expect(clear).toHaveCSS("padding", "4px");
  await expect(clear).not.toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await clear.click();
  await expect(search).toHaveValue("");
  await expect(search).toBeFocused();
  await expect(clear).toHaveCount(0);
});

test("mobile code copy stays compact and copies the complete example", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#/components/button");
  const toolbar = page.locator(".example-source-bar").first();
  await expect(toolbar).toHaveCSS("padding", "0px");
  const copy = toolbar.getByRole("button", { name: "Copy code", exact: true });
  await expect(copy).toHaveCSS("padding", "4px");
  const before = (await copy.boundingBox())!;
  expect(before.width).toBe(30);
  expect(before.height).toBe(30);
  await copy.click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain('from "hulmio-ui"');
  await expect(copy).toContainText("Copied");
});

test("theme changes crossfade, persist, and respect reduced motion", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("hulmio-theme", "light");
    const start = document.startViewTransition.bind(document);
    (window as unknown as { themeTransitions: number }).themeTransitions = 0;
    document.startViewTransition = ((callback: () => void) => {
      (window as unknown as { themeTransitions: number }).themeTransitions++;
      return start(callback);
    }) as typeof document.startViewTransition;
  });
  await page.goto("/#/components");
  expect(await page.evaluate(() => (window as unknown as { themeTransitions: number }).themeTransitions)).toBe(0);
  await page.getByRole("button", { name: "Choose theme", exact: true }).click();
  await page.getByRole("menuitemradio", { name: "Dark", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("html")).toHaveAttribute("data-hulmio-theme", "dark");
  expect(await page.evaluate(() => (window as unknown as { themeTransitions: number }).themeTransitions)).toBe(1);
  expect(await page.evaluate(() => localStorage.getItem("hulmio-theme"))).toBe("dark");
  await page.evaluate(() => Promise.allSettled(document.getAnimations().map(animation => animation.finished)));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.getByRole("button", { name: "Choose theme", exact: true }).click();
  await page.getByRole("menuitemradio", { name: "Light", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(await page.evaluate(() => (window as unknown as { themeTransitions: number }).themeTransitions)).toBe(1);
});

test("accessibility foundation is linked, searchable, and usable on mobile", async ({ page }) => {
  await page.goto("/#/accessibility");
  await expect(page.getByRole("heading", { level: 1, name: "Accessibility" })).toBeVisible();
  await expect(page.locator(".site-primary-nav").getByRole("link", { name: "Foundations" })).toHaveAttribute("aria-current", "page");
  await expect(page.locator(".sidebar-nav").getByRole("link", { name: "Accessibility", exact: true })).toHaveAttribute("aria-current", "page");
  await page.setViewportSize({ width: 320, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  await page.getByRole("button", { name: "Search components", exact: true }).click();
  await page.getByRole("combobox", { name: "Search the design gallery" }).fill("accessibility");
  await expect(page.getByRole("option", { name: /Accessibility/ })).toBeVisible();
  await page.keyboard.press("Escape");
  const field = page.getByRole("textbox", { name: "Display name" });
  await expect(field).toHaveAccessibleDescription("This label stays visible while you type.");
  await field.fill("Alex");
  await page.getByRole("button", { name: "Save name", exact: true }).click();
  await expect(page.getByRole("status").filter({ hasText: "Display name saved" })).toBeVisible();
});

test("a delayed theme transition cannot overwrite the latest choice", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("hulmio-theme", "light");
    const start = document.startViewTransition.bind(document);
    const gate = new Promise<void>(resolve => {
      (window as unknown as { releaseTheme: () => void }).releaseTheme = resolve;
    });
    document.startViewTransition = ((callback: () => void) => {
      const transition = start(async () => {
        await gate;
        callback();
      });
      (window as unknown as { themeUpdateDone: Promise<void> }).themeUpdateDone = transition.updateCallbackDone;
      return transition;
    }) as typeof document.startViewTransition;
  });
  await page.goto("/#/components");
  const trigger = page.getByRole("button", { name: "Choose theme", exact: true });
  await trigger.click();
  await page.getByRole("menuitemradio", { name: "Dark", exact: true }).click();
  await expect.poll(() => page.evaluate(() => localStorage.getItem("hulmio-theme"))).toBe("dark");
  await trigger.evaluate(element => (element as HTMLButtonElement).click());
  await page.getByRole("menuitemradio", { name: "Light", exact: true }).evaluate(element => (element as HTMLButtonElement).click());
  await expect.poll(() => page.evaluate(() => localStorage.getItem("hulmio-theme"))).toBe("light");
  await page.evaluate(async () => {
    (window as unknown as { releaseTheme: () => void }).releaseTheme();
    await (window as unknown as { themeUpdateDone: Promise<void> }).themeUpdateDone;
  });
  await page.evaluate(() => Promise.allSettled(document.getAnimations().map(animation => animation.finished)));
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.locator("html")).toHaveAttribute("data-hulmio-theme", "light");
});

test("theme changes still work without the view-transition API", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("hulmio-theme", "light");
    Object.defineProperty(document, "startViewTransition", { value: undefined });
  });
  await page.goto("/#/components");
  await page.getByRole("button", { name: "Choose theme", exact: true }).click();
  await page.getByRole("menuitemradio", { name: "Dark", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("html")).toHaveAttribute("data-hulmio-theme", "dark");
});
