// @ts-check
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import wix from "@wix/astro";
import wixPages from "@wix/astro-pages";
import cloudProviderFetchAdapter from "@wix/cloud-provider-fetch-adapter";

const isBuild = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://h6s-92e874502bd0c4-bdcustomtattoos.wix-site-host.com",
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
  },
  ...(isBuild && { adapter: cloudProviderFetchAdapter({}) })
});
