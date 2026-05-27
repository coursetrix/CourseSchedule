# AiiS Intake

A static HTML intake form for AI Innovation Studio (AiiS) deliverable submissions.

## Files

- `aiis-deliverable-submission.html` — the intake form source.
- `CLAUDE.md` — project context and form requirements.
- `amplify.yml` — optional AWS Amplify deployment configuration.

## Local preview

Run a local server from the repository root and open the form in your browser:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/aiis-deliverable-submission.html
```

## Power Automate configuration

Before deployment, update the form with the actual Power Automate HTTP trigger URL.

In `aiis-deliverable-submission.html`:

```js
const POWER_AUTOMATE_URL = "PASTE_POWER_AUTOMATE_URL_HERE";
```

Replace the placeholder with the live trigger endpoint.

## Deployment

This is a static HTML form and can be hosted from any static site host.

### AWS Amplify

Use the `amplify.yml` file to deploy from this repository to Amplify.

Recommended deployment options:

- Add this repo or branch to the existing PLA Intake Amplify app and serve the file as a second page.
- Or create a separate Amplify app for a dedicated test host like `aiis.coursetrix.com`.

### Coursetrix testing flow

1. Deploy this repository to Amplify or another static host.
2. Use the temporary Coursetrix URL for QA.
3. When the Cochise College server is ready, copy the same static file to the final host.

## Supported form behavior

- Required fields for participant information, submission details, and file upload
- Multiple file upload support for PDF, Word, JPEG, and PNG
- Total file size limit of 20 MB
- Local validation and user-friendly error messages
- Success screen with a close-window action

## Notes

- Keep the form self-contained and static so migrating between hosts is straightforward.
- The Power Automate flow should accept JSON with the payload fields documented in `CLAUDE.md`.
- If you want, create a separate form branch for temporary Coursetrix hosting and keep `main` ready for final deployment.
