import { test, expect } from "@playwright/test";

import type { Page } from "@playwright/test";



async function prepareContractPage(page: Page) {

  await page.route("**/__overlay_contracts__", route => route.fulfill({ contentType: "text/html", body: '<!doctype html><html><head></head><body><div id="contract-root"></div></body></html>' }));

  await page.goto("/__overlay_contracts__");

  await page.evaluate(async () => {

    const refresh = await import("/@react-refresh");

    refresh.default.injectIntoGlobalHook(window);

    Object.assign(window, { $RefreshReg$: () => {}, $RefreshSig$: () => (type: unknown) => type, __vite_plugin_react_preamble_installed__: true });

    await import("/packages/ui/src/styles.css");

    await import("/packages/ui/src/parity-overlays.css");

  });

}



// Exercise source modules directly so these contracts do not depend on gallery examples.

test("toast queues pause timers, isolate notifications and recover rejected promises", async ({ page }) => {

  await prepareContractPage(page);

  const result = await page.evaluate(async () => {

    const { ToastQueue } = await import("/packages/ui/src/ToastProvider.tsx");

    const queue = new ToastQueue();

    const other = new ToastQueue();

    let closed = 0;

    queue.add({ title: "Saved", timeout: 80, onClose: () => closed++ });

    queue.pauseAll();

    await new Promise(resolve => setTimeout(resolve, 110));

    const pausedCount = queue.getSnapshot().length;

    queue.resumeAll();

    await new Promise(resolve => setTimeout(resolve, 110));

    const expiredCount = queue.getSnapshot().length;

    await queue.promise(Promise.reject(new Error("Offline")), { loading: "Saving", success: "Saved", error: "Try again" }).catch(() => {});

    const errorTitle = queue.getSnapshot()[0]?.title;

    queue.clear();

    return { pausedCount, expiredCount, closed, errorTitle, otherCount: other.getSnapshot().length };

  });

  expect(result).toEqual({ pausedCount: 1, expiredCount: 0, closed: 1, errorTitle: "Try again", otherCount: 0 });

});



test("sheet snapping has a keyboard alternative and async confirmation stays open on error", async ({ page }) => {

  await prepareContractPage(page);

  await page.evaluate(async () => {

    const { default: React } = await import("/node_modules/.vite-playwright/deps/react.js");

    const { default: { createRoot } } = await import("/node_modules/.vite-playwright/deps/react-dom_client.js");

    const { Sheet } = await import("/packages/ui/src/Sheet.tsx");

    const { AlertDialog } = await import("/packages/ui/src/AlertDialog.tsx");

    let attempts = 0;

    document.body.innerHTML = '<div id="contract-root"></div>';

    createRoot(document.getElementById("contract-root")!).render(React.createElement(React.Fragment, null,

      React.createElement(Sheet, { title: "Snap contract", trigger: React.createElement("button", null, "Open sheet"), snapPoints: [0.3, 0.7], children: "Content" }),

      React.createElement(AlertDialog, { title: "Confirm contract", description: "Retry on failure", trigger: React.createElement("button", null, "Open confirmation"), onConfirm: async () => { await new Promise(resolve => setTimeout(resolve, 100)); if (++attempts === 1) throw new Error("Offline, retry"); } }),

    ));

  });

  await page.getByRole("button", { name: "Open sheet" }).click();

  const handle = page.getByRole("slider", { name: "Sheet position" });

  await expect(handle).toHaveAttribute("aria-valuenow", "0");

  await handle.press("ArrowUp");

  await expect(handle).toHaveAttribute("aria-valuenow", "1");

  // Wait for the keyboard-triggered height transition before starting a pointer drag.
  await expect(page.getByRole("dialog", { name: "Snap contract" })).toHaveCSS("height", `${page.viewportSize()!.height * 0.7}px`);

  const grip = await handle.boundingBox();

  await page.mouse.move(grip!.x + grip!.width / 2, grip!.y + grip!.height / 2);

  await page.mouse.down();

  await page.mouse.move(grip!.x + grip!.width / 2, grip!.y + grip!.height / 2 + 350, { steps: 8 });

  await page.mouse.up();

  await expect(handle).toHaveAttribute("aria-valuenow", "0");

  await page.keyboard.press("Escape");

  await page.getByRole("button", { name: "Open confirmation" }).click();

  await page.getByRole("button", { name: "Continue", exact: true }).click();

  await expect(page.getByRole("alertdialog")).toBeVisible();

  await expect(page.getByRole("alertdialog").getByRole("alert")).toHaveText("Offline, retry");

  await page.getByRole("button", { name: "Continue", exact: true }).click();

  await expect(page.getByRole("alertdialog")).toHaveCount(0);

});



test("dropdown supports persistent multiple selection, submenus and keyboard long press access", async ({ page }) => {

  await prepareContractPage(page);

  await page.evaluate(async () => {

    const { default: React } = await import("/node_modules/.vite-playwright/deps/react.js");

    const { default: { createRoot } } = await import("/node_modules/.vite-playwright/deps/react-dom_client.js");

    const { DropdownMenu } = await import("/packages/ui/src/Overlays.tsx");

    function Contract() {

      const [keys, setKeys] = React.useState<string[]>([]);

      return React.createElement(React.Fragment, null,

        React.createElement(DropdownMenu, { trigger: React.createElement("button", null, "Choose teams"), selectionMode: "multiple", selectedKeys: keys, onSelectionChange: setKeys, items: [{ id: "design", label: "Design" }, { id: "engineering", label: "Engineering" }, { id: "disabled", label: "Unavailable", disabled: true }] }),

        React.createElement(DropdownMenu, { trigger: React.createElement("button", null, "Hold actions"), triggerMode: "longPress", longPressDelay: 100, items: [{ label: "Share", items: [{ label: "Email link" }] }] }),

        React.createElement("output", null, keys.join(",")),

      );

    }

    createRoot(document.getElementById("contract-root")!).render(React.createElement(Contract));

  });

  await page.getByRole("button", { name: "Choose teams" }).click();

  await page.getByRole("menuitemcheckbox", { name: "Design", exact: true }).click();

  await expect(page.getByRole("menu")).toBeVisible();

  await page.getByRole("menuitemcheckbox", { name: "Engineering", exact: true }).click();

  await expect(page.locator("output")).toHaveText("design,engineering");

  await expect(page.getByRole("menuitemcheckbox", { name: "Unavailable" })).toBeDisabled();

  await page.keyboard.press("Escape");

  const trigger = page.getByRole("button", { name: "Hold actions" });

  await trigger.focus();

  await trigger.press("Enter");

  await page.getByRole("menuitem", { name: "Share", exact: true }).hover();

  await expect(page.getByRole("menuitem", { name: "Email link" })).toBeVisible();

  await page.keyboard.press("Escape");

  await page.keyboard.press("Escape");

  const bounds = await trigger.boundingBox();

  await page.mouse.move(bounds!.x + bounds!.width / 2, bounds!.y + bounds!.height / 2);

  await page.mouse.down();

  await expect(page.getByRole("menuitem", { name: "Share", exact: true })).toBeVisible();

  await page.mouse.up();

});



test("modal dismissal options preserve explicit close and restore focus", async ({ page }) => {

  await prepareContractPage(page);

  await page.evaluate(async () => {

    const { default: React } = await import("/node_modules/.vite-playwright/deps/react.js");

    const { default: { createRoot } } = await import("/node_modules/.vite-playwright/deps/react-dom_client.js");

    const { Modal } = await import("/packages/ui/src/Modal.tsx");

    createRoot(document.getElementById("contract-root")!).render(React.createElement(Modal, { title: "Persistent details", trigger: React.createElement("button", null, "Open persistent"), dismissable: false, keyboardDismiss: false, children: React.createElement("button", null, "Internal action") }));

  });

  await page.getByRole("button", { name: "Open persistent" }).click();

  await page.keyboard.press("Escape");

  await expect(page.getByRole("dialog", { name: "Persistent details" })).toBeVisible();

  await page.mouse.click(5, 5);

  await expect(page.getByRole("dialog", { name: "Persistent details" })).toBeVisible();

  await page.getByRole("button", { name: "Close dialog", exact: true }).click();

  await expect(page.getByRole("dialog")).toHaveCount(0);

  await expect(page.getByRole("button", { name: "Open persistent" })).toBeFocused();

});



test("toast provider exposes actions and keyboard dismissal", async ({ page }) => {

  await prepareContractPage(page);

  await page.evaluate(async () => {

    const { default: React } = await import("/node_modules/.vite-playwright/deps/react.js");

    const { default: { createRoot } } = await import("/node_modules/.vite-playwright/deps/react-dom_client.js");

    const { ToastProvider, ToastQueue } = await import("/packages/ui/src/ToastProvider.tsx");

    const queue = new ToastQueue();

    function Contract() {

      const [message, setMessage] = React.useState("Ready");

      return React.createElement(React.Fragment, null, React.createElement(ToastProvider, { queue }), React.createElement("button", { onClick: () => queue.add({ title: "Archived", timeout: 0, action: { label: "Undo", onAction: () => setMessage("Restored") } }) }, "Notify"), React.createElement("output", null, message));

    }

    createRoot(document.getElementById("contract-root")!).render(React.createElement(Contract));

  });

  await page.getByRole("button", { name: "Notify", exact: true }).click();

  await page.getByRole("button", { name: "Undo", exact: true }).click();

  await expect(page.locator("output")).toHaveText("Restored");

  await expect(page.getByRole("button", { name: "Undo", exact: true })).toHaveCount(0);

  await page.getByRole("button", { name: "Notify", exact: true }).click();

  await page.keyboard.press("F8");

  await page.keyboard.press("Escape");

  await expect(page.getByRole("button", { name: "Undo", exact: true })).toHaveCount(0);

});


test("context menu radio choices and grouped commands use their public contracts", async ({ page }) => {
  await prepareContractPage(page);
  await page.evaluate(async () => {
    const { default: React } = await import("/node_modules/.vite-playwright/deps/react.js");
    const { default: { createRoot } } = await import("/node_modules/.vite-playwright/deps/react-dom_client.js");
    const { ContextMenu } = await import("/packages/ui/src/AdditionalOverlays.tsx");
    const { CommandPalette } = await import("/packages/ui/src/Overlays.tsx");
    function Contract() {
      const [theme, setTheme] = React.useState("light");
      const [open, setOpen] = React.useState(false);
      const [message, setMessage] = React.useState("Ready");
      return React.createElement(React.Fragment, null,
        React.createElement(ContextMenu, { items: [{ id: "theme", label: "Theme", radioGroup: { value: theme, onValueChange: setTheme, options: [{ id: "light", label: "Light", value: "light" }, { id: "dark", label: "Dark", value: "dark" }] } }], children: React.createElement("button", null, "Theme menu") }),
        React.createElement("button", { onClick: () => setOpen(true) }, "Open commands"),
        React.createElement(CommandPalette, { open, onOpenChange: setOpen, items: [{ id: "blocked", label: "Blocked command", group: "Workspace", disabled: true, onSelect: () => setMessage("Wrong command") }, { id: "enabled", label: "Available command", group: "Workspace", description: "An enabled action", shortcut: "?K", onSelect: () => setMessage("Command selected") }] }),
        React.createElement("output", null, theme + " · " + message),
      );
    }
    createRoot(document.getElementById("contract-root")!).render(React.createElement(Contract));
  });
  await page.getByRole("button", { name: "Theme menu" }).click({ button: "right" });
  await expect(page.getByRole("menuitemradio", { name: "Light", exact: true })).toBeChecked();
  await page.getByRole("menuitemradio", { name: "Dark", exact: true }).click();
  await expect(page.locator("output")).toContainText("dark");
  await page.getByRole("button", { name: "Open commands" }).click();
  await expect(page.getByRole("button", { name: "Blocked command", exact: true })).toBeDisabled();
  await expect(page.getByRole("dialog")).toContainText("Workspace");
  await page.getByRole("searchbox", { name: "Search commands" }).press("Enter");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.locator("output")).toContainText("Command selected");
});
