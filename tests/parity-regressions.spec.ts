import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

async function contracts(page: Page) {
  await page.route("**/__parity_regressions__", route => route.fulfill({ contentType: "text/html", body: '<!doctype html><html><body><div id="contracts"></div></body></html>' }));
  await page.goto("/__parity_regressions__");
  await page.evaluate(async () => {
    const refresh = await import("/@react-refresh");
    refresh.default.injectIntoGlobalHook(window);
    Object.assign(window, { $RefreshReg$: () => {}, $RefreshSig$: () => (type: unknown) => type, __vite_plugin_react_preamble_installed__: true });
    await import("/packages/ui/src/styles.css");
    const { default: React } = await import("/node_modules/.vite-playwright/deps/react.js");
    const { default: { createRoot } } = await import("/node_modules/.vite-playwright/deps/react-dom_client.js");
    const { Sheet, Combobox, MultiSelect, Form, ColorSwatchPicker, ToastProvider, ToastQueue } = await import("/packages/ui/src/index.ts");
    const queue = new ToastQueue();
    function Fixture() {
      const [version, setVersion] = React.useState(0);
      const [key, setKey] = React.useState("design");
      const [query, setQuery] = React.useState("Design");
      const [keys, setKeys] = React.useState(["design"]);
      const options = [{ value: "design", label: "Design" }, { value: "research", label: "Research" }];
      return React.createElement(React.Fragment, null,
        React.createElement(Sheet, { title: "Outer sheet", trigger: React.createElement("button", null, "Open outer"), snapPoints: [0.35, 0.8] }, React.createElement(Sheet, { title: "Inner sheet", trigger: React.createElement("button", null, "Open inner"), snapPoints: [0.3, 0.8] }, "Nested content")),
        React.createElement(Form, { id: "key-default" }, React.createElement(Combobox, { label: "Default role", options, defaultSelectedKey: "design", allowsCustomValue: false }), React.createElement("button", { type: "reset" }, "Reset default role")),
        React.createElement(Form, { id: "key-controlled" }, React.createElement(Combobox, { label: "Controlled role", options, selectedKey: key, onSelectionChange: setKey, allowsCustomValue: false }), React.createElement("button", { type: "reset" }, "Reset controlled role")),
        React.createElement(Form, { id: "query-controlled" }, React.createElement(Combobox, { label: "Controlled query", options, inputValue: query, onInputChange: setQuery }), React.createElement("button", { type: "reset" }, "Reset query")),
        React.createElement(Form, { id: "keys-controlled" }, React.createElement(MultiSelect, { label: "Controlled choices", options, value: keys, onValueChange: setKeys }), React.createElement("button", { type: "reset" }, "Reset choices")),
        React.createElement(Form, { id: "validated-role" }, React.createElement(Combobox, { label: "Validated role", name: "role", options, validationBehavior: "aria", allowsCustomValue: false, validate: ({ value }: { value: unknown }) => value === "research" ? "Research requires approval." : null })),
        React.createElement(Form, { id: "server-role", validationErrors: { "serverRole": "Permission denied." } }, React.createElement(Combobox, { label: "Server role", name: "serverRole", options, defaultSelectedKey: "design", allowsCustomValue: false })),
        React.createElement("form", { id: "swatch-reset" }, React.createElement(ColorSwatchPicker, { label: "Palette", colors: [{ value: "#284c3f", label: "Forest" }, { value: "#d9ed92", label: "Lime" }], defaultValue: "#284c3f" }), React.createElement("button", { type: "reset" }, "Reset swatch"), React.createElement("button", { type: "button", onClick: () => setVersion(version + 1) }, "Rerender fixture")),
        React.createElement(ToastProvider, { queue }),
        React.createElement("button", { onClick: () => queue.add({ title: "Persistent toast", timeout: 0 }) }, "Add persistent toast"),
        React.createElement("button", { onClick: () => queue.add({ title: "Expiring toast", timeout: 200 }) }, "Add expiring toast"),
      );
    }
    createRoot(document.getElementById("contracts")!).render(React.createElement(Fixture));
  });
}

test("nested sheet drag changes only the inner position", async ({ page }) => {
  await contracts(page);
  await page.getByRole("button", { name: "Open outer", exact: true }).click();
  await page.getByRole("button", { name: "Open inner", exact: true }).click();
  const handles = page.locator(".h-sheet-handle");
  const handle = handles.nth(1);
  const bounds = await handle.boundingBox();
  await page.mouse.move(bounds!.x + bounds!.width / 2, bounds!.y + bounds!.height / 2);
  await page.mouse.down();
  await page.mouse.move(bounds!.x + bounds!.width / 2, bounds!.y - 400, { steps: 8 });
  await page.mouse.up();
  await expect(handle).toHaveAttribute("aria-valuenow", "1");
  await expect(handles.first()).toHaveAttribute("aria-valuenow", "0");
});

test("selected-key defaults reset while controlled keys remain visible", async ({ page }) => {
  await contracts(page);
  const field = page.getByRole("combobox", { name: "Default role", exact: true });
  await field.fill("Research");
  await page.getByRole("option", { name: "Research", exact: true }).click();
  await page.getByRole("button", { name: "Reset default role", exact: true }).click();
  await expect(field).toHaveValue("Design");
  const controlled = page.getByRole("combobox", { name: "Controlled role", exact: true });
  await controlled.fill("Research");
  await page.getByRole("option", { name: "Research", exact: true }).click();
  await page.getByRole("button", { name: "Reset controlled role", exact: true }).click();
  await expect(controlled).toHaveValue("Research");
  const query = page.getByRole("combobox", { name: "Controlled query", exact: true });
  await query.fill("Custom query");
  await query.press("Escape");
  await page.getByRole("button", { name: "Reset query", exact: true }).click();
  await expect(query).toHaveValue("Custom query");
  const choices = page.locator("#keys-controlled");
  await choices.getByRole("combobox").fill("Research");
  await page.getByRole("option", { name: "Research", exact: true }).click();
  await choices.getByRole("combobox").press("Escape");
  await page.getByRole("button", { name: "Reset choices", exact: true }).click();
  await expect(choices.getByRole("button", { name: "Remove Research", exact: true })).toBeVisible();
  await field.fill("Research");
  await page.getByRole("option", { name: "Research", exact: true }).click();
  await page.locator("#key-default").evaluate(form => form.addEventListener("reset", event => event.preventDefault()));
  await page.getByRole("button", { name: "Reset default role", exact: true }).click();
  await expect(field).toHaveValue("Research");
});

test("custom and server collection errors are visible and values submit once", async ({ page }) => {
  await contracts(page);
  const input = page.getByRole("combobox", { name: "Validated role", exact: true });
  await input.fill("Research");
  await page.getByRole("option", { name: "Research", exact: true }).click();
  const message = page.getByText("Research requires approval.", { exact: true });
  await expect(message).toBeVisible();
  const errorId = await message.getAttribute("id");
  expect(errorId).toBeTruthy();
  await expect(input).toHaveAttribute("aria-describedby", new RegExp(errorId!));
  await expect(page.getByText("Permission denied.", { exact: true })).toBeVisible();
  await input.fill("Design");
  await page.getByRole("option", { name: "Design", exact: true }).click();
  await expect(page.getByText("Research requires approval.", { exact: true })).toHaveCount(0);
  expect(await page.locator("#validated-role").evaluate(form => new FormData(form as HTMLFormElement).getAll("role"))).toEqual(["design"]);
});

test("swatch reset survives rerender and cancelled reset preserves selection", async ({ page }) => {
  await contracts(page);
  await page.getByRole("radio", { name: "Lime", exact: true }).check();
  await page.getByRole("button", { name: "Reset swatch", exact: true }).click();
  await page.getByRole("button", { name: "Rerender fixture", exact: true }).click();
  await expect(page.getByRole("radio", { name: "Forest", exact: true })).toBeChecked();
  await page.getByRole("radio", { name: "Lime", exact: true }).check();
  await page.locator("#swatch-reset").evaluate(form => form.addEventListener("reset", event => event.preventDefault()));
  await page.getByRole("button", { name: "Reset swatch", exact: true }).click();
  await page.getByRole("button", { name: "Rerender fixture", exact: true }).click();
  await expect(page.getByRole("radio", { name: "Lime", exact: true })).toBeChecked();
});

test("keyboard toast dismissal resumes clocks for later notifications", async ({ page }) => {
  await contracts(page);
  await page.getByRole("button", { name: "Add persistent toast", exact: true }).click();
  await page.keyboard.press("F8");
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Add expiring toast", exact: true }).click();
  await expect(page.getByText("Expiring toast", { exact: true })).toBeVisible();
  await expect(page.getByText("Expiring toast", { exact: true })).toHaveCount(0);
});

test("swatch picker composition allows editing a color channel", async ({ page }) => {
  await page.goto("/#/components/color-picker");
  await page.locator('[data-example-id="color-picker--with-swatches"]').getByRole("button", { name: /Brand color/ }).click();
  const editor = page.getByRole("textbox", { name: "Color", exact: true });
  const before = await editor.inputValue();
  await page.getByRole("slider", { name: "Hue", exact: true }).press("End");
  await expect(editor).not.toHaveValue(before);
  const lime = page.getByRole("radio", { name: "Lime", exact: true });
  await lime.check();
  await expect(lime).toBeChecked();
  await expect(editor).toHaveValue("#C4DC77");
});
