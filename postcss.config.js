import purgecss from "@fullhuman/postcss-purgecss";

const isProduction = process.env.NODE_ENV === "production";

export default {
  plugins: [
    isProduction &&
      purgecss({
        // Scan all source files for used CSS selectors
        content: ["./index.html", "./src/**/*.{jsx,js}"],
        // Safelist Bootstrap classes that may be dynamically composed at runtime
        safelist: {
          // Exact class names to always keep
          standard: ["active", "show", "fade", "collapsing", "was-validated"],
          // Patterns — keep all responsive variants of used utilities
          greedy: [
            /^col-/,
            /^offset-/,
            /^g-/,
            /^gy-/,
            /^gx-/,
            /^row$/,
            /^container/,
            /^d-/,
            /^text-/,
            /^align-items-/,
            /^justify-content-/,
            /^m[bsex]?-/,
            /^p[bsex]?y?-/,
            /^border/,
            /^btn/,
            /^form-/,
            /^visually-hidden/,
          ],
        },
        // Ensure :root and HTML element rules are never purged
        blocklist: [],
      }),
  ].filter(Boolean),
};
