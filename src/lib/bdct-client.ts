import { posts } from "@wix/blog";
import { submissions } from "@wix/forms";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { PUBLIC_BDCT_OAUTH_CLIENT_ID } from "astro:env/client";

let client: ReturnType<typeof createClient> | undefined;

export function getExistingBdctClient() {
  if (!client) {
    client = createClient({
      auth: OAuthStrategy({
        clientId: PUBLIC_BDCT_OAUTH_CLIENT_ID
      }),
      modules: {
        posts,
        submissions
      }
    });
  }

  return client as ReturnType<typeof createClient> & {
    posts: typeof posts;
    submissions: typeof submissions;
  };
}
