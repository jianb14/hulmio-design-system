import { expect, test } from "@playwright/test";
import { components } from "../src/lib/catalog";

test("every catalog family has its own static illustration", async ({ page }) => {
  await page.goto("/#/components");
  const artworks = page.locator(".component-artwork");
  await expect(artworks).toHaveCount(components.length);
  await expect(artworks.locator("button, input, select, textarea, a, foreignObject")).toHaveCount(0);

  const rendered = await artworks.evaluateAll(async elements => {
    const images = new Map<string, { pixels: Uint8ClampedArray; signature: string }>();
    const empty: string[] = [];
    for (const element of elements) {
      const id = element.getAttribute("data-artwork")!;
      const svg = element.querySelector("svg")!.cloneNode(true) as SVGSVGElement;
      if (!svg.querySelector("rect, path, circle, line, polygon, polyline, text")) empty.push(id);
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("width", "220");
      svg.setAttribute("height", "144");
      svg.style.color = "#284c3f";
      svg.style.setProperty("--artwork-paper", "#ffffff");
      const image = new Image();
      image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}`;
      await image.decode();
      const canvas = document.createElement("canvas");
      canvas.width = 220;
      canvas.height = 144;
      const context = canvas.getContext("2d")!;
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, 220, 144);
      context.drawImage(image, 0, 0);
      images.set(id, { pixels: context.getImageData(0, 0, 220, 144).data, signature: canvas.toDataURL() });
    }
    const duplicates: string[][] = [];
    const signatures = new Map<string, string[]>();
    for (const [id, { signature }] of images) signatures.set(signature, [...(signatures.get(signature) ?? []), id]);
    for (const ids of signatures.values()) if (ids.length > 1) duplicates.push(ids);

    const pairs = [
      ["breadcrumbs", "pagination"], ["pagination", "stepper"], ["tabs", "toggle-group"],
      ["alert", "toast"], ["alert", "empty-state"], ["toast", "empty-state"],
      ["select", "combobox"], ["dialog", "popover"], ["popover", "hover-card"],
      ["hover-card", "tooltip"], ["calendar", "inline-calendar"],
      ["card", "item"], ["table", "simple-table"],
    ];
    const differences = pairs.map(([first, second]) => {
      const left = images.get(first)!.pixels;
      const right = images.get(second)!.pixels;
      let changed = 0;
      for (let index = 0; index < left.length; index += 4) {
        if (Math.max(...[0, 1, 2].map(channel => Math.abs(left[index + channel] - right[index + channel]))) > 20) changed++;
      }
      return { pair: `${first} / ${second}`, fraction: changed / (220 * 144) };
    });
    return { ids: [...images.keys()], empty, duplicates, differences };
  });

  expect(rendered.ids.sort()).toEqual(components.map(component => component.id).sort());
  expect(rendered.empty, "Catalog IDs must render an illustration").toEqual([]);
  expect(rendered.duplicates, "Catalog families must not reuse an identical rendered thumbnail").toEqual([]);
  for (const { pair, fraction } of rendered.differences) {
    expect(fraction, `${pair} must have visibly different silhouettes`).toBeGreaterThan(.035);
  }
});
