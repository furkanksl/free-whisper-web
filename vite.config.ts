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
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    cors: true,
    hmr: {
      host: "localhost",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: ["all"], // Allow all hosts as an array
    cors: {
      origin: "*", // Allow all origins
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    },
  },
});
