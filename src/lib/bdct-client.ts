import { posts } from "@wix/blog";
import { submissions } from "@wix/forms";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { PUBLIC_BDCT_OAUTH_CLIENT_ID } from "astro:env/client";

export const existingBdctClient = createClient({
  auth: OAuthStrategy({
    clientId: PUBLIC_BDCT_OAUTH_CLIENT_ID
  }),
  modules: {
    posts,
    submissions
  }
});
