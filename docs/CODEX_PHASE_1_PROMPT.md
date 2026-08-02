# Exact Codex Prompt — Finish Phase 1 Runtime Proof

Work in `jokerinkx3/Black-Diamond-Custom-Tattoos` on branch `phase-1-headless-staging`.

Read `README.md` and `docs/PHASE_1.md` before making changes. This is the private staging build for Black Diamond Custom Tattoos. The live classic Wix site and `bdcustomtattoos.com` must remain unchanged.

Use the Wix plugin and Wix-managed Headless workflow. This repository is an Astro 5 frontend that must be linked to the existing isolated Wix project named `BDCT Headless Staging`:

- MetaSite ID: `861a5bd5-7be9-4966-bb81-2cf1756ca865`
- Site ID: `b734fe3a-c135-49c0-b9a8-cc91bcde1a5d`

Run the supported installation and link flow:

```bash
npm install --ignore-scripts
npm create @wix/new@latest -- headless link
```

Select `BDCT Headless Staging` when prompted. Preserve Astro 5, `wix()`, `wixPages()`, `output: "server"`, `security: { checkOrigin: false }`, the Wix media domain, and the existing source structure. Do not create another Wix project and do not connect the production domain.

Set the public staging environment variable from `.env.example`:

```text
PUBLIC_BDCT_OAUTH_CLIENT_ID=028b2fc1-4180-4c49-92f5-9a62b1c96a2d
```

This is the public OAuth client ID for the dedicated staging connection to the existing Black Diamond Wix site. Do not request, print, commit, or use an OAuth secret.

Run the staging site and verify:

1. `/`, `/joker`, and `/linda` render the proposed copy and current temporary Wix tattoo images.
2. `/integration-status` successfully reads the existing Wix Blog.
3. `/blog` lists the current published Wix Blog posts.
4. A current `/post/[slug]` route renders its full Ricos body.
5. The Joker page uses existing form ID `d9cc00bc-95cd-4bc4-a4ec-f6f12e230d15`.
6. The Linda page uses existing form ID `b47a12b0-2ee8-4bda-9429-1b8a35eda515`.
7. Neither form includes reference-image upload.
8. The staging deployment remains `noindex` and the live site is untouched.

Do not submit either artist form yet. A submission creates a temporary contact and may trigger the existing live automation. Stop after the read-only runtime proof and report:

- Wix staging preview URL
- Build and runtime status
- Blog read result
- Form rendering result
- Any exact errors
- Any code changes required

Do not redesign the pages during this step. The copy is still awaiting owner approval and the visual system is only a Phase 1 staging shell.
