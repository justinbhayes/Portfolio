import {
  SITE_NAME,
  SITE_URL,
  buildFullTitle,
  routeSeo,
  resolveSeoImageUrl,
} from "../src/data/seoData.js";

const routeSeoByPath = new Map(
  Object.values(routeSeo).map((route) => [route.path, route]),
);

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function resolveRouteSeo(pathname) {
  const normalizedPath = normalizePathname(pathname);
  return routeSeoByPath.get(normalizedPath) || routeSeo.notFound;
}

export function buildHeadMarkup(route) {
  const title = buildFullTitle(route.title);
  const canonical = `${SITE_URL}${route.path}`;
  const imageUrl = resolveSeoImageUrl(route.image);
  const preloadImageUrl = resolveSeoImageUrl(
    route.preloadImageSrc || (route.preloadImage ? route.image : ""),
    { fallbackToDefault: false },
  );
  const headTags = [
    `    <title>${escapeHtml(title)}</title>`,
    `    <meta name="description" content="${escapeHtml(route.description)}" />`,
    `    <link rel="canonical" href="${canonical}" />`,
  ];

  if (route.noindex) {
    headTags.push('    <meta name="robots" content="noindex, nofollow" />');
  }

  headTags.push(
    `    <meta property="og:type" content="${route.type || "website"}" />`,
    `    <meta property="og:site_name" content="${SITE_NAME}" />`,
    `    <meta property="og:title" content="${escapeHtml(title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `    <meta property="og:url" content="${canonical}" />`,
  );

  if (imageUrl) {
    headTags.push(`    <meta property="og:image" content="${imageUrl}" />`);
  }

  headTags.push(
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
  );

  if (imageUrl) {
    headTags.push(`    <meta name="twitter:image" content="${imageUrl}" />`);
  }

  if (preloadImageUrl) {
    headTags.push(
      `    <link rel="preload" as="image" href="${preloadImageUrl}" data-seo-preload="true" />`,
    );
  }

  if (route.structuredData) {
    headTags.push(
      '    <script type="application/ld+json">',
      `      ${JSON.stringify(route.structuredData)}`,
      "    </script>",
    );
  }

  return headTags.join("\n");
}

export function renderRouteHtml(template, route) {
  const headMarkup = buildHeadMarkup(route);
  return template.replace(/\s*<title>[\s\S]*?<\/title>/, `\n${headMarkup}`);
}
