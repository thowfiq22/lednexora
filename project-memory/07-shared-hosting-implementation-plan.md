# Shared Hosting Implementation Plan

Last updated: 03-05-2026

## Confirmed stack

The accepted implementation stack is a hybrid build:

- Public frontend: Next.js + TypeScript
- Frontend output: static export for shared hosting / cPanel deployment
- Backend only where needed: PHP + MySQL
- Backend use cases: CMS/admin, Insights & Media content, onboarding form, and form/contact handling
- Production must not require a Node.js server runtime

## Frontend implementation

Use modern industry-standard Next.js + TypeScript practices:

- Next.js with TypeScript
- static export compatible configuration
- component-based architecture
- reusable layout components
- responsive CSS/design system
- Source Sans 3 font setup
- SEO metadata per page
- optimized static assets
- no server-only Next.js features in production

## Next.js static export rules

Do:

- build pages/routes that can export statically
- use static data files or API-generated JSON only when compatible
- keep public pages deployable as static files
- use client-side fetch only for approved dynamic data if needed
- verify export output before deployment

Do not:

- depend on Next.js server runtime in production
- use server actions for production shared hosting
- require edge/runtime functions
- require Vercel-only features
- build public website pages as PHP templates

## Backend/admin implementation

Use PHP + MySQL only for dynamic backend needs:

- admin login/session
- Insights & Media content management
- article/video/media data
- onboarding form submission handling
- contact form handling if required
- email notifications
- database storage

## Suggested folder structure

```text
F:\lednexora\
  project-memory\
  source-content\
  frontend\
    app-or-pages\
    components\
    styles\
    public\
    package.json
    next.config.js
    tsconfig.json
  backend\
    admin\
    api\
    includes\
    database\
    uploads\
```

Frontend and backend should stay clearly separated.

## Deployment approach

1. Build/export Next.js frontend to static output.
2. Upload static frontend output to shared hosting public web root.
3. Upload PHP backend/admin/API folders as needed.
4. Configure MySQL database.
5. Configure PHP backend database credentials securely.
6. Test frontend pages.
7. Test contact/onboarding/CMS workflows.
8. Test mobile, links, SEO, and forms.

## Forms

Contact and onboarding forms may submit to PHP endpoints.

They must include:

- server-side validation
- spam protection
- email notification
- database save where required
- thank-you response
- error state

## SEO files

Include in frontend export:

- `sitemap.xml`
- `robots.txt`
- page metadata
- Open Graph metadata
- favicon/browser icons

## Do not

- build public site pages as PHP templates
- require Node.js runtime after deployment
- require Vercel unless scope changes
- require Sanity unless hosting/deployment path changes
- hardcode sensitive credentials in frontend
- store database passwords in public files
