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
    allowedHosts: [
      "freewhisper.furkanksl.com",
      "apps-freewhisper-hxvokz-4a8214-191-101-15-74.traefik.me",
    ],
  },
});
