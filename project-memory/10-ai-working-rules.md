# AI Working Rules

Last updated: 03-05-2026

These rules are for Codex, Antigravity, and any AI/dev continuing the project.

## First rule

The accepted proposal scope is locked. Do not change page count, page names, or grouping unless Thowfiq explicitly approves.

## Required read order

Before any development task, read:

1. `00-start-here.md`
2. `01-final-scope-and-sitemap.md`
3. `02-design-system-and-reference-style.md`
4. This file

Then read the task-specific file.

## Do

- follow the accepted 17-interface scope
- preserve the accepted page grouping
- keep the website premium enterprise consulting style
- use Source Sans 3 or another approved Rimini-like free font
- use controlled blue gradients
- keep content concise and professional
- keep admin edit areas limited
- build public frontend with Next.js + TypeScript static export
- use PHP/MySQL only for backend/admin/forms/onboarding
- update `11-project-changelog.md` after important decisions
- ask before changing scope

## Do not

- reintroduce SAP MBC Guide as a fixed design page
- recreate all old Zoho pages one-to-one
- use Proxima Nova without a license
- use paid assets without approval
- invent client logos, testimonials, certifications, or case studies
- create extra pages casually
- make the whole site admin-editable
- use a full CMS/page builder unless explicitly approved
- require Node.js server runtime in production if shared hosting/cPanel deployment is confirmed
- build public website pages as PHP templates
- overwrite client-approved structure

## One task at a time

Only do the requested page/module/task. Do not start the full project from a memory file. Stop after completing the requested task, summarize files changed, and update changelog.

## When unsure

If unsure whether something is design improvement or scope change, pause and ask Thowfiq.

Examples of scope changes:

- adding a new public page
- adding complex HR workflow to onboarding
- adding WhatsApp API workflow beyond direct chat
- adding CRM automation
- adding file upload if not confirmed
- adding payment/user login/portal behavior

## Bug handling

If a bug appears:

1. reproduce it
2. identify affected page/component/file
3. check if it violates scope or implementation rules
4. fix the smallest correct area
5. test again
6. record important fix in changelog

## Session continuity

At the end of each work session, update `11-project-changelog.md` with:

- date
- completed work
- files changed
- decisions made
- open questions
- next step


