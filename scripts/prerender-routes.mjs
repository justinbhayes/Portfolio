import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

import { seoRoutes } from "../src/data/seoData.js";
import { renderRouteHtml } from "./seo-head.mjs";

const DIST_DIR = resolve("dist");
const TEMPLATE_PATH = resolve(DIST_DIR, "index.html");

function resolveOutputPath(routePath) {
  if (routePath === "/") {
    return TEMPLATE_PATH;
  }

  const relativePath = routePath.replace(/^\//, "");
  return resolve(DIST_DIR, relativePath, "index.html");
}

const template = readFileSync(TEMPLATE_PATH, "utf8");

for (const route of seoRoutes) {
  const outputPath = resolveOutputPath(route.path);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, renderRouteHtml(template, route), "utf8");
}

console.log(`Prerendered ${seoRoutes.length} route HTML files.`);
