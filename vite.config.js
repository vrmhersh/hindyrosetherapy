import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => {
  // Puts the right name into index.html (page title and description)
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const name = env.VITE_BRAND === "helen" ? "Helen Rose" : "Hindy Rose";
  return { plugins: [react(), { name: "brand-html", transformIndexHtml: (html) => html.replaceAll("%VITE_BRAND_NAME%", name) }] };
});
