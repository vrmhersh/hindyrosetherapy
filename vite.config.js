import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => {
  // Puts the right name into index.html (page title and description)
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const helen = env.VITE_BRAND === "helen";
  const name = helen ? "Helen Rose" : "Hindy Rose";
  // Browser-tab icon and iPhone home-screen icon. Each brand uses its own folder in /public (helen or hindy).
  const dir = helen ? "helen" : "hindy";
  const icons = [
    { tag: "link", attrs: { rel: "icon", href: `/${dir}/favicon.ico`, sizes: "48x48" }, injectTo: "head" },
    { tag: "link", attrs: { rel: "icon", type: "image/png", href: `/${dir}/favicon-32.png`, sizes: "32x32" }, injectTo: "head" },
    { tag: "link", attrs: { rel: "icon", type: "image/png", href: `/${dir}/icon-192.png`, sizes: "192x192" }, injectTo: "head" },
    { tag: "link", attrs: { rel: "apple-touch-icon", href: `/${dir}/apple-touch-icon.png` }, injectTo: "head" },
  ];
  return { plugins: [react(), { name: "brand-html", transformIndexHtml: (html) => ({ html: html.replaceAll("%VITE_BRAND_NAME%", name), tags: icons }) }] };
});
