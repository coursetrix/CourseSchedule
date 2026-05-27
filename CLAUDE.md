# AiiS Intake — Project Context

## Overview
A public-facing HTML intake form for AI Innovation Studio (AiiS) Deliverable Submissions at Cochise College. Participants (faculty and staff) submit deliverables without needing a Cochise Microsoft account. The form is backed by Microsoft Power Automate + SharePoint.

## Files
- `aiis-deliverable-submission.html` — The intake form. This is the source of truth.

## Deployment
Deployment repo and hosting location TBD. Pattern will mirror the PLA Credit Request form:
- Copy to a deployment repo after edits
- Push triggers AWS Amplify auto-deploy to coursetrix.com (or future Cochise College site)

## Form Fields
All fields are required.

**Participant Information**
- First Name, Last Name
- Email (triggers confirmation email)
- Participant Type (dropdown: Innovation Fellow, General Faculty, Staff)
- Cohort (dropdown: Cohort 1, Cohort 2)

**Submission Details**
- Level (dropdown: Level 1, Level 2)
- Deliverable Type (dropdown: Reflection Journal, Assignment Design Plan, Enhanced AI Assignment, Other)
- Describe your deliverable (textarea — 2–3 sentences)

**Upload Deliverable**
- File upload (required, multiple files allowed, PDF/Word/JPEG/PNG, 20 MB total max)

## Submission Flow
1. Participant fills out form and uploads deliverable file(s)
2. JS base64-encodes files and POSTs JSON to Power Automate HTTP trigger
3. Power Automate:
   - Creates a participant folder in SharePoint: `Last Name, First Name`
   - Saves uploaded files to the folder
   - Creates a submission summary in the folder (audit record)
   - Sends confirmation email to the participant's email address
   - Notifies Martin Versluis for verification and ESP processing
4. Participant sees a success screen with a Close Window button

## Power Automate
- **URL** is hardcoded in the form's `<script>` block as `POWER_AUTOMATE_URL` — currently set to placeholder `"PASTE_POWER_AUTOMATE_URL_HERE"`
- **Trigger:** HTTP trigger set to "Anyone" (public, no auth required)
- **SharePoint site:** TBD
- **Document library:** TBD
- **Folder path expression (suggested):** `concat(triggerBody()?['lastName'], ', ', triggerBody()?['firstName'])`

## JSON Payload Fields
The form POSTs this shape to Power Automate:
```json
{
  "firstName":       "string",
  "lastName":        "string",
  "email":           "string",
  "participantType": "Innovation Fellow | General Faculty | Staff",
  "cohort":          "Cohort 1 | Cohort 2",
  "level":           "Level 1 | Level 2",
  "deliverableType": "Reflection Journal | Assignment Design Plan | Enhanced AI Assignment | Other",
  "description":     "string",
  "submittedAt":     "ISO 8601 timestamp",
  "files": [
    { "name": "string", "type": "MIME type", "sizeKB": 0, "content": "base64 string" }
  ]
}
```

## Success Message
> "Your deliverable has been received. A confirmation has been sent to your email address. Martin Versluis will follow up regarding verification and ESP processing."

## Pending
- Set up Power Automate flow and paste trigger URL into `POWER_AUTOMATE_URL`
- Decide on SharePoint site and document library for storage
- Set up deployment repo / hosting location
- Confirm whether email routing is needed (e.g. by participant type or cohort) or if all submissions notify Martin directly
