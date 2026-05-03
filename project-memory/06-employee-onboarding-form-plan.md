# Employee Onboarding Form Plan

Last updated: 03-05-2026

## Purpose

Client currently uses Microsoft Form and asked whether employee onboarding can be brought into the website.

This is included as:

- Employee Onboarding Form (Dynamic Functional Page)

## Recommended implementation

For shared hosting:

- frontend page styled with website design system
- PHP form submission handler
- MySQL storage
- email notification to admin/HR
- thank-you/success page
- spam protection
- server-side validation
- optional secure document upload support if confirmed

## Suggested form sections

Exact fields must be confirmed from the current Microsoft Form before development.

Suggested sections:

1. Personal Details
2. Contact Details
3. Employment Details
4. Address Details
5. Emergency Contact
6. Bank / Payroll Details if required
7. Document Upload if required
8. Consent / Declaration
9. Submit

## Suggested fields

Personal details:

- full name
- date of birth
- nationality
- gender optional if required

Contact details:

- email
- phone
- alternate phone optional

Employment details:

- position/role
- department
- joining date
- employment type
- reporting manager optional

Address details:

- current address
- permanent address if required

Emergency contact:

- contact person name
- relationship
- phone number

Uploads optional:

- ID proof only if required by client workflow
- address proof only if required
- resume/CV
- passport / Aadhaar / PAN / other ID documents only if explicitly confirmed
- supported formats: PDF, JPG, JPEG, PNG
- suggested max size: 5 MB per file unless hosting limit requires lower

## Database table suggestion

### onboarding_submissions

- id
- full_name
- email
- phone
- role
- department
- joining_date
- form_data_json
- uploaded_files_json
- status
- submitted_at
- updated_at

## Security rules

- validate all fields server-side
- sanitize output in admin views
- restrict file uploads by extension, MIME type, and size
- store uploads outside public root if hosting allows
- use unique filenames
- scan/validate uploaded file metadata as much as shared hosting permits
- add spam protection
- add clear consent text before collecting sensitive documents
- do not request Aadhaar/PAN/passport files unless client confirms they are needed
- do not email sensitive uploaded documents unless explicitly approved

## Scope boundary

This is a simple onboarding data collection form.

If client later wants:

- approval workflow
- HR tracking dashboard
- document verification flow
- sensitive document compliance workflow
- employee portal
- multi-stage onboarding

then treat it as separate scope or consider Zoho Forms / Zoho Creator / Microsoft Forms integration.

