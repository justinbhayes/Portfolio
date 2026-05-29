import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  SITE_NAME,
  SITE_URL,
  buildFullTitle,
  resolveSeoImageUrl,
} from "../data/seoData";

function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
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
  }, [fullTitle]);

  return (
    <Helmet>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}

      {preloadImage ? <link rel="preload" as="image" href={imageUrl} /> : null}

      {structuredData ? (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      ) : null}
    </Helmet>
  );
}

export default Seo;
