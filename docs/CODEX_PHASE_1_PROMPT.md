# Codex guardrails — Phase 1 staging

The repository is already configured for the actual Wix-managed Headless staging project. Do **not** run `headless link`, create another Wix project, open another pull request, or connect the production domain.

## Existing configuration

- Branch: `phase-1-headless-staging`
- Wix staging project: `BDCT Headless Staging`
- Site ID: `afd7fd4e-9ed7-43dc-b074-1613b3a78208`
- Companion app ID: `70d88af5-972d-4f5a-8d78-6acdd7f8ab53`
- Wix staging URL: `https://h6s-92e874502bd0c4-bdcustomtattoos.wix-site-host.com/`
- Existing Black Diamond backend site ID: `3f97d70f-1c81-4df9-a196-0311e7345ae3`
- Existing-backend OAuth client ID: `028b2fc1-4180-4c49-92f5-9a62b1c96a2d`
- Joker form ID: `d9cc00bc-95cd-4bc4-a4ec-f6f12e230d15`
- Linda form ID: `b47a12b0-2ee8-4bda-9429-1b8a35eda515`

## Current status

The source passes `astro check` and the production Astro build in GitHub Actions. The workflow in `.github/workflows/phase1-build.yml` owns staging deployment and read-only runtime verification.

The only deployment credential is the GitHub Actions repository secret `WIX_CLI_API_KEY`. Do not print, commit, request in chat, or replace that secret. After it is configured, rerun the existing workflow rather than creating a new branch or PR.

Do not submit either artist form without separate authorization because a submission creates a live Black Diamond CRM contact and may trigger the existing automation.
