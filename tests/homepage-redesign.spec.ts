import { expect, test } from "@playwright/test";
import { categories, components } from "../src/lib/catalog";
import { localPackage } from "../src/lib/distribution";
import { chooseOption } from "./helpers";

test("homepage exposes six focused sections, real category routes, and visible variants", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("[data-home-section]")).toHaveCount(6);
  await expect(page.getByRole("heading", { name: "Build with Hulmio.", exact: true })).toBeVisible();
  await expect(page.locator(".home-hero")).toContainText(`${components.length} component families`);
  for (const category of categories) {
    const link = page.locator(".h-category-index a").filter({ has: page.getByRole("heading", { name: category, exact: true }) });
    await expect(link).toHaveAttribute("href", `#/components?category=${encodeURIComponent(category)}`);
    await expect(link.locator(".h-category-count")).toHaveText(String(components.filter(component => component.category === category).length));
  }
  await expect(page.locator(".h-button-specimens [data-hulmio-ui='button']")).toHaveCount(10);
  await expect(page.locator(".h-input-specimens [data-hulmio-ui='input']")).toHaveCount(3);
  await expect(page.locator(".h-tab-specimens [data-hulmio-ui='tabs']")).toHaveCount(3);
  await page.locator(".h-button-specimens").getByRole("button", { name: "Success", exact: true }).click();
  await expect(page.locator(".h-variant-row").first().getByRole("status")).toContainText("Success selected");
});

test("hero playground exposes the actual component variants", async ({ page }) => {
  await page.goto("/");
  const playground = page.locator(".h-hero-project");
  await playground.getByRole("textbox", { name: "Email address", exact: true }).fill("alex@example.com");
  await playground.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(playground.getByRole("status")).toHaveText("Form submitted locally.");
  await playground.getByRole("tab", { name: "Input", exact: true }).click();
  await playground.getByRole("textbox", { name: "Project name", exact: true }).fill("My component library");
  await expect(playground.getByRole("textbox", { name: "Project name", exact: true })).toHaveValue("My component library");
  await chooseOption(page, playground.getByRole("combobox", { name: "Input variant", exact: true }), "Filled");
  await expect(playground.locator('[data-hulmio-ui="input"]:visible')).toHaveAttribute("data-variant", "filled");
  await expect(playground.locator("code")).toContainText('variant="filled"');
});

test("theme and customizer are scoped and installation copy uses the actual local package", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  const siteTheme = await page.locator("html").getAttribute("data-hulmio-theme");
  const home = page.locator(".h-home");
  for (const [theme, background] of [["light", "rgb(248, 249, 243)"], ["dark", "rgb(22, 29, 25)"]]) {
    await page.evaluate(theme => { document.documentElement.dataset.hulmioTheme = theme; }, theme);
    await expect(home).toHaveCSS("background-color", background);
    await expect(page.locator(".h-input-specimens label").first()).toHaveCSS("color", theme === "dark" ? "rgb(217, 237, 146)" : "rgb(40, 76, 63)");
    await expect(page.locator(".h-hero-assembly")).toHaveAttribute("data-hulmio-theme", "light");
    await expect(page.locator(".h-hero-assembly .h-playground")).toHaveCSS("color-scheme", "light");
  }
  await page.evaluate(theme => { document.documentElement.dataset.hulmioTheme = theme!; }, siteTheme);
  const custom = page.locator("[data-home-section='customization']");
  await custom.getByRole("button", { name: "Dark", exact: true }).click();
  await expect(custom.locator(".h-custom-preview")).toHaveAttribute("data-hulmio-theme", "dark");
  await expect(custom.locator(".h-custom-preview input")).toHaveCSS("color-scheme", "dark");
  await expect(page.locator("html")).toHaveAttribute("data-hulmio-theme", siteTheme!);
  await expect(custom.getByRole("button", { name: "Contrast", exact: true })).toHaveCount(0);
  await custom.getByRole("button", { name: "Light", exact: true }).click();
  await chooseOption(page, custom.getByRole("combobox", { name: "Brand color", exact: true }), "Warm terracotta");
  await chooseOption(page, custom.getByRole("combobox", { name: "Corner radius", exact: true }), "Rounded · 22px");
  await chooseOption(page, custom.getByRole("combobox", { name: "Typeface", exact: true }), "Google Sans Flex");
  const previewButton = custom.locator(".h-custom-preview").getByRole("button", { name: "Apply style" });
  expect(await previewButton.evaluate(button => getComputedStyle(button).backgroundColor)).toBe("rgb(139, 73, 54)");
  expect(await previewButton.evaluate(button => getComputedStyle(button).borderRadius)).toBe("22px");
  await expect(previewButton).toHaveCSS("font-family", '"Google Sans Flex", sans-serif');
  await previewButton.click();
  await expect(custom.locator(".h-custom-preview").getByRole("button", { name: "Applied" })).toBeVisible();
  await expect(custom.locator(".h-home-code")).toContainText('--hulmio-font-family: "Google Sans Flex"');
  await custom.getByRole("button", { name: "Copy Your CSS variables", exact: true }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain("--hulmio-primary: #8b4936");
  await custom.getByRole("button", { name: "Reset", exact: true }).click();
  expect(await custom.locator(".h-custom-preview").evaluate(preview => preview.style.getPropertyValue("--hulmio-primary"))).toBe("#284c3f");
  await page.getByRole("button", { name: "Copy Install in your React project", exact: true }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(`npm install ./${localPackage.filename}`);
});

test("assembly advances on desktop and remains fully readable with reduced motion at every width", async ({ page }) => {
  await page.goto("/");
  const assembly = page.locator(".h-assembly");
  const bounds = await assembly.boundingBox();
  expect(bounds).not.toBeNull();
  await page.evaluate(({ top, height }) => window.scrollTo(0, top + height - innerHeight), { top: bounds!.y, height: bounds!.height });
  await expect(assembly).toHaveAttribute("data-assembly-step", "2");
  await expect(page.locator(".h-build-finished")).toBeVisible();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(assembly).toHaveAttribute("data-assembly-step", "-1");
  for (const width of [390, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${width}px`).toBe(true);
    for (const panel of await page.locator("[data-assembly-panel]").all()) {
      await expect(panel).toBeVisible();
      await expect(panel).not.toHaveAttribute("inert", "");
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.locator("[data-home-section='variants']").scrollIntoViewIfNeeded();
  expect(await page.locator(".h-home").evaluate(home => ({
    reveals: [...home.querySelectorAll("[data-home-reveal]")].reduce((count, element) => count + element.getAnimations().length, 0),
  }))).toEqual({ reveals: 0 });
});

test("entrance motion preserves panel rotation, runs once, and cancels for reduced motion", async ({ page }) => {
  await page.addInitScript(() => {
    const animate = Element.prototype.animate;
    Element.prototype.animate = function (...args: Parameters<Element["animate"]>) {
      const animation = animate.apply(this, args);
      if (this.matches(".h-hero-project")) animation.pause();
      return animation;
    };
  });
  await page.goto("/");
  const project = page.locator(".h-hero-project");
  await expect(project).toHaveAttribute("data-revealed", "true");
  const motion = await project.evaluate(element => {
    const animation = element.getAnimations()[0];
    const frames = (animation?.effect as KeyframeEffect | null)?.getKeyframes() ?? [];
    return { transform: getComputedStyle(element).transform, frames };
  });
  expect(motion.frames.length).toBeGreaterThan(0);
  expect(motion.frames.some(frame => frame.translate && frame.translate !== "0px 0px")).toBe(true);
  expect(motion.frames.every(frame => frame.transform === undefined)).toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => project.evaluate(element => element.getAnimations().length)).toBe(0);
  await expect(project).toHaveCSS("transform", motion.transform);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.locator("[data-home-section='categories']").scrollIntoViewIfNeeded();
  await page.evaluate(() => scrollTo(0, 0));
  await expect.poll(() => project.evaluate(element => element.getAnimations().length)).toBe(0);
  await expect(project).toHaveCSS("transform", motion.transform);
});
