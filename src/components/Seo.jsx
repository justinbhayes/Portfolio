import { useEffect } from "react";
import {
  SITE_NAME,
  SITE_URL,
  buildFullTitle,
  resolveSeoImageUrl,
} from "../data/seoData";

function upsertMeta({ name, property, content }) {
  const selector = name
    ? `meta[name="${name}"]`
    : `meta[property="${property}"]`;
  const element =
    document.head.querySelector(selector) || document.createElement("meta");

  if (!element.parentNode) {
    document.head.appendChild(element);
  }

  if (name) {
    element.setAttribute("name", name);
  }

  if (property) {
    element.setAttribute("property", property);
  }

  element.setAttribute("content", content);
  element.setAttribute("data-seo-managed", "true");
}

function upsertCanonical(href) {
  const element =
    document.head.querySelector('link[rel="canonical"]') ||
    document.createElement("link");

  if (!element.parentNode) {
    document.head.appendChild(element);
  }

  element.setAttribute("rel", "canonical");
  element.setAttribute("href", href);
  element.setAttribute("data-seo-managed", "true");
}

function updateRobots(noindex) {
  const selector = 'meta[name="robots"]';
  const existing = document.head.querySelector(selector);

  if (!noindex) {
    if (existing?.getAttribute("data-seo-managed") === "true") {
      existing.remove();
    }
    return;
  }

  const element = existing || document.createElement("meta");
  if (!element.parentNode) {
    document.head.appendChild(element);
  }

  element.setAttribute("name", "robots");
  element.setAttribute("content", "noindex, nofollow");
  element.setAttribute("data-seo-managed", "true");
}

function updateImageMeta(imageUrl) {
  const ogSelector = 'meta[property="og:image"]';
  const twSelector = 'meta[name="twitter:image"]';
  const existingOg = document.head.querySelector(ogSelector);
  const existingTw = document.head.querySelector(twSelector);

  if (!imageUrl) {
    if (existingOg?.getAttribute("data-seo-managed") === "true") {
      existingOg.remove();
    }
    if (existingTw?.getAttribute("data-seo-managed") === "true") {
      existingTw.remove();
    }
    return;
  }

  upsertMeta({ property: "og:image", content: imageUrl });
  upsertMeta({ name: "twitter:image", content: imageUrl });
}

function updatePreload(preloadImage, imageUrl) {
  const existing =
    document.head.querySelector('link[data-seo-preload="true"]') ||
    document.head.querySelector('link[rel="preload"][as="image"]');

  if (!preloadImage || !imageUrl) {
    if (existing) {
      existing.remove();
    }
    return;
  }

  const element = existing || document.createElement("link");
  if (!element.parentNode) {
    document.head.appendChild(element);
  }

  element.setAttribute("rel", "preload");
  element.setAttribute("as", "image");
  element.setAttribute("href", imageUrl);
  element.setAttribute("data-seo-preload", "true");
}

function updateStructuredData(structuredData) {
  const existing =
    document.head.querySelector('script[data-seo-structured-data="true"]') ||
    document.head.querySelector('script[type="application/ld+json"]');

  if (!structuredData) {
    if (existing) {
      existing.remove();
    }
    return;
  }

  const element = existing || document.createElement("script");
  if (!element.parentNode) {
    document.head.appendChild(element);
  }

  element.setAttribute("type", "application/ld+json");
  element.setAttribute("data-seo-structured-data", "true");
  element.textContent = JSON.stringify(structuredData);
}

function Seo({
  title,
  description,
  path = "/",
  image = "",
  type = "website",
  noindex = false,
  structuredData,
  preloadImage = false,
}) {
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = buildFullTitle(title);
  const imageUrl = resolveSeoImageUrl(image, { fallbackToDefault: false });

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta({ name: "description", content: description });
    upsertCanonical(canonical);
    updateRobots(noindex);

    upsertMeta({ property: "og:type", content: type });
    upsertMeta({ property: "og:site_name", content: SITE_NAME });
    upsertMeta({ property: "og:title", content: fullTitle });
    upsertMeta({ property: "og:description", content: description });
    upsertMeta({ property: "og:url", content: canonical });

    upsertMeta({ name: "twitter:card", content: "summary_large_image" });
    upsertMeta({ name: "twitter:title", content: fullTitle });
    upsertMeta({ name: "twitter:description", content: description });

    updateImageMeta(imageUrl);
    updatePreload(preloadImage, imageUrl);
    updateStructuredData(structuredData);
  }, [
    canonical,
    description,
    fullTitle,
    imageUrl,
    noindex,
    preloadImage,
    structuredData,
    type,
  ]);

  return null;
}

export default Seo;
