import { expect, test } from "@playwright/test";

const repositoryApi = "https://api.github.com/repos/jianb14/hulmio-design-system";

test("navbar stays borderless at the top and gains a stable border after scrolling", async ({ page }) => {
  await page.route(repositoryApi, route => route.fulfill({ json: { stargazers_count: 0 } }));
  await page.goto("/");
  const navbar = page.locator(".site-navbar");
  await expect(navbar).toHaveCSS("border-bottom-color", "rgba(0, 0, 0, 0)");
  const initialHeight = await navbar.evaluate(element => element.getBoundingClientRect().height);
  await page.evaluate(() => window.scrollTo({ top: 8, behavior: "instant" }));
  await expect(navbar).toHaveAttribute("data-scrolled", "false");
  await page.evaluate(() => window.scrollTo({ top: 80, behavior: "instant" }));
  await expect(navbar).toHaveAttribute("data-scrolled", "true");
  await expect(navbar).not.toHaveCSS("border-bottom-color", "rgba(0, 0, 0, 0)");
  expect(await navbar.evaluate(element => element.getBoundingClientRect().height)).toBe(initialHeight);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await expect(navbar).toHaveCSS("border-bottom-color", "rgba(0, 0, 0, 0)");
});

test("navbar search is wider on desktop and remains keyboard accessible on mobile", async ({ page }) => {
  await page.route(repositoryApi, route => route.fulfill({ json: { stargazers_count: 0 } }));
  await page.goto("/");
  const search = page.getByRole("button", { name: "Search components", exact: true });
  expect((await search.boundingBox())!.width).toBeGreaterThanOrEqual(240);
  await expect(page.locator(".site-wordmark .brand > span")).toHaveCSS("padding-bottom", "0px");
  await expect(search).toHaveCSS("border-radius", "10px");
  await search.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("combobox", { name: "Search the design gallery" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(search).toBeFocused();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(search).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  await search.click();
  await expect(page.getByRole("combobox", { name: "Search the design gallery" })).toBeFocused();
});

for (const theme of ["light", "dark"]) {
  test(`search hover changes only the border in ${theme} theme`, async ({ page }) => {
    await page.addInitScript(value => localStorage.setItem("hulmio-theme", value), theme);
    await page.route(repositoryApi, route => route.fulfill({ json: { stargazers_count: 0 } }));
    await page.goto("/");
    const search = page.getByRole("button", { name: "Search components", exact: true });
    await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
    await search.evaluate(element => Promise.allSettled(element.getAnimations().map(animation => animation.finished)));
    const resting = await search.evaluate(element => {
      const style = getComputedStyle(element);
      return { background: style.backgroundColor, color: style.color, border: style.borderColor };
    });
    await search.hover();
    await expect(search).not.toHaveCSS("border-color", resting.border);
    await expect(search).toHaveCSS("background-color", resting.background);
    await expect(search).toHaveCSS("color", resting.color);
  });
}

test("search shortcut is centered inside its keycap", async ({ page }) => {
  await page.route(repositoryApi, route => route.fulfill({ json: { stargazers_count: 0 } }));
  await page.goto("/");
  const keycap = page.locator(".site-search kbd");
  const text = keycap.locator("span");
  await expect(text).toBeVisible();
  const keycapBox = (await keycap.boundingBox())!;
  const textBox = (await text.boundingBox())!;
  expect(Math.abs(textBox.x + textBox.width / 2 - keycapBox.x - keycapBox.width / 2)).toBeLessThan(1);
  expect(Math.abs(textBox.y + textBox.height / 2 - keycapBox.y - keycapBox.height / 2)).toBeLessThan(1);
  expect(keycapBox.height).toBeGreaterThan(textBox.height);
});

test("navbar controls keep their size when pressed while library buttons retain their press feedback", async ({ page }) => {
  await page.route(repositoryApi, route => route.fulfill({ json: { stargazers_count: 0 } }));
  await page.goto("/");
  for (const name of ["Search components", "Choose theme"]) {
    const control = page.getByRole("button", { name, exact: true });
    const resting = (await control.boundingBox())!;
    await control.hover();
    await page.mouse.down();
    await expect(control).toHaveCSS("transform", "none");
    const pressed = (await control.boundingBox())!;
    expect(pressed.width).toBe(resting.width);
    expect(pressed.height).toBe(resting.height);
    await page.mouse.up();
    await page.keyboard.press("Escape");
  }
  await page.goto("/#/components/button");
  const button = page.locator(".library-preview .h-button:not(:disabled)").first();
  await button.hover();
  await page.mouse.down();
  await expect(button).not.toHaveCSS("transform", "none");
  await page.mouse.up();
});

test("GitHub pill displays a compact genuine count with one filled logo and reuses a fresh cache", async ({ page }) => {
  let requests = 0;
  await page.route(repositoryApi, route => {
    requests += 1;
    return route.fulfill({ json: { stargazers_count: 1234 } });
  });
  await page.goto("/");
  const github = page.locator(".site-github");
  await expect(github).toHaveAccessibleName("Hulmio on GitHub, 1,234 stars");
  await expect(github).toHaveAttribute("href", "https://github.com/jianb14/hulmio-design-system");
  await expect(github.locator("svg")).toHaveCount(1);
  await expect(github.locator("svg")).toHaveAttribute("fill", "currentColor");
  await expect(github).toHaveCSS("border-radius", "9999px");
  await expect(github).not.toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await expect(github.locator(".site-github-count")).toHaveText("1.2k");
  const requestsBeforeReload = requests;
  await page.reload();
  await expect(github.locator(".site-github-count")).toHaveText("1.2k");
  expect(requests).toBe(requestsBeforeReload);
});

test("GitHub compact count preserves the full accessible total", async ({ page }) => {
  await page.route(repositoryApi, route => route.fulfill({ json: { stargazers_count: 31100 } }));
  await page.goto("/");
  const github = page.locator(".site-github");
  await expect(github.locator(".site-github-count")).toHaveText("31.1k");
  await expect(github).toHaveAccessibleName("Hulmio on GitHub, 31,100 stars");
  await expect(github).toHaveAttribute("title", "Hulmio on GitHub, 31,100 stars");
});

test("zero is a genuine star count and unavailable requests do not fabricate a count", async ({ page }) => {
  await page.route(repositoryApi, route => route.fulfill({ json: { stargazers_count: 0 } }));
  await page.goto("/");
  const github = page.locator(".site-github");
  await expect(github).toHaveAccessibleName("Hulmio on GitHub, 0 stars");
  await expect(github.locator(".site-github-count")).toHaveText("0");
  await page.evaluate(() => localStorage.removeItem("hulmio-github-stars"));
  await page.unroute(repositoryApi);
  await page.route(repositoryApi, route => route.fulfill({ status: 403, json: { message: "API rate limit exceeded" } }));
  await page.reload();
  await expect(github).toHaveAccessibleName("Hulmio on GitHub, star count unavailable");
  await expect(github.locator(".site-github-count")).toHaveCount(0);
  await expect(github).toHaveAttribute("href", "https://github.com/jianb14/hulmio-design-system");
});

test("expired cached stars are refreshed and invalid API counts stay unavailable", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("hulmio-github-stars", JSON.stringify({ count: 99, fetchedAt: Date.now() - 60 * 60 * 1000 })));
  await page.route(repositoryApi, route => route.fulfill({ json: { stargazers_count: "1234" } }));
  await page.goto("/");
  const github = page.locator(".site-github");
  await expect(github).toHaveAccessibleName("Hulmio on GitHub, star count unavailable");
  await expect(github.locator(".site-github-count")).toHaveCount(0);
});

for (const preferenceKey of ["hulmio-theme", "forma-theme"]) {
  test(`legacy contrast in ${preferenceKey} migrates to light with three supported choices`, async ({ page }) => {
    await page.addInitScript(key => localStorage.setItem(key, "contrast"), preferenceKey);
    await page.route(repositoryApi, route => route.fulfill({ json: { stargazers_count: 0 } }));
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await expect(page.locator("html")).toHaveAttribute("data-hulmio-theme", "light");
    expect(await page.evaluate(() => localStorage.getItem("hulmio-theme"))).toBe("light");
    await page.getByRole("button", { name: "Choose theme", exact: true }).click();
    await expect(page.getByRole("menuitemradio")).toHaveCount(3);
    await expect(page.getByRole("menuitemradio", { name: "Light", exact: true })).toHaveAttribute("aria-checked", "true");
    await expect(page.getByRole("menuitemradio", { name: "High contrast", exact: true })).toHaveCount(0);
  });
}
