import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  base: "/",
  build: {
    outDir: "docs",
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
