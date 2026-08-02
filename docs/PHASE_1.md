# Phase 1 — Integration Proof

## Completed before runtime deployment

- Created a full pre-overhaul duplicate of the live classic Wix site.
- Created the isolated `BDCT Headless Staging` Wix project.
- Audited the live Joker and Linda Wix Form schemas.
- Confirmed both forms already upsert contacts and retain their existing Wix automations.
- Confirmed neither initial inquiry asks for reference-image uploads.
- Audited the existing Wix Blog and retrieved a complete live post including its Ricos rich-content body.
- Created a dedicated OAuth app on the existing Black Diamond Wix site for the staging frontend.
- Added the proposed homepage, Joker and Linda copy to the staging source.
- Added the current artist form field targets and option values to the staging source without altering the live schemas.
- Added staging-only `noindex` and `robots.txt` protection.

## Required runtime proof

1. Link this Astro 5 repository to the `BDCT Headless Staging` Wix project with the Wix CLI.
2. Confirm `/integration-status` retrieves the existing Wix Blog through the dedicated OAuth client.
3. Submit one labeled test inquiry through Joker's existing form ID.
4. Verify the submission, CRM contact, existing automation and `/thankyou-joker` route.
5. Submit one labeled test inquiry through Linda's existing form ID.
6. Verify the submission, CRM contact, existing automation and `/thankyou-linda` route.
7. Delete the two test contacts/submissions after recording the result.

The two form submissions intentionally create temporary records in the live Black Diamond CRM and require explicit approval immediately before execution.

## Live systems that remain authoritative

- Wix Contacts / CRM
- `Project Qualification-Joker Ink`
- `Project Qualification-Linda G`
- Existing Wix Automations attached to those forms
- Existing Wix Blog and all `/post/...` content
- Existing Wix Media Manager
- Existing Wix business dashboard

## Current copy status

The source includes proposed copy for review. It is not locked as final production copy until approved by the owner.
