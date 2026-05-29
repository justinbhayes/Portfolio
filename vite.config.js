import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { renderRouteHtml, resolveRouteSeo } from "./scripts/seo-head.mjs";

function routeSeoPlugin() {
  return {
    name: "route-seo-html",
    apply: "serve",
    transformIndexHtml(html, context) {
      const requestUrl = context?.originalUrl || context?.path;
      const pathname = requestUrl
        ? new URL(requestUrl, "http://localhost").pathname
        : "/";
      return renderRouteHtml(html, resolveRouteSeo(pathname));
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), routeSeoPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  build: {
    // Target modern browsers for smaller bundle
    target: "es2020",
  },
});
