import { Helmet } from "react-helmet-async";

const SITE_NAME = "Justin B Hayes";
const SITE_URL = "https://justinbhayes.com";
const DEFAULT_IMAGE = "/assets/i/get-elite-consulting.webp";

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
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

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
