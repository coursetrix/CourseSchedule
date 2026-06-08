# AiiS Intake — Project Context

## Overview
A public-facing HTML intake form for AI Innovation Studio (AiiS) Deliverable Submissions at Cochise College. Participants (faculty and staff) submit deliverables without needing a Cochise Microsoft account. The form is backed by Microsoft Power Automate + SharePoint.

## Files
- `aiis-deliverable-submission.html` — The intake form. This is the source of truth.
- `index.html` — Redirect shim; sends visitors to `aiis-deliverable-submission.html`.

## Deployment
Two repos are kept in sync. Always push to both after every change:

```
git push origin main
git push deploy HEAD:aiis
```

| Remote | Repo | Branch |
|--------|------|--------|
| `origin` | `CochiseCollege/AiiS-Intake` | `main` |
| `deploy` | `coursetrix/CourseSchedule` | `aiis` |

- **Live URL:** https://aiis.coursetrix.com
- AWS Amplify watches `coursetrix/CourseSchedule:aiis` and auto-deploys on push.
- `index.html` at the repo root redirects to the form (required because Amplify serves `index.html` by default).

## Form Fields
All fields are required unless noted.

**Participant Information**
- First Name, Last Name
- Email (triggers confirmation email to participant)
- Participant Type (dropdown: Faculty, Staff, Military, K12)
- Cohort (dropdown: Cohort 1, Cohort 2)

**Submission Details**
- Level (dropdown: Level 1, Level 2, Level 3)
- Session (dropdown: Session 1–9) — shown only when Level 1 is selected
- Deliverable Type (dropdown: Studio Session Deliverable, Reflection Journal, Enhanced AI Assignment)
- Describe your deliverable (textarea — 2–3 sentences)

**Upload Deliverable**
- File upload (required, multiple files allowed, PDF/Word/JPEG/PNG, 20 MB total max)

## Submission Flow
1. Participant fills out form and uploads deliverable file(s)
2. JS base64-encodes files and POSTs JSON to Power Automate HTTP trigger
3. Power Automate:
   - Initializes `FolderPath` variable: `concat(triggerBody()?['lastName'], ', ', triggerBody()?['firstName'])`
   - Loops over `files` array (Apply to each) — saves each uploaded file to SharePoint at `/Studio Submissions/{FolderPath}/`
   - Composes an HTML submission summary document
   - Saves `submission-summary.html` to the same SharePoint folder
   - Sends notification email to `versluism@cochise.edu`
   - Sends confirmation email to the participant's email address
4. Participant sees a success screen with a **Submit Another** button that resets the form

## Power Automate
- **URL** is hardcoded in the form's `<script>` block as `POWER_AUTOMATE_URL` — live trigger URL is set
- **Trigger:** HTTP trigger set to "Anyone" (public, no auth required)
- **SharePoint site:** FIPSE Grant — `https://cochisecollege.sharepoint.com/sites/FIPSEGrant`
- **Document library folder:** `/Studio Submissions/`
- **Folder path expression:** `concat(triggerBody()?['lastName'], ', ', triggerBody()?['firstName'])`
- **Connected as:** `versluism@cochise.edu`

## Power Automate Flow Steps
1. **manual** — HTTP trigger (receives JSON payload)
2. **Initialize variable** — `FolderPath` (String): `concat(triggerBody()?['lastName'], ', ', triggerBody()?['firstName'])`
3. **Apply to each** — loops over `triggerBody()?['files']`
   - **Create file** — saves uploaded file to `/Studio Submissions/{FolderPath}/`, file content: `base64ToBinary(item()?['content'])`
4. **Compose** — builds HTML submission summary (see template below)
5. **Create file 1** — saves `submission-summary.html` to `/Studio Submissions/{FolderPath}/`, file content: `outputs('Compose')`
6. **Send an email (V2)** — notifies `versluism@cochise.edu`, subject: `AiiS Submissions`
7. **Send an email (V2) 1** — confirmation to participant (`triggerBody()?['email']`), subject: `AiiS Deliverable Submission Received`

## JSON Payload Fields
The form POSTs this shape to Power Automate:
```json
{
  "firstName":       "string",
  "lastName":        "string",
  "email":           "string",
  "participantType": "Faculty | Staff | Military | K12",
  "cohort":          "Cohort 1 | Cohort 2",
  "level":           "Level 1 | Level 2 | Level 3",
  "session":         "Session 1–9 | empty string if not Level 1",
  "deliverableType": "Studio Session Deliverable | Reflection Journal | Enhanced AI Assignment",
  "description":     "string",
  "submittedAt":     "ISO 8601 timestamp",
  "files": [
    { "name": "string", "type": "MIME type", "sizeKB": 0, "content": "base64 string" }
  ]
}
```

## Security

### Current State
- **Honeypot field** (`#website`, hidden) is implemented — silently blocks bots that auto-fill forms
- **hCaptcha is next** — IT security requires a recognized third-party CAPTCHA solution

### Pending: hCaptcha Integration
Google reCAPTCHA Enterprise was attempted but requires Google Cloud billing setup. hCaptcha is the chosen replacement.

**Steps to complete:**
1. Go to **hcaptcha.com**, create a free account
2. Add site with domain `aiis.coursetrix.com`
3. Get **Site Key** and **Secret Key**
4. Check if Cochise College qualifies for the hCaptcha nonprofit/education program (removes usage limits)
5. Update the form:
   - Add hCaptcha script tag to `<head>`
   - Replace `recaptchaToken = "pending-captcha-setup"` with hCaptcha token generation
6. Update Power Automate:
   - Re-enable the **HTTP** step (currently disabled) — change URI to `https://hcaptcha.com/siteverify`
   - Update Body with hCaptcha secret key and token
   - Re-enable the **Condition** step (currently disabled) — verify `success` is `true`

### Power Automate CAPTCHA Steps (currently disabled)
- **HTTP** — calls CAPTCHA verify API, currently set to Google's siteverify endpoint (needs updating to hCaptcha)
- **Condition** — checks `outputs('HTTP')?['body']?['success']` is equal to `true`, goes to **False → Terminate** if check fails
- Condition is currently hardcoded to `1 is equal to 1` (always True) as a temporary bypass

## Success Message
> "Your deliverable has been received. A confirmation has been sent to your email address."

## Compose Step HTML Template
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; max-width: 640px; margin: 40px auto; color: #111; }
    h1 { background: #0f2d52; color: #fff; padding: 16px 20px; font-size: 18px; margin: 0; }
    .section { padding: 20px; border: 1px solid #e5e7eb; border-top: none; }
    h2 { color: #0f2d52; font-size: 14px; text-transform: uppercase; letter-spacing: .05em; margin: 20px 0 10px; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    td { padding: 6px 0; vertical-align: top; }
    td:first-child { color: #6b7280; width: 200px; }
    hr { border: none; border-top: 1px solid #e5e7eb; margin: 16px 0; }
    .footer { font-size: 12px; color: #9ca3af; margin-top: 8px; }
  </style>
</head>
<body>
  <h1>AiiS Deliverable Submission — Summary</h1>
  <div class="section">
    <h2>Participant Information</h2>
    <table>
      <tr><td>Name</td><td><strong>@{triggerBody()?['firstName']} @{triggerBody()?['lastName']}</strong></td></tr>
      <tr><td>Email</td><td>@{triggerBody()?['email']}</td></tr>
      <tr><td>Participant Type</td><td>@{triggerBody()?['participantType']}</td></tr>
      <tr><td>Cohort</td><td>@{triggerBody()?['cohort']}</td></tr>
    </table>
    <hr />
    <h2>Submission Details</h2>
    <table>
      <tr><td>Level</td><td>@{triggerBody()?['level']}</td></tr>
      <tr><td>Session</td><td>@{triggerBody()?['session']}</td></tr>
      <tr><td>Deliverable Type</td><td>@{triggerBody()?['deliverableType']}</td></tr>
      <tr><td>Description</td><td>@{triggerBody()?['description']}</td></tr>
    </table>
    <hr />
    <p class="footer">Submitted: @{triggerBody()?['submittedAt']}</p>
  </div>
</body>
</html>
```
