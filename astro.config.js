import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://taep96.moe",
    integrations: [
        tailwind(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
        sitemap(),
    ],
});
