import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const PORT = 8081;

export default defineConfig({
  // base: env.VITE_BASE_PATH,
  plugins: [react()],
  // base: "/github-repositories-explorer/",
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), "node_modules/$1"),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), "src/$1"),
      },
    ],
  },
  server: { port: PORT, host: true },
  preview: { port: PORT, host: true },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
});
