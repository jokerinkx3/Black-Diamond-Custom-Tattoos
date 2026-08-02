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

### Isolated staging project

- Wix project name: `BDCT Headless Staging`
- MetaSite ID: `861a5bd5-7be9-4966-bb81-2cf1756ca865`
- Site ID: `b734fe3a-c135-49c0-b9a8-cc91bcde1a5d`
- Temporary Wix URL: `https://bdcustomtattoos.wixstudio.com/bdct-headless-stagin`

The production domain remains attached to the existing classic Wix site throughout development.

## Architecture

The staging frontend is an Astro 5 project hosted through Wix-managed Headless. It uses a dedicated OAuth app on the existing Black Diamond site for visitor-scoped Blog reads and submissions to the existing Wix Form IDs. The current forms retain their contact mapping, automations, spam protection, questions, and Wix dashboard submission history.

No reference-image upload is included in the initial inquiry. Reference images remain part of the direct contact phase.

## Local setup

The Wix CLI must link this Astro project to the isolated staging project before it can run on Wix hosting:

```bash
npm install --ignore-scripts
npm create @wix/new@latest -- headless link
```

Select **BDCT Headless Staging** when prompted. Astro 5 is required.

Create `.env.local` from `.env.example`, then run:

```bash
npm run dev
```

Do not release to the production domain during Phase 1.
