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

Coursetrix provides a drag-and-drop interface that makes schedule creation fast and intuitive:

1. **Define your CLLOs** - Enter your course learning outcomes once
2. **Create modules** - Add modules with date ranges and topics
3. **Add assignments** - Select type, link to CLLOs, set due dates
4. **Drag to reorder** - Move assignments and modules freely
5. **Export to Word** - One click copies a formatted table ready to paste

## Features

- **CLLO Management** - Define course-level learning outcomes with descriptions
- **Module-based structure** - Organize by modules with date ranges (like an LMS)
- **Smart date defaults** - New modules auto-calculate dates based on previous module
- **Assignment types** - Pre-defined types (Discussion, Quiz, Assignment, etc.) with custom options
- **Suggested types dropdown** - Quick access to common assignment types (Case Study, Portfolio, Peer Review, etc.)
- **Points tracking** - Add point values to assignments, see totals in preview
- **Assignment Type Summary** - View total points by assignment type with export options
- **Drag-and-drop** - Reorder modules and move assignments between modules
- **Collapsible modules** - Keep the interface clean while working
- **Word-optimized export** - Copy table that pastes cleanly into Word documents
- **Multiple export formats** - HTML table, Markdown, and CSV for both schedule and summary
- **New Course / Import / Save** - Start fresh, import previous work, or save for later
- **Auto-save** - Browser remembers your work between sessions
- **No account required** - Works entirely in your browser

## Quick Start

1. Open `index.html` in any modern browser (or visit the [live demo](https://coursetrix.com))
2. Set your course name and date range
3. Add your CLLOs (learning outcomes)
4. Create modules and add assignments
5. Click "Copy Table to Clipboard" and paste into Word

## Installation

No installation required. Just download and open `index.html` in your browser.

**To host for your institution:**
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Share the URL with faculty

## Technology

Built with vanilla HTML, CSS, and JavaScript. No frameworks, no build process, no dependencies except:
- [SortableJS](https://sortablejs.github.io/Sortable/) for drag-and-drop (loaded via CDN)

This keeps it simple to deploy, modify, and maintain.

## Use Cases

- **New course development** - Plan your schedule from scratch
- **Course revision** - Reorganize an existing course
- **Outcome mapping** - Ensure all CLLOs are covered by assignments
- **Syllabus creation** - Generate the schedule table for your syllabus template
- **Accreditation prep** - Document assignment-to-outcome alignment

## Privacy

All data stays in your browser. Nothing is sent to any server. Your course information is stored in:
- **localStorage** - For auto-save between sessions (browser only)
- **JSON files** - When you explicitly save (your computer only)

## Contributing

Contributions welcome! This project is open source under the MIT License.

Ideas for future enhancements:
- Import from CSV/Excel
- Multiple export templates
- CLLO coverage visualization
- Print-friendly view

## Author

**Martin Versluis**
[github.com/coursetrix](https://github.com/coursetrix)

Created to help faculty spend less time on administrative tasks and more time on teaching. Built in collaboration with AI (Claude) to demonstrate how educators can leverage new tools to solve real problems quickly.

## License

MIT License - Use freely, modify freely, share freely. Attribution appreciated but not required.

---

*If this tool helps you, consider sharing it with colleagues or starring the repo.*
