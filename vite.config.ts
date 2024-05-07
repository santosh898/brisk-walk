import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: "prompt",
      includeAssets: [
        "beepd.mp3",
        "plus.svg",
        "minus.svg",
        "stop.svg",
        "play.svg",
        "brisk-walk.webp",
      ],
      manifest: {
        name: "Brisk Walk",
        short_name: "Brisk Walk",
        description:
          "Enhance your walks with Brisk Walk! Pace with our app to stay motivated. Install now for a healthier stride!",
        theme_color: "#f0eeee",
        background_color: "#2c2c2c",
        start_url: ".",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "brisk-walk.webp",
            sizes: "512x512",
            type: "image/webp",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
