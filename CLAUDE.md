# Coursetrix — CLAUDE.md

Developer reference for working with this codebase using Claude Code.

## Project Overview

Coursetrix is a browser-based course planning tool for instructors and instructional designers. It lets educators blueprint a course (modules, assignments, learning outcomes, date ranges) before building it in an LMS. Everything runs client-side — no backend, no account required.

**Live site:** coursetrix.com
**License:** PolyForm Noncommercial License (free for personal and educational use; commercial use requires written permission)

---

## Architecture

Single-page application built with vanilla HTML, CSS, and JavaScript. No frameworks, no build process.

| File | Purpose |
|------|---------|
| `index.html` | All markup including every modal; loads `app.js` and CDN libraries |
| `app.js` | All application logic (~2900 lines); one file, no modules |
| `styles.css` | All styles; uses CSS custom properties for theming |
| `Coursetrix logo.png` | Header logo |
| `facultyguide.html` | Standalone faculty guide page (noindex) |
| `SIPWireframe.html` | Standalone SIP wireframe page (noindex) |
| `pla-credit-request.html` | PLA Credit Request intake form |
| `institution-security-overview.html` | Security overview document |

**CDN dependencies** (loaded in `index.html`):
- [SortableJS 1.15.0](https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js) — drag-and-drop
- [jsPDF](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js) — PDF generation
- [jsPDF AutoTable](https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js) — PDF table formatting

**Analytics:** Umami (privacy-focused, no cookies, no personal data)

**Cache busting:** `app.js` is loaded with a version query string (e.g. `app.js?v=3.2.0`). Update this in `index.html` on every release.

---

## State

All application data lives in a single `state` object, persisted to `localStorage` automatically on every change and downloadable as JSON.

```javascript
state = {
    courseName: '',
    courseStartDate: '',        // YYYY-MM-DD
    courseEndDate: '',          // YYYY-MM-DD
    gradingMode: 'points',      // 'points' | 'weighted'
    assignmentTypes: [],        // [{ name, points, weight }]
    cllos: [],                  // [{ id, description, plloIds[] }]
    pllos: [],                  // [{ id, description }]
    programTitle: '',
    academicDivision: '',
    modules: [                  // ordered array
        {
            id,
            name,
            startDate,          // YYYY-MM-DD
            endDate,            // YYYY-MM-DD
            topic,
            collapsed,
            assignments: [
                {
                    id,
                    name,
                    type,
                    points,
                    weight,
                    dueDate,    // YYYY-MM-DD
                    clloIds[]
                }
            ]
        }
    ]
}
```

Key functions: `saveToLocalStorage()`, `loadFromLocalStorage()`, `saveToJson()`, `loadFromJson(file)`, `renderAll()`

---

## Feature Areas

### Course Setup
- Course name, start/end dates, grading mode, assignment types
- **Points mode:** each assignment type has a point value; totals tracked in Assignment Type Summary
- **Weighted mode:** each assignment type has a percentage weight; point values hidden from all views and exports; running total shows when weights reach 100%
- `setGradingMode(mode)` — switches mode and re-renders the summary

### Learning Outcomes
- **CLLOs** (Course-Level Learning Outcomes): defined with descriptions; each can be mapped to one or more PLLOs
- **PLLOs** (Program-Level Learning Outcomes): defined with descriptions; managed via the Manage PLLOs modal
- Division/program dropdowns cascade to set the program context
- `renderCllos()`, `renderPllos()`, `addCllo()`, `addPllo()`

### Schedule Builder (Modules & Assignments)

**Modules:**
- Fixed time containers with a name, date range, and optional topic
- Module order is intentional and cannot be changed by dragging — dates are tied to sequence and reordering would invalidate them
- Collapsible individually or all at once (`expandAllModules()`, `collapseAllModules()`)
- `openModuleModal(moduleId)`, `saveModule()`, `deleteModule(id)`

**Assignments:**
- Each assignment belongs to a module and has: name, type, points/weight, due date, CLLO alignment
- Due date is constrained to the module's date range in the modal; validated on save
- **Duplicate** (⧉ button): copies all fields, appends " (Copy)", inserts immediately below the original — `duplicateAssignment(moduleId, assignmentId)`
- **Move** (→ button): opens a fixed-position dropdown listing all other modules; selecting one moves the assignment to the bottom of that module — `openMoveMenu()`, `moveAssignmentToModule()`
- **Drag-and-drop**: assignments can be dragged within a module or across modules using SortableJS; auto-scroll enabled (`bubbleScroll: true`, `scrollSensitivity: 80`, `scrollSpeed: 15`)
- **Cross-module move rule**: whenever an assignment moves to a different module (via drag or move button), if it has a due date the user is shown a confirmation dialog (`showConfirm()`) before the move completes; on confirm the due date is cleared
- `editAssignment(moduleId, assignmentId)`, `deleteAssignment(moduleId, assignmentId)`

### Date Tools
- **Redistribute Dates** button triggers `redistributeAssignmentDates()` which shows a confirmation modal then calls `redistributeModuleDates()`
- **Proportional distribution**: if all modules have start and end dates, each module receives a proportional share of the new course length based on its original share. Preserves relative lengths (e.g. a 2-week module stays 2 weeks relative to a 1-week module).
- **Even distribution**: fallback when any module lacks dates. Divides total days equally.
- All module boundaries snap to nearest Monday (start) and Sunday (end)
- Overlaps between adjacent modules are corrected automatically
- Last module always takes the remainder of days to prevent rounding drift
- All assignment due dates are set to their module's end date after redistribution — individual due dates require manual adjustment after
- `snapToNearestMonday(dateStr)`, `snapToNearestSunday(dateStr)`, `redistributeModuleDates()`

### CLLO Coverage Report
- Shows which CLLOs are covered by assignments and which are not, grouped by module
- Exports: Word table, Markdown, CSV
- `buildClloReportData()`, `renderClloReport()`

### PLLO Alignment Map
- Shows which PLLOs each CLLO maps to, with supporting assignments grouped by module
- Uncovered PLLOs are flagged
- Exports: Word table, Markdown, CSV
- `buildAlignmentData()`, `renderAlignmentMap()`

### Course Schedule Report (Preview)
- Live preview of the full course schedule as a formatted table
- Adapts to grading mode (hides points column in weighted mode)
- Exports: copy to Word (HTML table), Markdown, CSV, PDF
- `renderPreview()`, `generateWordTable()`, `generateCoursePDF()`

### Assignment Type Summary
- Totals by assignment type; adapts to points vs. weighted mode
- Exports: copy to Word, Markdown, CSV
- `renderAssignmentTypeSummary()`, `getSummaryData()`

### Course Management
- **New Course**: confirms then resets state
- **Save Course**: downloads state as a `.json` file
- **Import Course**: loads a previously saved `.json` file
- **Load Demo**: loads a pre-built example course

### Cochise College Syllabus Generator (CCSG) Integration
- Coursetrix can be launched from the CCSG in a linked mode via URL parameters
- In linked mode: Save Course, Import Course, and Help buttons are hidden; warnings and UI adapt
- On load, `checkIncomingFromCSG()` reads a base64-encoded payload from the URL and restores state
- **Send to Syllabus Generator** button (`sendToSyllabusGenerator()`) encodes the full state and navigates back to CCSG with the payload
- Payload includes: course name, dates, CLLOs, PLLOs, assignment types, modules/assignments, grading mode
- `updateSyllabusBtn()` manages button visibility based on link state

---

## UI Patterns

### Notifications
- `showToast(message, type)` — auto-dismisses after 3 seconds; `type` can be `'success'` or empty
- `showAlert(message)` — persistent toast with an OK button; used when the user needs to acknowledge something (e.g. due date cleared)
- `showConfirm(message, onConfirm, onCancel)` — modal overlay with Cancel and "Move Assignment" buttons; used before destructive or irreversible actions

### Modals
All modals are defined in `index.html` and toggled with `.hidden` class. Pattern:
```javascript
document.getElementById('myModal').classList.remove('hidden'); // open
document.getElementById('myModal').classList.add('hidden');    // close
```

### Move Menu (assignment cross-module move)
- `openMoveMenu(moduleId, assignmentId, btn)` — creates a `position:fixed` dropdown near the clicked button
- Uses `getBoundingClientRect()` for positioning to escape `overflow:hidden` parent containers
- Closes on any outside click via a one-time document click listener
- `closeMoveMenu()` — removes the active menu

### Rendering
Full re-render on every state change. Key render functions:
- `renderAll()` — renders everything (used on load and after import)
- `renderModules()` — re-renders the schedule builder
- `renderPreview()` — re-renders the course schedule report
- `renderClloReport()`, `renderAlignmentMap()`, `renderAssignmentTypeSummary()` — individual panels

---

## Coding Conventions

- **No frameworks** — vanilla JS only; keep it that way
- **No comments** unless the WHY is non-obvious
- **IDs** generated with `generateId()` — `Date.now().toString(36) + Math.random().toString(36).substr(2)`
- **Dates** always stored as `YYYY-MM-DD` strings; parsed with `new Date(dateStr + 'T00:00:00')` to avoid timezone shifts
- **HTML escaping** — always use `escapeHtml(text)` when rendering user-supplied strings into innerHTML
- **State changes** always followed by `saveToLocalStorage()` then the relevant render calls
- **Export functions** follow the pattern: `generate*()` builds the content, `copy*()` or `download*()` delivers it

---

## Versioning & Release Process

- Version number appears in three places — keep them in sync:
  1. About modal: `index.html` line with `Version X.X.X`
  2. What's New modal: new `<div class="whats-new-version">vX.X — Title</div>` block at the top
  3. Script cache-buster: `<script src="app.js?v=X.X.X">`
- Tag each release: `git tag vX.X.X && git push origin main --tags`
- Version scheme: major.minor.patch — new features = minor bump, fixes/refinements = patch

---

## Planned / In Progress

- **Moodle Common Cartridge export** — code exists but feature is disabled pending completion; do not advertise
- **Proportional date redistribution** — shipped in v3.2.0 ✓
- **AI course skeleton generation** — planned for v4.0; Claude API integration, structured wizard UI
