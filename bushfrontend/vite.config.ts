import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://backend.bushtree.ru/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "@css",
        replacement: fileURLToPath(new URL("./src/css", import.meta.url)),
      },
      {
        find: "@cmp",
        replacement: fileURLToPath(
          new URL("./src/shared/cmp", import.meta.url)
        ),
      },
      {
        find: "@stores",
        replacement: fileURLToPath(
          new URL("./src/shared/stores", import.meta.url)
        ),
      },
      {
        find: "@use",
        replacement: fileURLToPath(
          new URL("./src/shared/use", import.meta.url)
        ),
      },
      {
        find: "@node_modules",
        replacement: fileURLToPath(
          new URL("../../node_modules", import.meta.url)
        ),
      },
      {
        find: "@utils",
        replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/css/style_vars.scss";`,
      },
    },
  },
});
