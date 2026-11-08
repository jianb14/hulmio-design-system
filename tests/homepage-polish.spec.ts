import { expect, test } from "@playwright/test";

test("hero playground switches real components without growing or covering the catalog", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const playground = page.locator(".h-hero-project .h-playground");
  await expect(playground.getByRole("tab", { name: "Button", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Add a task", exact: true })).toHaveCount(0);
  const stage = playground.locator(".h-playground-stage:visible");
  expect(await stage.evaluate(element => element.scrollHeight - element.clientHeight)).toBeLessThanOrEqual(1);
  const initial = await playground.boundingBox();
  for (let pass = 0; pass < 3; pass++) {
    for (const name of ["Input", "Badge", "Tabs", "Button"]) {
      await playground.getByRole("tab", { name, exact: true }).click();
      await expect(playground.getByRole("tab", { name, exact: true })).toHaveAttribute("aria-selected", "true");
      expect((await playground.boundingBox())!.height).toBeCloseTo(initial!.height, 1);
    }
    await playground.getByRole("button", { name: "Create project", exact: true }).click();
    await expect(playground.getByRole("status")).toHaveText("Button clicked.");
  }
  const variant = playground.getByRole("combobox", { name: "Button variant", exact: true });
  await variant.click();
  await page.getByRole("option", { name: "Outline", exact: true }).click();
  await expect(playground.getByRole("button", { name: "Create project", exact: true })).toHaveAttribute("data-variant", "outline");
  await expect(playground.locator("code")).toContainText('variant="outline"');
  await expect(playground.getByRole("link", { name: "Button documentation", exact: true })).toHaveAttribute("href", "#/components/button");
  const end = await playground.boundingBox();
  const categories = await page.locator("[data-home-section='categories']").boundingBox();
  expect(end!.y + end!.height).toBeLessThan(categories!.y);
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  await playground.getByRole("tab", { name: "Form", exact: true }).click();
  expect(await stage.evaluate(element => element.scrollHeight - element.clientHeight)).toBeLessThanOrEqual(1);
  await page.setViewportSize({ width: 320, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});

test("scroll entrances begin on arrival and skip already readable fast-scroll content", async ({ page }) => {
  await page.addInitScript(() => {
    const animate = Element.prototype.animate;
    Element.prototype.animate = function (...args: Parameters<Element["animate"]>) {
      const animation = animate.apply(this, args);
      if (this.matches("#home-categories-title")) animation.pause();
      return animation;
    };
  });
  await page.goto("/");
  const heading = page.locator("#home-categories-title");
  await page.evaluate(() => {
    const element = document.getElementById("home-categories-title")!;
    scrollTo({ top: scrollY + element.getBoundingClientRect().top - innerHeight - 100, behavior: "instant" });
  });
  await expect(heading).not.toHaveAttribute("data-revealed", "true");
  await page.evaluate(() => scrollBy({ top: 280, behavior: "instant" }));
  await expect(heading).toHaveAttribute("data-revealed", "true");
  const entry = await heading.evaluate(element => ({
    top: element.getBoundingClientRect().top,
    viewport: innerHeight,
    delay: element.getAnimations()[0]?.effect?.getTiming().delay,
  }));
  expect(entry.top).toBeLessThan(entry.viewport);
  expect(entry.top).toBeGreaterThan(entry.viewport * .75);
  expect(entry.delay).toBe(0);
  const later = page.locator("#home-custom-title");
  await page.evaluate(() => {
    const element = document.getElementById("home-custom-title")!;
    scrollTo({ top: scrollY + element.getBoundingClientRect().top - innerHeight / 2, behavior: "instant" });
  });
  await expect(later).toHaveAttribute("data-revealed", "true");
  expect(await later.evaluate(element => element.getAnimations().length)).toBe(0);
  await expect(later).toHaveCSS("opacity", "1");
});

test("hero playground waits until enough of the card is visible and settles at a readable pace", async ({ page }) => {
  await page.setViewportSize({ width: 1536, height: 730 });
  await page.addInitScript(() => {
    const animate = Element.prototype.animate;
    Element.prototype.animate = function (...args: Parameters<Element["animate"]>) {
      const animation = animate.apply(this, args);
      if (this.matches(".h-hero-project")) animation.pause();
      return animation;
    };
  });
  await page.goto("/");
  await expect(page.locator(".h-home")).toHaveClass(/h-motion-ready/);
  const project = page.locator(".h-hero-project");
  await expect(project).not.toHaveAttribute("data-revealed", "true");
  await project.evaluate(element => scrollTo({ top: scrollY + element.getBoundingClientRect().top - innerHeight * .55, behavior: "instant" }));
  await expect(project).toHaveAttribute("data-revealed", "true");
  const duration = await project.evaluate(element => element.getAnimations()[0]?.effect?.getTiming().duration);
  expect(duration).toBeGreaterThanOrEqual(850);
  await project.evaluate(element => element.getAnimations().forEach(animation => animation.finish()));
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  expect(await project.evaluate(element => element.getAnimations().length)).toBe(0);
});

test("hero backdrop stays steady when scrolling and mobile entrances honor reduced motion", async ({ page }) => {
  await page.goto("/");
  const mark = page.locator(".h-hero-mark");
  const scale = await mark.evaluate(element => getComputedStyle(element).scale);
  await page.evaluate(() => scrollTo({ top: 450, behavior: "instant" }));
  await expect(mark).toHaveCSS("scale", scale);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  const title = page.locator("#home-categories-title");
  await page.evaluate(() => {
    const title = document.getElementById("home-categories-title")!;
    scrollTo({ top: scrollY + title.getBoundingClientRect().top - innerHeight + 180, behavior: "instant" });
  });
  await expect(title).toHaveAttribute("data-revealed", "true");
  expect(await title.evaluate(element => element.getAnimations().length)).toBeGreaterThan(0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => title.evaluate(element => element.getAnimations().length)).toBe(0);
  await expect(title).toHaveCSS("opacity", "1");
});

test("mobile category cards preserve their stagger when entrance motion finishes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.addInitScript(() => {
    const animate = Element.prototype.animate;
    Element.prototype.animate = function (...args: Parameters<Element["animate"]>) {
      const animation = animate.apply(this, args);
      if (this.matches(".h-category-index a:nth-child(even)")) animation.pause();
      return animation;
    };
  });
  await page.goto("/");
  const card = page.locator(".h-category-index a").nth(1);
  await card.evaluate(element => scrollTo({ top: scrollY + element.getBoundingClientRect().top - innerHeight + 220, behavior: "instant" }));
  await expect(card).toHaveAttribute("data-revealed", "true");
  expect(await card.evaluate(element => element.getAnimations().length)).toBe(1);
  const enteringY = (await card.boundingBox())!.y;
  await card.evaluate(element => element.getAnimations().forEach(animation => animation.finish()));
  expect((await card.boundingBox())!.y).toBeCloseTo(enteringY, 1);
});

test("hero supporting cards leave playground documentation reachable at tablet and desktop breakpoints", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const link = page.locator(".h-hero-project").getByRole("link", { name: "Form documentation", exact: true });
  for (const width of [768, 1024, 1199, 1200, 1280, 1360, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await link.scrollIntoViewIfNeeded();
    expect(await link.evaluate(element => {
      const box = element.getBoundingClientRect();
      return [.1, .5, .9].every(position => element.contains(document.elementFromPoint(box.x + box.width * position, box.y + box.height / 2)));
    }), `${width}px documentation must remain clickable`).toBe(true);
  }
});
