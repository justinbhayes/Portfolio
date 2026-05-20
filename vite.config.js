import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react-router-dom")
          ) {
            return "react";
          }
          if (id.includes("node_modules/bootstrap")) {
            return "bootstrap";
          }
          if (id.includes("node_modules/react-icons")) {
            return "icons";
          }
          if (id.includes("node_modules/@emailjs")) {
            return "email";
          }
        },
      },
    },
    // Target modern browsers for smaller bundle
    target: "es2020",
  },
});
