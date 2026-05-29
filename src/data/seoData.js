export const SITE_NAME = "Justin B Hayes";
export const SITE_URL = "https://justinbhayes.com";
export const DEFAULT_IMAGE = "/assets/i/get-elite-consulting.webp";

export function buildFullTitle(title) {
  return title ? `${title} | ${SITE_NAME}` : SITE_NAME;
}

export function resolveSeoImageUrl(image, { fallbackToDefault = true } = {}) {
  const resolvedImage = image || (fallbackToDefault ? DEFAULT_IMAGE : "");

  if (!resolvedImage) {
    return "";
  }

  return resolvedImage.startsWith("http")
    ? resolvedImage
    : `${SITE_URL}${resolvedImage}`;
}

export const routeSeo = {
  home: {
    title: "Web Developer Portfolio",
    description:
      "Justin B Hayes is a front-end developer and website manager specializing in React, modernizing legacy platforms, and building performant, accessible web experiences.",
    path: "/",
    image: "/assets/i/justin.webp",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        jobTitle:
          "Website Manager, Development Team Lead, and Front-End Developer",
        sameAs: [
          "https://www.linkedin.com/in/justinbhayes",
          "https://github.com/justinbhayes",
          "https://x.com/justinbhayes",
        ],
      },
    ],
  },
  bio: {
    title: "About Justin",
    description:
      "Learn more about Justin B Hayes — web manager, front-end team lead, and developer with 19+ years of experience owning web operations and leading development teams.",
    path: "/bio/",
    image: "/assets/i/justin.webp",
  },
  portfolio: {
    title: "Portfolio",
    description:
      "Browse recent web projects by Justin B Hayes, including consulting websites and interactive React applications.",
    path: "/portfolio/",
    image: "/assets/i/product-finder.webp",
    preloadImageSrc: "/assets/i/get-elite-consulting-600.webp",
  },
  contact: {
    title: "Contact",
    description:
      "Contact Justin B Hayes about front-end development, web management, freelance work, and collaboration opportunities.",
    path: "/contact/",
    image: "/assets/i/justin.webp",
  },
  notFound: {
    title: "Page Not Found",
    description:
      "The page you requested could not be found. Browse available pages on justinbhayes.com.",
    path: "/404/",
    image: "",
    noindex: true,
  },
};

export const seoRoutes = [
  routeSeo.home,
  routeSeo.portfolio,
  routeSeo.bio,
  routeSeo.contact,
  routeSeo.notFound,
];
