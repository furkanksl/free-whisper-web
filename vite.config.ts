import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Use the line below when deploying to production with a specific domain
  base: "https://freewhisper.furkanksl.com/",
  preview: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "freewhisper.furkanksl.com",
      "apps-freewhisper-hxvokz-4a8214-191-101-15-74.traefik.me",
      "*.traefik.me", // Allows all subdomains of traefik.me
    ],
    cors: true,
  },
});
