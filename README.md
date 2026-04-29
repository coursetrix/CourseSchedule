# Coursetrix

Course planning made simple. Blueprint your course structure with modules, assignments, and learning outcome alignment. Plan your course in minutes, then build it in your LMS or export to Word.

**[Live Demo](https://coursetrix.com)**

## The Problem

Faculty spend hours manually creating course schedule tables for their syllabi. They need to:
- Plan assignments across modules/weeks
- Align each assignment to Course-Level Learning Outcomes (CLLOs)
- Format everything into a table that fits their syllabus template
- Reorganize when plans change

This typically involves wrestling with Word tables or spreadsheets, manually tracking outcome alignment, and reformatting every time something moves.

## The Solution

Coursetrix provides a clean, intuitive interface that makes course design fast and structured:

1. **Define your CLLOs** — Enter your course learning outcomes once
2. **Align to PLLOs** — Map CLLOs to Program-Level Learning Outcomes for accreditation documentation
3. **Create modules** — Add modules with date ranges and topics
4. **Add assignments** — Select type, link to CLLOs, set due dates
5. **Drag or move assignments** — Reorder within a week or move to any module
6. **Export** — Copy a formatted table to Word, Markdown, CSV, or PDF

## Features

### Schedule Builder
- **Module-based structure** — Organize by modules with date ranges (like an LMS)
- **Assignment types** — Pre-defined types (Discussion, Quiz, Assignment, etc.) with custom options
- **Duplicate assignments** — Copy any assignment in one click; the duplicate lands immediately below the original
- **Drag-and-drop** — Reorder assignments within a module or drag them to another
- **Move button** — Jump an assignment directly to any other module without dragging
- **Smart due date handling** — When an assignment moves to a different module, its due date clears automatically to prevent scheduling conflicts
- **Collapsible modules** — Keep the interface clean while working on a specific section
- **Auto-save** — Browser remembers your work between sessions

### Grading
- **Points mode** — Add point values to assignments, see totals in the preview
- **Weighted grading mode** — Assign a percentage weight to each assignment type; a running total shows when weights reach 100%
- **Assignment Type Summary** — View totals by assignment type with export options; adapts to whichever grading mode is active

### Learning Outcomes
- **CLLO Management** — Define course-level learning outcomes with descriptions
- **PLLO Management** — Define program-level learning outcomes and align CLLOs to them
- **CLLO Coverage Report** — See which outcomes are covered by assignments, grouped by module
- **PLLO Coverage Report** — Document program-level alignment with supporting assignments; uncovered PLLOs are flagged clearly

### Date Tools
- **Smart date defaults** — New assignments default to their module's end date
- **Date redistribution** — Redistribute modules evenly across the course date range, aligned to Monday–Sunday week boundaries

### Export
- **Word-optimized export** — Copy a formatted table that pastes cleanly into Word
- **Multiple formats** — Markdown and CSV for both the schedule and summary reports
- **PDF export** — Generate a formatted PDF of the entire course to share with stakeholders
- **Moodle export** — Export as a Common Cartridge (.imscc) file for direct import into Moodle

### General
- **No account required** — Works entirely in your browser
- **New Course / Save / Import** — Start fresh, download a backup, or reload previous work

## Quick Start

1. Open `index.html` in any modern browser (or visit the [live demo](https://coursetrix.com))
2. Set your course name and date range
3. Add your CLLOs (and optionally PLLOs)
4. Create modules and add assignments
5. Export to Word, PDF, or your preferred format

## Installation

No installation required. Just download and open `index.html` in your browser.

**To host for your institution:**
1. Clone or download this repository
2. Host the files on any static web server or GitHub Pages
3. Share the URL with faculty

> Educational and personal use is permitted under the license below. See the License section before redistributing or modifying for other purposes.

## Technology

Built with vanilla HTML, CSS, and JavaScript. No frameworks, no build process, no dependencies except:
- [SortableJS](https://sortablejs.github.io/Sortable/) for drag-and-drop (loaded via CDN)
- [jsPDF](https://github.com/parallax/jsPDF) for PDF generation (loaded via CDN)
- [JSZip](https://stuk.github.io/jszip/) for Moodle export (loaded via CDN)

This keeps it simple to deploy, modify, and maintain.

## Use Cases

- **New course development** — Plan your schedule from scratch before touching your LMS
- **Course revision** — Reorganize an existing course and see the impact on outcome coverage
- **Outcome mapping** — Ensure all CLLOs are covered by assignments across the course
- **Syllabus creation** — Generate the schedule table for your syllabus template
- **Accreditation prep** — Document assignment-to-CLLO-to-PLLO alignment in one place

## Privacy

All course data stays in your browser. Your course information is stored in:
- **localStorage** — For auto-save between sessions (browser only)
- **JSON files** — When you explicitly save (your computer only)

We use [Umami](https://umami.is) for anonymous usage analytics. Umami is privacy-focused: no cookies, no personal data collected, and fully GDPR compliant. This helps us understand how the tool is used so we can improve it.

## Author

**Martin Versluis**
[github.com/coursetrix](https://github.com/coursetrix)

Created to help faculty spend less time on administrative tasks and more time on teaching. Built in collaboration with AI (Claude) to demonstrate how educators can leverage new tools to solve real problems quickly.

## License

Source-available under the **PolyForm Noncommercial License**.

- Free for personal and educational use
- Commercial use requires written permission from the author
- [View full license](https://github.com/coursetrix/CourseSchedule/blob/main/LICENSE)

---

*If this tool helps you, consider sharing it with colleagues or starring the repo.*
