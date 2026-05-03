# Lednexora Website Redevelopment - Start Here

Last updated: 03-05-2026
Purpose: master entry file for Codex, Antigravity, or any AI/dev continuing this project.

## Read order

Always read these files first before planning or coding:

1. `01-final-scope-and-sitemap.md`
2. `02-design-system-and-reference-style.md`
3. `03-page-by-page-section-plan.md`
4. `10-ai-working-rules.md`
5. `12-source-asset-inventory.md`

Then read the specific file for the task:

- CMS/admin work: `05-cms-admin-plan.md`
- Employee onboarding form: `06-employee-onboarding-form-plan.md`
- Hosting/backend/deployment: `07-shared-hosting-implementation-plan.md`
- Navigation/URLs: `08-navigation-url-map.md`
- Testing/launch: `09-qa-launch-checklist.md`
- Source screenshots/logo inventory: `12-source-asset-inventory.md`
- New session prompt: `initial-prompt-for-antigravity.md`
- Daily memory: `11-project-changelog.md`

## Current project truth

The client-approved scope is based on the updated final proposal PDF. Do not change the accepted page count, page grouping, or scope unless Thowfiq explicitly approves a change.

Accepted structured interfaces in scope: 17

- Main Corporate Pages: 4
- SAP Service Pages: 6
- Zoho Service Pages: 3
- CMS/Admin Managed Content Page: 1
- Footer Legal / Utility Pages: 3

## Key client preferences

- Premium enterprise consulting website.
- Rimini Street is the main visual/reference quality benchmark.
- Salesforce / IBM are references for clarity, whitespace, simple enterprise layout, and readable content.
- Kissflow was shared as a reference for tasteful gradient usage.
- Use blue/white corporate theme with controlled blue gradient accents.
- Use a free font that resembles Rimini/Proxima Nova style. Preferred: Source Sans 3.
- Zoho section is now included, but reduced to 3 important pages instead of recreating all old Zoho pages.
- SAP MBC Guide is not a fixed design page anymore; do not bring it back unless explicitly requested. Its idea may live inside managed insights/resources if needed.
- Employee onboarding form is included as a dynamic functional page.

## Build assumption

Primary build target is shared-hosting/cPanel compatible unless explicitly changed.

Confirmed hybrid stack:

- Public frontend: Next.js + TypeScript
- Frontend output: static export suitable for shared hosting/cPanel
- Backend only where needed: PHP + MySQL
- Backend use cases: CMS/admin, Insights & Media, onboarding form, and form handling
- Production must not require a Node.js server runtime

## Do not forget

This project will run for many days. Update `11-project-changelog.md` after important decisions, client feedback, page approvals, design approvals, implementation changes, and deployment decisions.



