import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = "https://justinbhayes.com";
const OUTPUT_PATH = resolve("public", "sitemap.xml");
const BUILD_INFO_PATH = resolve("src", "data", "buildInfo.js");

const routes = [
  { path: "/", source: "src/pages/HomePage.jsx" },
  { path: "/portfolio", source: "src/pages/PortfolioPage.jsx" },
  { path: "/bio", source: "src/pages/BioPage.jsx" },
  { path: "/contact", source: "src/pages/ContactPage.jsx" },
];

function getGitDate(targetPath) {
  try {
    const command = targetPath
      ? `git log -1 --format=%cs -- "${targetPath}"`
      : "git log -1 --format=%cs";
    return execSync(command, { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function getGitIsoDate() {
  try {
    return execSync("git log -1 --format=%aI", { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

const fallbackDate = getGitDate(null) || new Date().toISOString().slice(0, 10);

const urls = routes
  .map(({ path, source }) => {
    const lastmod = getGitDate(source) || fallbackDate;
    return [
      "  <url>",
      `    <loc>${SITE_URL}${path}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urls,
  "</urlset>",
  "",
].join("\n");

writeFileSync(OUTPUT_PATH, sitemap, "utf8");
console.log(`Generated ${OUTPUT_PATH}`);

const lastCommitIso = getGitIsoDate() || new Date().toISOString();
const buildInfo = [
  "// Last git commit timestamp - updated automatically by scripts/generate-sitemap.mjs",
  `export const lastCommitTime = new Date(\"${lastCommitIso}\");`,
  "",
].join("\n");

writeFileSync(BUILD_INFO_PATH, buildInfo, "utf8");
console.log(`Generated ${BUILD_INFO_PATH}`);
