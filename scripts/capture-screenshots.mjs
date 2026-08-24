import { chromium } from "playwright";
import { readdir, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const projectsDir = path.join(root, "projects");
const outputDir = path.join(root, "assets", "screenshots");
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: "dark" });
const failures = [];

for (const entry of await readdir(projectsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const data = JSON.parse(await readFile(path.join(projectsDir, entry.name, "project.json"), "utf8"));
  if (!data.media.captureEnabled) continue;

  const target = new URL(data.hosting.url);
  if (target.hostname !== "grela.dev" && !target.hostname.endsWith(".grela.dev")) {
    failures.push(`${data.slug}: target outside grela.dev`);
    continue;
  }

  const page = await context.newPage();
  try {
    const response = await page.goto(target.href, { waitUntil: "domcontentloaded", timeout: 30_000 });
    if (!response || response.status() >= 400) throw new Error(`HTTP ${response?.status() ?? "unknown"}`);
    await page.waitForTimeout(2_000);
    await page.screenshot({ path: path.join(outputDir, `${data.slug}.png`), fullPage: false });
    console.log(`Captured ${data.slug}`);
  } catch (error) {
    failures.push(`${data.slug}: ${error.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
if (failures.length) {
  console.warn("Some screenshots were unavailable; existing images were preserved:");
  failures.forEach(failure => console.warn(`- ${failure}`));
}
