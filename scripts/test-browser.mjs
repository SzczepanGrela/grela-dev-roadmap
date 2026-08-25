import { spawn } from "node:child_process";
import { chromium } from "playwright";

const port = 4323;
const baseUrl = `http://127.0.0.1:${port}`;
const server = spawn("npm", ["run", "preview", "--", "--host", "127.0.0.1", "--port", String(port)], {
  stdio: ["ignore", "pipe", "pipe"],
});

const waitForServer = async () => {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The preview server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("Astro preview server did not start");
};

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

let browser;
try {
  await waitForServer();
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  assert(await page.locator(".compliance-row").count() === 14, "desktop matrix must contain 14 projects");
  assert(await page.locator(".project-tasks .task").count() > 4, "selected project must expose granular tasks");
  await page.locator(".compliance-toolbar select").selectOption("desktop");
  assert(await page.locator(".compliance-row").count() === 3, "desktop profile filter must contain three projects");
  await page.locator(".compliance-toolbar select").selectOption("all");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: "networkidle" });
  const overflows = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  assert(!overflows, "mobile page must not overflow horizontally");
  assert(await page.locator(".compliance-row").count() === 14, "mobile matrix must retain all projects");
  assert(await page.locator(".compliance-cell b").first().isVisible(), "mobile controls must show textual statuses");

  await page.goto(`${baseUrl}/projects/tic-tac-toe-ai/`, { waitUntil: "networkidle" });
  assert(await page.locator(".compliance-detail-grid > section").count() === 12, "detail page must show all v2 controls");
  console.log("Browser verification passed for desktop, mobile and project detail views.");
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
}
