# CMS Admin Plan

Last updated: 03-05-2026

## Purpose

The admin/CMS exists only for selected content updates. It must not make the entire website freely editable.

Primary admin-managed area:

- Insights & Media Updates

Additional editable areas if approved:

- testimonials
- selected business info blocks
- contact details
- short video links

## Public dynamic content

Insights & Media Updates should support:

- articles/blog posts
- short video entries or links
- media/resource updates
- optional categories/tags
- publish/unpublish status
- featured item flag

## Suggested admin screens

1. Login
2. Dashboard
3. Manage Insights/Articles
4. Add/Edit Insight
5. Manage Videos/Media Updates
6. Add/Edit Video/Media
7. Manage Testimonials
8. Manage Contact/Business Info if approved
9. Change password/logout

## Suggested database tables

### users

- id
- name
- email
- password_hash
- role
- created_at
- updated_at

### insights

- id
- title
- slug
- excerpt
- content
- category
- type (article/video/update)
- featured_image
- video_url
- status (draft/published)
- is_featured
- published_at
- created_at
- updated_at

### testimonials

- id
- client_name
- designation
- company
- quote
- logo/image optional
- status
- sort_order
- created_at
- updated_at

### settings

- id
- key
- value
- updated_at

## Shared hosting implementation

Use PHP + MySQL for admin/backend.

Requirements:

- password hashing
- session-based login
- server-side validation
- CSRF protection for admin forms
- image upload validation if upload is enabled
- file size limits
- safe slug generation
- publish/unpublish control

## Static vs dynamic

Fixed pages:

- Home
- About Lednexora
- SAP pages
- Zoho pages
- legal pages

Dynamic/admin-managed:

- Insights & Media Updates listing
- Insight/detail content
- video/media entries
- testimonials if approved
- selected business/contact info if approved

## Do not implement

- full page builder
- drag/drop editing
- arbitrary layout editing
- public user accounts
- ecommerce
- CRM automation unless separately approved
