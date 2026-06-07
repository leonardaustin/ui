import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@leonardaustin/ui/styles.css",
        replacement: resolve(root, "../../packages/ui/src/styles.css"),
      },
      {
        find: "@leonardaustin/ui",
        replacement: resolve(root, "../../packages/ui/src/index.ts"),
      },
    ],
  },
  server: {
    allowedHosts: true,
  },
});
