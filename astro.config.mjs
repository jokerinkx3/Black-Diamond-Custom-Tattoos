import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import wix from "@wix/astro";
import wixPages from "@wix/astro-pages";

export default defineConfig({
  site: "https://bdcustomtattoos.wixstudio.com/bdct-headless-stagin",
  output: "server",
  integrations: [wix(), wixPages(), react(), sitemap()],
  security: {
    checkOrigin: false
  },
  image: {
    domains: ["static.wixstatic.com"]
  },
  env: {
    schema: {
      PUBLIC_BDCT_OAUTH_CLIENT_ID: envField.string({
        context: "client",
        access: "public"
      })
    }
  }
});
