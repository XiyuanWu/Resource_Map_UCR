import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Ensure .env next to this file (frontend/) is always loaded (default),
  // especially when the dev server is started from the frontend directory.
  envDir: ".",
});
