# Black Diamond Custom Tattoos — Headless Rebuild

Code-first Wix-managed Headless staging project for the Black Diamond Custom Tattoos website overhaul.

## Phase 1 purpose

Prove that a Wix-hosted Astro frontend can use the existing Black Diamond Wix business backend without replacing the live forms, contacts, automations, blog, or media library.

### Existing business backend

- Live Wix site ID: `3f97d70f-1c81-4df9-a196-0311e7345ae3`
- Joker form: `Project Qualification-Joker Ink`
- Joker form ID: `d9cc00bc-95cd-4bc4-a4ec-f6f12e230d15`
- Linda form: `Project Qualification-Linda G`
- Linda form ID: `b47a12b0-2ee8-4bda-9429-1b8a35eda515`
- Existing Wix Blog: 11 published posts at the current `/post/...` paths

### Wix-managed staging frontend

- Wix project name: `BDCT Headless Staging`
- Site ID: `afd7fd4e-9ed7-43dc-b074-1613b3a78208`
- Wix-managed companion app ID: `70d88af5-972d-4f5a-8d78-6acdd7f8ab53`
- Staging URL: `https://h6s-92e874502bd0c4-bdcustomtattoos.wix-site-host.com/`

The production domain remains attached to the existing classic Wix site throughout development.

## Architecture

The staging frontend is an Astro 5 project hosted through Wix-managed Headless. It is already configured through `wix.config.json` for the actual editorless staging project. A dedicated OAuth app on the existing Black Diamond site provides visitor-scoped access to the current Wix Blog and submissions to the current artist Wix Form IDs.

The existing forms retain their contact mapping, automations, spam protection, questions, and Wix dashboard submission history. No reference-image upload is included in the initial inquiry; reference images remain part of the direct contact phase.

## Validation and deployment

GitHub Actions performs the real Astro type-check and production build on every staging-branch update. The source currently passes both checks.

Deployment is handled by the same workflow after the repository contains the Wix CLI credential secret named `WIX_CLI_API_KEY`. The deployment job then authenticates the Wix CLI, pulls the Wix-managed runtime environment, builds through Wix, releases to the staging host, and smoke-tests the homepage, artist pages, integration status, Blog, and a complete live Blog post.

The workflow never connects or modifies the production domain.
