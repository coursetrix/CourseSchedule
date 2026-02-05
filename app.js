// Course Design Matrix - Main Application

// ============================================
// STATE MANAGEMENT
// ============================================

const defaultAssignmentTypes = [
    'Discussion',
    'Quiz',
    'Assignment',
    'Paper/Essay',
    'Project',
    'Presentation',
    'Exam/Test',
    'Reflection',
    'Peer Review',
    'Lab'
];

const suggestedAssignmentTypes = [
    'Annotated Bibliography',
    'Case Study',
    'Critique',
    'Debate',
    'Field Work',
    'Final Exam',
    'Group Project',
    'Infographic',
    'Interview',
    'Journal/Blog',
    'Literature Review',
    'Midterm',
    'Podcast/Video',
    'Portfolio',
    'Poster',
    'Research Proposal',
    'Simulation'
];

// Demo course data for new users
const demoCourse = {
    courseName: 'ENG 101 - Introduction to College Writing',
    courseStartDate: '2025-01-13',
    courseEndDate: '2025-05-02',
    cllos: [
        { id: 'demo-cllo-1', description: 'Develop and articulate clear thesis statements supported by evidence' },
        { id: 'demo-cllo-2', description: 'Apply revision strategies to improve clarity, coherence, and style' },
        { id: 'demo-cllo-3', description: 'Evaluate and integrate sources using proper citation methods' },
        { id: 'demo-cllo-4', description: 'Demonstrate proficiency in standard written English conventions' }
    ],
    assignmentTypes: ['Discussion', 'Quiz', 'Paper/Essay', 'Peer Review', 'Reflection'],
    modules: [
        {
            id: 'demo-mod-1',
            name: 'Unit 1',
            startDate: '2025-01-13',
            endDate: '2025-01-24',
            topic: 'Introduction to College Writing',
            assignments: [
                { id: 'demo-a-1', name: 'Introductions Discussion', type: 'Discussion', points: 25, dueDate: '2025-01-17', clloIds: ['demo-cllo-4'] },
                { id: 'demo-a-2', name: 'Diagnostic Essay', type: 'Paper/Essay', points: 50, dueDate: '2025-01-24', clloIds: ['demo-cllo-1', 'demo-cllo-4'] }
            ]
        },
        {
            id: 'demo-mod-2',
            name: 'Unit 2',
            startDate: '2025-01-27',
            endDate: '2025-02-07',
            topic: 'The Writing Process',
            assignments: [
                { id: 'demo-a-3', name: 'Writing Process Discussion', type: 'Discussion', points: 25, dueDate: '2025-01-31', clloIds: ['demo-cllo-2'] },
                { id: 'demo-a-4', name: 'Narrative Essay', type: 'Paper/Essay', points: 100, dueDate: '2025-02-07', clloIds: ['demo-cllo-1', 'demo-cllo-2', 'demo-cllo-4'] }
            ]
        },
        {
            id: 'demo-mod-3',
            name: 'Unit 3',
            startDate: '2025-02-10',
            endDate: '2025-02-21',
            topic: 'Argument and Evidence',
            assignments: [
                { id: 'demo-a-5', name: 'Argument Analysis Discussion', type: 'Discussion', points: 25, dueDate: '2025-02-14', clloIds: ['demo-cllo-1'] },
                { id: 'demo-a-6', name: 'Quiz 1: Writing Fundamentals', type: 'Quiz', points: 50, dueDate: '2025-02-21', clloIds: ['demo-cllo-4'] }
            ]
        },
        {
            id: 'demo-mod-4',
            name: 'Unit 4',
            startDate: '2025-02-24',
            endDate: '2025-03-07',
            topic: 'Research Fundamentals',
            assignments: [
                { id: 'demo-a-7', name: 'Finding Sources Discussion', type: 'Discussion', points: 25, dueDate: '2025-02-28', clloIds: ['demo-cllo-3'] },
                { id: 'demo-a-8', name: 'Argumentative Essay Draft', type: 'Paper/Essay', points: 50, dueDate: '2025-03-07', clloIds: ['demo-cllo-1', 'demo-cllo-3'] }
            ]
        },
        {
            id: 'demo-mod-5',
            name: 'Unit 5',
            startDate: '2025-03-10',
            endDate: '2025-03-21',
            topic: 'Source Integration',
            assignments: [
                { id: 'demo-a-9', name: 'Peer Review 1', type: 'Peer Review', points: 50, dueDate: '2025-03-14', clloIds: ['demo-cllo-2'] },
                { id: 'demo-a-10', name: 'Argumentative Essay Final', type: 'Paper/Essay', points: 150, dueDate: '2025-03-21', clloIds: ['demo-cllo-1', 'demo-cllo-3', 'demo-cllo-4'] }
            ]
        },
        {
            id: 'demo-mod-6',
            name: 'Unit 6',
            startDate: '2025-03-24',
            endDate: '2025-04-04',
            topic: 'Revision Strategies',
            assignments: [
                { id: 'demo-a-11', name: 'Revision Techniques Discussion', type: 'Discussion', points: 25, dueDate: '2025-03-28', clloIds: ['demo-cllo-2'] },
                { id: 'demo-a-12', name: 'Midterm Reflection', type: 'Reflection', points: 50, dueDate: '2025-04-04', clloIds: ['demo-cllo-2', 'demo-cllo-4'] }
            ]
        },
        {
            id: 'demo-mod-7',
            name: 'Unit 7',
            startDate: '2025-04-07',
            endDate: '2025-04-18',
            topic: 'Style and Voice',
            assignments: [
                { id: 'demo-a-13', name: 'Quiz 2: Research & Citation', type: 'Quiz', points: 50, dueDate: '2025-04-11', clloIds: ['demo-cllo-3', 'demo-cllo-4'] },
                { id: 'demo-a-14', name: 'Research Essay Draft', type: 'Paper/Essay', points: 50, dueDate: '2025-04-18', clloIds: ['demo-cllo-1', 'demo-cllo-3'] }
            ]
        },
        {
            id: 'demo-mod-8',
            name: 'Unit 8',
            startDate: '2025-04-21',
            endDate: '2025-05-02',
            topic: 'Final Portfolio',
            assignments: [
                { id: 'demo-a-15', name: 'Peer Review 2', type: 'Peer Review', points: 50, dueDate: '2025-04-25', clloIds: ['demo-cllo-2'] },
                { id: 'demo-a-16', name: 'Research Essay Final', type: 'Paper/Essay', points: 200, dueDate: '2025-05-01', clloIds: ['demo-cllo-1', 'demo-cllo-2', 'demo-cllo-3', 'demo-cllo-4'] },
                { id: 'demo-a-17', name: 'Course Reflection', type: 'Reflection', points: 25, dueDate: '2025-05-02', clloIds: ['demo-cllo-2', 'demo-cllo-4'] }
            ]
        }
    ]
};

let state = {
    courseName: '',
    courseStartDate: '',
    courseEndDate: '',
    cllos: [],
    assignmentTypes: [],
    modules: []
};

// Generate unique IDs
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ============================================
// LOCAL STORAGE
// ============================================

function saveToLocalStorage() {
    localStorage.setItem('courseScheduleData', JSON.stringify(state));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('courseScheduleData');
    if (saved) {
        try {
            state = JSON.parse(saved);
            // Ensure assignmentTypes exists (for backwards compatibility)
            if (!state.assignmentTypes) {
                state.assignmentTypes = [...defaultAssignmentTypes];
            }
        } catch (e) {
            console.error('Failed to load saved data:', e);
        }
    }
}

// ============================================
// CLLO MANAGEMENT
// ============================================

function renderCllos() {
    const container = document.getElementById('clloList');

    if (state.cllos.length === 0) {
        container.innerHTML = '<div class="empty-state">No CLLOs defined yet. Add your first learning outcome.</div>';
        return;
    }

    container.innerHTML = state.cllos.map((cllo, index) => `
        <div class="cllo-item" data-id="${cllo.id}">
            <span class="cllo-number">CLLO ${index + 1}</span>
            <input type="text" class="cllo-description" value="${escapeHtml(cllo.description)}"
                   placeholder="Enter learning outcome description..."
                   onchange="updateClloDescription('${cllo.id}', this.value)">
            <div class="cllo-actions">
                <button class="btn btn-icon danger" onclick="deleteCllo('${cllo.id}')" title="Delete">×</button>
            </div>
        </div>
    `).join('');
}

function addCllo() {
    state.cllos.push({
        id: generateId(),
        description: ''
    });
    saveToLocalStorage();
    renderCllos();
    renderPreview();

    // Focus the new input
    const inputs = document.querySelectorAll('.cllo-description');
    if (inputs.length > 0) {
        inputs[inputs.length - 1].focus();
    }
}

function updateClloDescription(id, description) {
    const cllo = state.cllos.find(c => c.id === id);
    if (cllo) {
        cllo.description = description;
        saveToLocalStorage();
    }
}

function deleteCllo(id) {
    if (confirm('Are you sure you want to delete this CLLO? It will be removed from all assignments.')) {
        const index = state.cllos.findIndex(c => c.id === id);
        state.cllos = state.cllos.filter(c => c.id !== id);

        // Remove this CLLO from all assignments
        state.modules.forEach(module => {
            module.assignments.forEach(assignment => {
                assignment.clloIds = assignment.clloIds.filter(cId => cId !== id);
            });
        });

        saveToLocalStorage();
        renderCllos();
        renderModules();
        renderPreview();
    }
}

function getClloNumber(id) {
    const index = state.cllos.findIndex(c => c.id === id);
    return index >= 0 ? index + 1 : '?';
}

// ============================================
// ASSIGNMENT TYPE MANAGEMENT
// ============================================

function renderAssignmentTypes() {
    const container = document.getElementById('assignmentTypeList');

    container.innerHTML = state.assignmentTypes.map(type => `
        <span class="tag">
            ${escapeHtml(type)}
            <span class="remove-tag" onclick="removeAssignmentType('${escapeHtml(type)}')" title="Remove">×</span>
        </span>
    `).join('');
}

function addAssignmentType() {
    const input = document.getElementById('newAssignmentType');
    const type = input.value.trim();

    if (type && !state.assignmentTypes.includes(type)) {
        state.assignmentTypes.push(type);
        saveToLocalStorage();
        renderAssignmentTypes();
        renderAssignmentTypeSummary();
        input.value = '';
    }
}

function removeAssignmentType(type) {
    // Check if any assignments use this type
    let inUse = false;
    state.modules.forEach(module => {
        module.assignments.forEach(assignment => {
            if (assignment.type === type) {
                inUse = true;
            }
        });
    });

    if (inUse) {
        alert('This assignment type is in use and cannot be removed.');
        return;
    }

    state.assignmentTypes = state.assignmentTypes.filter(t => t !== type);
    saveToLocalStorage();
    renderAssignmentTypes();
    renderAssignmentTypeSummary();
}

function renderAssignmentTypeSummary() {
    const container = document.getElementById('assignmentTypeSummary');
    const exportContainer = document.getElementById('summaryExportActions');
    if (!container || !exportContainer) return;

    if (state.assignmentTypes.length === 0) {
        container.innerHTML = '';
        exportContainer.style.display = 'none';
        return;
    }

    // Calculate totals per type
    const totals = {};
    state.assignmentTypes.forEach(type => totals[type] = 0);

    state.modules.forEach(module => {
        module.assignments.forEach(assignment => {
            if (assignment.type && totals.hasOwnProperty(assignment.type)) {
                totals[assignment.type] += (assignment.points || 0);
            }
        });
    });

    const html = `
        <table class="summary-table">
            <thead>
                <tr>
                    <th>Assignment Type</th>
                    <th>Total Points</th>
                </tr>
            </thead>
            <tbody>
                ${state.assignmentTypes.map(type => `
                    <tr>
                        <td>${escapeHtml(type)}</td>
                        <td>${totals[type]}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = html;
    exportContainer.style.display = 'flex';
}

function getSummaryData() {
    const totals = {};
    state.assignmentTypes.forEach(type => totals[type] = 0);

    state.modules.forEach(module => {
        module.assignments.forEach(assignment => {
            if (assignment.type && totals.hasOwnProperty(assignment.type)) {
                totals[assignment.type] += (assignment.points || 0);
            }
        });
    });
    return totals;
}

function generateSummaryWordTable() {
    const totals = getSummaryData();
    let html = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<style>
    body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #000; padding: 6px; vertical-align: top; }
    .cs-text { margin: 0 !important; padding: 0 !important; mso-para-margin: 0in !important; mso-margin-top-alt: 0in !important; mso-margin-bottom-alt: 0in !important; }
</style>
</head>
<body>
<table style="width:100%; border-collapse:collapse;">
    <thead>
        <tr style="background-color:#f2f2f2;">
            <th style="width:60%; border:1px solid #000; padding:6px; text-align:left; font-weight:bold;"><p class="cs-text" style="font-weight:bold;">Assignment Type</p></th>
            <th style="width:40%; border:1px solid #000; padding:6px; text-align:left; font-weight:bold;"><p class="cs-text" style="font-weight:bold;">Total Points</p></th>
        </tr>
    </thead>
    <tbody>`;

    state.assignmentTypes.forEach(type => {
        html += `
        <tr>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"><p class="cs-text">${escapeHtml(type)}</p></td>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"><p class="cs-text">${totals[type]}</p></td>
        </tr>`;
    });

    html += `
    </tbody>
</table>
</body>
</html>`;
    return html;
}

function copySummaryTableToClipboard() {
    if (state.assignmentTypes.length === 0) {
        showToast('No summary to copy.');
        return;
    }
    const html = generateSummaryWordTable();
    const blob = new Blob([html], { type: 'text/html' });
    const clipboardItem = new ClipboardItem({ 'text/html': blob });
    navigator.clipboard.write([clipboardItem]).then(() => {
        showToast('Summary table copied!', 'success');
    }).catch(() => {
        showToast('Failed to copy summary table.');
    });
}

function generateSummaryMarkdown() {
    const totals = getSummaryData();
    let md = '| **Assignment Type** | **Total Points** |\n';
    md += '| ------------------- | ---------------- |\n';

    state.assignmentTypes.forEach(type => {
        md += `| ${escapeHtml(type)} | ${totals[type]} |\n`;
    });
    return md;
}

function copySummaryAsMarkdown() {
    if (state.assignmentTypes.length === 0) {
        showToast('No summary to copy.');
        return;
    }
    const markdown = generateSummaryMarkdown();
    navigator.clipboard.writeText(markdown).then(() => {
        showToast('Summary markdown copied!', 'success');
    }).catch(() => {
        showToast('Failed to copy summary markdown.');
    });
}

function generateSummaryCsv() {
    const totals = getSummaryData();
    let csv = 'Assignment Type,Total Points\n';
    state.assignmentTypes.forEach(type => {
        csv += `"${escapeHtml(type)}",${totals[type]}\n`;
    });
    return csv;
}

function downloadSummaryCsv() {
    if (state.assignmentTypes.length === 0) {
        showToast('No summary to download.');
        return;
    }
    const csv = generateSummaryCsv();
    downloadFile('assignment-summary.csv', csv, 'text/csv');
}

// ============================================
// MODULE MANAGEMENT
// ============================================

let moduleSortable = null;

function renderModules() {
    const container = document.getElementById('moduleList');

    if (state.modules.length === 0) {
        container.innerHTML = '<div class="empty-state">No modules yet. Add your first module to get started.</div>';
        return;
    }

    container.innerHTML = state.modules.map((module, index) => `
        <div class="module-item ${module.collapsed ? 'collapsed' : ''}" data-id="${module.id}">
            <div class="module-header">
                <button class="collapse-toggle" onclick="toggleModuleCollapse('${module.id}')" title="Expand/Collapse">▼</button>
                <span class="drag-handle">≡</span>
                <div class="module-info">
                    <div class="module-title">${escapeHtml(module.name) || 'Untitled Module'}</div>
                    <div class="module-dates">${formatDateRange(module.startDate, module.endDate)}</div>
                    ${module.topic ? `<div class="module-topic">${escapeHtml(module.topic)}</div>` : ''}
                </div>
                <span class="assignment-count">${module.assignments.length} assignment${module.assignments.length !== 1 ? 's' : ''}</span>
                <div class="module-actions">
                    <button class="btn btn-icon" onclick="editModule('${module.id}')" title="Edit">✎</button>
                    <button class="btn btn-icon danger" onclick="deleteModule('${module.id}')" title="Delete">×</button>
                </div>
            </div>
            <div class="module-content">
                <div class="assignment-list" data-module-id="${module.id}">
                    ${renderAssignments(module)}
                </div>
                <button class="btn-add-assignment" onclick="openAssignmentModal('${module.id}')">+ Add Assignment</button>
            </div>
        </div>
    `).join('');

    initializeSortables();
}

function renderAssignments(module) {
    if (module.assignments.length === 0) {
        return '<div class="empty-state">No assignments in this module</div>';
    }

    return module.assignments.map(assignment => `
        <div class="assignment-item" data-id="${assignment.id}">
            <span class="drag-handle">≡</span>
            <div class="assignment-info">
                <div class="assignment-name">${escapeHtml(assignment.name)}</div>
                <div class="assignment-meta">
                    <span class="assignment-type">${escapeHtml(assignment.type)}</span>
                    ${assignment.points ? `<span class="assignment-points">${assignment.points} pts</span>` : ''}
                    <span class="assignment-cllos">${formatCllos(assignment.clloIds)}</span>
                </div>
            </div>
            <div class="assignment-due">${formatDate(assignment.dueDate)}</div>
            <div class="assignment-actions">
                <button class="btn btn-icon" onclick="editAssignment('${module.id}', '${assignment.id}')" title="Edit">✎</button>
                <button class="btn btn-icon danger" onclick="deleteAssignment('${module.id}', '${assignment.id}')" title="Delete">×</button>
            </div>
        </div>
    `).join('');
}

function formatDateRange(start, end) {
    if (!start && !end) return 'No dates set';
    if (start && end) return `${formatDate(start)} - ${formatDate(end)}`;
    if (start) return `Starts ${formatDate(start)}`;
    return `Ends ${formatDate(end)}`;
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatCllos(clloIds) {
    if (!clloIds || clloIds.length === 0) return 'No CLLOs';
    return 'CLLO ' + clloIds.map(id => getClloNumber(id)).sort((a,b) => a - b).join(', ');
}

// Module Modal
let editingModuleId = null;

function openModuleModal(moduleId = null) {
    editingModuleId = moduleId;
    const modal = document.getElementById('moduleModal');
    const title = document.getElementById('moduleModalTitle');

    const startDateInput = document.getElementById('moduleStartDate');
    const endDateInput = document.getElementById('moduleEndDate');

    // Set min/max based on course dates
    if (state.courseStartDate) {
        startDateInput.min = state.courseStartDate;
        endDateInput.min = state.courseStartDate;
    }
    if (state.courseEndDate) {
        startDateInput.max = state.courseEndDate;
        endDateInput.max = state.courseEndDate;
    }

    // Show date range hint
    const moduleDateHint = document.getElementById('moduleDateHint');
    if (state.courseStartDate && state.courseEndDate) {
        moduleDateHint.textContent = `Dates must fall within course dates (${formatDate(state.courseStartDate)} \u2013 ${formatDate(state.courseEndDate)})`;
    } else if (state.courseStartDate) {
        moduleDateHint.textContent = `Dates must be on or after ${formatDate(state.courseStartDate)}`;
    } else if (state.courseEndDate) {
        moduleDateHint.textContent = `Dates must be on or before ${formatDate(state.courseEndDate)}`;
    } else {
        moduleDateHint.textContent = '';
    }

    if (moduleId) {
        title.textContent = 'Edit Module';
        const module = state.modules.find(m => m.id === moduleId);
        document.getElementById('moduleName').value = module.name || '';
        startDateInput.value = module.startDate || '';
        endDateInput.value = module.endDate || '';
        document.getElementById('moduleTopic').value = module.topic || '';
    } else {
        title.textContent = 'Add Module';
        document.getElementById('moduleName').value = '';
        document.getElementById('moduleTopic').value = '';

        // Smart date suggestion: use day after last module ends, or course start date
        let suggestedStart = state.courseStartDate || '';
        if (state.modules.length > 0) {
            const lastModule = state.modules[state.modules.length - 1];
            if (lastModule.endDate) {
                // Add one day to last module's end date
                const nextDay = new Date(lastModule.endDate + 'T00:00:00');
                nextDay.setDate(nextDay.getDate() + 1);
                suggestedStart = nextDay.toISOString().split('T')[0];
            }
        }
        startDateInput.value = suggestedStart;

        // Default end date to one week after start date
        if (suggestedStart) {
            const endDate = new Date(suggestedStart + 'T00:00:00');
            endDate.setDate(endDate.getDate() + 6); // 6 days later = 1 week span
            // Don't exceed course end date
            if (state.courseEndDate && endDate > new Date(state.courseEndDate + 'T00:00:00')) {
                endDateInput.value = state.courseEndDate;
            } else {
                endDateInput.value = endDate.toISOString().split('T')[0];
            }
        } else {
            endDateInput.value = '';
        }
    }

    modal.classList.remove('hidden');
    document.getElementById('moduleName').focus();
}

function closeModuleModal() {
    document.getElementById('moduleModal').classList.add('hidden');
    editingModuleId = null;
}

function saveModule() {
    const name = document.getElementById('moduleName').value.trim();
    const startDate = document.getElementById('moduleStartDate').value;
    const endDate = document.getElementById('moduleEndDate').value;
    const topic = document.getElementById('moduleTopic').value.trim();

    // Validate dates against course date range
    const startInput = document.getElementById('moduleStartDate');
    const endInput = document.getElementById('moduleEndDate');
    if (validateDateRange(startInput, state.courseStartDate, state.courseEndDate, 'course')) return;
    if (validateDateRange(endInput, state.courseStartDate, state.courseEndDate, 'course')) return;

    if (editingModuleId) {
        const module = state.modules.find(m => m.id === editingModuleId);
        module.name = name;
        module.startDate = startDate;
        module.endDate = endDate;
        module.topic = topic;
    } else {
        state.modules.push({
            id: generateId(),
            name,
            startDate,
            endDate,
            topic,
            assignments: []
        });
    }

    saveToLocalStorage();
    renderModules();
    renderPreview();
    closeModuleModal();
}

function editModule(id) {
    openModuleModal(id);
}

function toggleModuleCollapse(id) {
    const module = state.modules.find(m => m.id === id);
    if (module) {
        module.collapsed = !module.collapsed;
        saveToLocalStorage();

        // Update just this module's class without full re-render
        const moduleEl = document.querySelector(`.module-item[data-id="${id}"]`);
        if (moduleEl) {
            moduleEl.classList.toggle('collapsed', module.collapsed);
        }
    }
}

function expandAllModules() {
    state.modules.forEach(module => module.collapsed = false);
    saveToLocalStorage();
    document.querySelectorAll('.module-item').forEach(el => el.classList.remove('collapsed'));
}

function collapseAllModules() {
    state.modules.forEach(module => module.collapsed = true);
    saveToLocalStorage();
    document.querySelectorAll('.module-item').forEach(el => el.classList.add('collapsed'));
}

function deleteModule(id) {
    const module = state.modules.find(m => m.id === id);
    const assignmentCount = module.assignments.length;
    const message = assignmentCount > 0
        ? `Are you sure you want to delete this module and its ${assignmentCount} assignment(s)?`
        : 'Are you sure you want to delete this module?';

    if (confirm(message)) {
        state.modules = state.modules.filter(m => m.id !== id);
        saveToLocalStorage();
        renderModules();
        renderPreview();
        renderAssignmentTypeSummary();
    }
}

// ============================================
// ASSIGNMENT MANAGEMENT
// ============================================

let currentModuleId = null;
let editingAssignmentId = null;

function openAssignmentModal(moduleId, assignmentId = null) {
    currentModuleId = moduleId;
    editingAssignmentId = assignmentId;

    const modal = document.getElementById('assignmentModal');
    const title = document.getElementById('modalTitle');
    const module = state.modules.find(m => m.id === moduleId);
    const dueInput = document.getElementById('assignmentDue');

    // Set min/max based on module dates (or course dates as fallback)
    dueInput.min = module.startDate || state.courseStartDate || '';
    dueInput.max = module.endDate || state.courseEndDate || '';

    // Show date range hint
    const assignmentDateHint = document.getElementById('assignmentDateHint');
    const hintMin = module.startDate || state.courseStartDate || '';
    const hintMax = module.endDate || state.courseEndDate || '';
    const rangeLabel = (module.startDate || module.endDate) ? 'module' : 'course';
    if (hintMin && hintMax) {
        assignmentDateHint.textContent = `Must fall within ${rangeLabel} dates (${formatDate(hintMin)} \u2013 ${formatDate(hintMax)})`;
    } else if (hintMin) {
        assignmentDateHint.textContent = `Must be on or after ${formatDate(hintMin)}`;
    } else if (hintMax) {
        assignmentDateHint.textContent = `Must be on or before ${formatDate(hintMax)}`;
    } else {
        assignmentDateHint.textContent = '';
    }

    // Populate type dropdown
    const typeSelect = document.getElementById('assignmentType');
    typeSelect.innerHTML = state.assignmentTypes.map(type =>
        `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`
    ).join('');

    // Populate CLLO checkboxes
    const clloContainer = document.getElementById('clloCheckboxes');
    if (state.cllos.length === 0) {
        clloContainer.innerHTML = '<div class="empty-state">No CLLOs defined. Add CLLOs in Course Setup first.</div>';
    } else {
        clloContainer.innerHTML = state.cllos.map((cllo, index) => `
            <div class="checkbox-item">
                <input type="checkbox" id="cllo-${cllo.id}" value="${cllo.id}">
                <label for="cllo-${cllo.id}">CLLO ${index + 1}: ${escapeHtml(cllo.description) || '(No description)'}</label>
            </div>
        `).join('');
    }

    if (assignmentId) {
        title.textContent = 'Edit Assignment';
        const assignment = module.assignments.find(a => a.id === assignmentId);

        document.getElementById('assignmentName').value = assignment.name || '';
        document.getElementById('assignmentType').value = assignment.type || state.assignmentTypes[0];
        document.getElementById('assignmentPoints').value = assignment.points || '';
        dueInput.value = assignment.dueDate || '';

        // Check the appropriate CLLOs
        assignment.clloIds.forEach(clloId => {
            const checkbox = document.getElementById(`cllo-${clloId}`);
            if (checkbox) checkbox.checked = true;
        });
    } else {
        title.textContent = 'Add Assignment';
        document.getElementById('assignmentName').value = '';
        document.getElementById('assignmentType').value = state.assignmentTypes[0];
        document.getElementById('assignmentPoints').value = '';

        // Default to module end date for due date (common pattern)
        dueInput.value = module.endDate || '';

        // Uncheck all CLLOs
        state.cllos.forEach(cllo => {
            const checkbox = document.getElementById(`cllo-${cllo.id}`);
            if (checkbox) checkbox.checked = false;
        });
    }

    modal.classList.remove('hidden');
    document.getElementById('assignmentName').focus();
}

function closeAssignmentModal() {
    document.getElementById('assignmentModal').classList.add('hidden');
    currentModuleId = null;
    editingAssignmentId = null;
}

function saveAssignment() {
    const name = document.getElementById('assignmentName').value.trim();
    const type = document.getElementById('assignmentType').value;
    const points = document.getElementById('assignmentPoints').value;
    const dueDate = document.getElementById('assignmentDue').value;

    // Get selected CLLOs
    const clloIds = [];
    state.cllos.forEach(cllo => {
        const checkbox = document.getElementById(`cllo-${cllo.id}`);
        if (checkbox && checkbox.checked) {
            clloIds.push(cllo.id);
        }
    });

    // Validate due date against module/course date range
    const currentModule = state.modules.find(m => m.id === currentModuleId);
    const dueInput = document.getElementById('assignmentDue');
    const minDate = currentModule.startDate || state.courseStartDate || '';
    const maxDate = currentModule.endDate || state.courseEndDate || '';
    const rangeLabel = (currentModule.startDate || currentModule.endDate) ? 'module' : 'course';
    if (validateDateRange(dueInput, minDate, maxDate, rangeLabel)) return;

    if (!name) {
        alert('Please enter an assignment name.');
        return;
    }

    const module = state.modules.find(m => m.id === currentModuleId);

    if (editingAssignmentId) {
        const assignment = module.assignments.find(a => a.id === editingAssignmentId);
        assignment.name = name;
        assignment.type = type;
        assignment.points = points ? parseInt(points, 10) : null;
        assignment.dueDate = dueDate;
        assignment.clloIds = clloIds;
    } else {
        module.assignments.push({
            id: generateId(),
            name,
            type,
            points: points ? parseInt(points, 10) : null,
            dueDate,
            clloIds
        });
    }

    saveToLocalStorage();
    renderModules();
    renderPreview();
    renderAssignmentTypeSummary();
    closeAssignmentModal();
}

function editAssignment(moduleId, assignmentId) {
    openAssignmentModal(moduleId, assignmentId);
}

function deleteAssignment(moduleId, assignmentId) {
    if (confirm('Are you sure you want to delete this assignment?')) {
        const module = state.modules.find(m => m.id === moduleId);
        module.assignments = module.assignments.filter(a => a.id !== assignmentId);
        saveToLocalStorage();
        renderModules();
        renderPreview();
        renderAssignmentTypeSummary();
    }
}

// ============================================
// DRAG AND DROP (SORTABLEJS)
// ============================================

function initializeSortables() {
    // Module sorting
    const moduleList = document.getElementById('moduleList');
    if (moduleList && state.modules.length > 0) {
        new Sortable(moduleList, {
            animation: 150,
            handle: '.module-header',
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            onEnd: function(evt) {
                const movedModule = state.modules.splice(evt.oldIndex, 1)[0];
                state.modules.splice(evt.newIndex, 0, movedModule);
                saveToLocalStorage();
                renderModules();
                renderPreview();
            }
        });
    }

    // Assignment sorting within modules
    document.querySelectorAll('.assignment-list').forEach(list => {
        new Sortable(list, {
            group: 'assignments',
            animation: 150,
            handle: '.drag-handle',
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            onEnd: function(evt) {
                const fromModuleId = evt.from.dataset.moduleId;
                const toModuleId = evt.to.dataset.moduleId;

                const fromModule = state.modules.find(m => m.id === fromModuleId);
                const toModule = state.modules.find(m => m.id === toModuleId);

                // Remove from source
                const movedAssignment = fromModule.assignments.splice(evt.oldIndex, 1)[0];

                // Add to destination
                toModule.assignments.splice(evt.newIndex, 0, movedAssignment);

                saveToLocalStorage();
                renderModules();
                renderPreview();
            }
        });
    });
}

// ============================================
// PREVIEW & EXPORT
// ============================================

function renderPreview() {
    const container = document.getElementById('tablePreview');

    if (state.modules.length === 0) {
        container.innerHTML = '<div class="empty-state">Add modules and assignments to see the preview.</div>';
        return;
    }

    let totalPoints = 0;

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Module</th>
                    <th>Dates</th>
                    <th>Topic</th>
                    <th>Assignment</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
    `;

    state.modules.forEach((module, moduleIndex) => {
        if (module.assignments.length === 0) {
            html += `
                <tr>
                    <td>${escapeHtml(module.name)}</td>
                    <td>${formatDateRange(module.startDate, module.endDate)}</td>
                    <td>${escapeHtml(module.topic) || ''}</td>
                    <td></td>
                    <td></td>
                </tr>
            `;
        } else {
            module.assignments.forEach((assignment, aIndex) => {
                if (assignment.points) totalPoints += assignment.points;
                const clloNums = assignment.clloIds.map(id => getClloNumber(id)).sort((a,b) => a - b).join(', ');

                html += `
                    <tr>
                        <td>${aIndex === 0 ? escapeHtml(module.name) : ''}</td>
                        <td>${aIndex === 0 ? formatDateRange(module.startDate, module.endDate) : ''}</td>
                        <td>${aIndex === 0 ? escapeHtml(module.topic) || '' : ''}</td>
                        <td>
                            ${escapeHtml(assignment.name)} ${assignment.points ? `(${assignment.points} pts)` : ''}
                            ${clloNums ? `<br><span style="font-size: 0.9em; color: #666;">CLLO: ${clloNums}</span>` : ''}
                        </td>
                        <td>${formatDate(assignment.dueDate)}</td>
                    </tr>
                `;
            });
        }
    });

    html += `
        <tr style="font-weight: bold; background-color: var(--background);">
            <td colspan="3" style="text-align: right;">Total Points</td>
            <td>${totalPoints}</td>
            <td></td>
        </tr>
    `;

    html += '</tbody></table>';
    container.innerHTML = html;
}

function copyTableToClipboard() {
    if (state.modules.length === 0) {
        showToast('No table to copy. Add modules first.');
        return;
    }

    // Generate Word-optimized HTML table with explicit widths
    const html = generateWordTable();

    // Use Clipboard API to copy HTML
    const blob = new Blob([html], { type: 'text/html' });
    const clipboardItem = new ClipboardItem({ 'text/html': blob });

    navigator.clipboard.write([clipboardItem]).then(() => {
        showToast('Table copied! Paste into Word.', 'success');
    }).catch(() => {
        // Fallback: try selecting the visible table
        const table = document.querySelector('#tablePreview table');
        if (table) {
            const range = document.createRange();
            range.selectNode(table);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            try {
                document.execCommand('copy');
                showToast('Table copied! Paste into Word.', 'success');
            } catch (err) {
                showToast('Failed to copy. Try selecting manually.');
            }
            window.getSelection().removeAllRanges();
        }
    });
}

function generateWordTable() {
    // Column widths optimized for Word (total ~6.5 inches for letter paper with 1" margins)
    // Module: 8%, Dates: 15%, Topic: 20%, Assignments: 30%, CLLO: 12%, Due: 15%
    let totalPoints = 0;
    let html = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<style>
    body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #000; padding: 6px; vertical-align: top; }
    .cs-text { margin: 0 !important; padding: 0 !important; mso-para-margin: 0in !important; mso-margin-top-alt: 0in !important; mso-margin-bottom-alt: 0in !important; }
</style>
</head>
<body>
<table style="width:100%; border-collapse:collapse;">
    <thead>
        <tr style="background-color:#f2f2f2;">
            <th style="width:8%; border:1px solid #000; padding:6px; text-align:left; font-weight:bold;"><p class="cs-text" style="font-weight:bold;">Module</p></th>
            <th style="width:15%; border:1px solid #000; padding:6px; text-align:left; font-weight:bold;"><p class="cs-text" style="font-weight:bold;">Dates</p></th>
            <th style="width:20%; border:1px solid #000; padding:6px; text-align:left; font-weight:bold;"><p class="cs-text" style="font-weight:bold;">Topic</p></th>
            <th style="width:42%; border:1px solid #000; padding:6px; text-align:left; font-weight:bold;"><p class="cs-text" style="font-weight:bold;">Assignment</p></th>
            <th style="width:15%; border:1px solid #000; padding:6px; text-align:left; font-weight:bold;"><p class="cs-text" style="font-weight:bold;">Due Date</p></th>
        </tr>
    </thead>
    <tbody>`;

    state.modules.forEach((module, moduleIndex) => {
        if (module.assignments.length === 0) {
            html += `
        <tr>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"><p class="cs-text">${escapeHtml(module.name)}</p></td>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"><p class="cs-text">${escapeHtml(formatDateRange(module.startDate, module.endDate))}</p></td>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"><p class="cs-text">${escapeHtml(module.topic) || ''}</p></td>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"></td>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"></td>
        </tr>`;
        } else {
            module.assignments.forEach((assignment, aIndex) => {
                if (assignment.points) totalPoints += assignment.points;
                const clloNums = assignment.clloIds.map(id => getClloNumber(id)).sort((a,b) => a - b).join(', ');

                html += `
        <tr>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"><p class="cs-text">${aIndex === 0 ? escapeHtml(module.name) : ''}</p></td>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"><p class="cs-text">${aIndex === 0 ? escapeHtml(formatDateRange(module.startDate, module.endDate)) : ''}</p></td>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"><p class="cs-text">${aIndex === 0 ? escapeHtml(module.topic) || '' : ''}</p></td>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;">
                <p class="cs-text">
                    ${escapeHtml(assignment.name)} ${assignment.points ? `(${assignment.points} pts)` : ''}
                    ${clloNums ? `<br>CLLO: ${clloNums}` : ''}
                </p>
            </td>
            <td style="border:1px solid #000; padding:6px; vertical-align:top;"><p class="cs-text">${formatDate(assignment.dueDate)}</p></td>
        </tr>`;
            });
        }
    });

    html += `
        <tr style="font-weight:bold; background-color:#f2f2f2;">
            <td colspan="3" style="border:1px solid #000; padding:6px; text-align:right;"><p class="cs-text" style="text-align:right; font-weight:bold;">Total Points</p></td>
            <td style="border:1px solid #000; padding:6px;"><p class="cs-text" style="font-weight:bold;">${totalPoints}</p></td>
            <td style="border:1px solid #000; padding:6px;"></td>
        </tr>`;

    html += `
    </tbody>
</table>
</body>
</html>`;

    return html;
}

function copyAsMarkdown() {
    const markdown = generateMarkdown();
    navigator.clipboard.writeText(markdown).then(() => {
        showToast('Markdown copied!', 'success');
    }).catch(() => {
        showToast('Failed to copy markdown.');
    });
}

function generateMarkdown() {
    let md = '| **Module** | **Dates** | **Topic** | **Assignment** | **Due Date** |\n';
    md += '| ---------- | --------- | --------- | ------------------- | ------------ |\n';

    state.modules.forEach((module, moduleIndex) => {
        if (module.assignments.length === 0) {
            md += `| ${module.name || ''} | ${formatDateRange(module.startDate, module.endDate)} | ${module.topic || ''} | | |\n`;
        } else {
            module.assignments.forEach((assignment, aIndex) => {
                const clloNums = assignment.clloIds.map(id => getClloNumber(id)).sort((a,b) => a - b).join(', ');

                md += `| ${aIndex === 0 ? module.name || '' : ''} | ${aIndex === 0 ? formatDateRange(module.startDate, module.endDate) : ''} | ${aIndex === 0 ? module.topic || '' : ''} | ${assignment.name} ${assignment.points ? `(${assignment.points} pts)` : ''} ${clloNums ? `<br>CLLO: ${clloNums}` : ''} | ${formatDate(assignment.dueDate)} |\n`;
            });
        }
    });

    return md;
}

function downloadCsv() {
    let csv = 'Module,Dates,Topic,Assignment,CLLO,Due Date\n';

    state.modules.forEach((module, moduleIndex) => {
        if (module.assignments.length === 0) {
            csv += `"${module.name || ''}","${formatDateRange(module.startDate, module.endDate)}","${module.topic || ''}","","",""\n`;
        } else {
            module.assignments.forEach((assignment, aIndex) => {
                const clloNums = assignment.clloIds.map(id => getClloNumber(id)).sort((a,b) => a - b).join(', ');

                csv += `"${aIndex === 0 ? module.name || '' : ''}","${aIndex === 0 ? formatDateRange(module.startDate, module.endDate) : ''}","${aIndex === 0 ? module.topic || '' : ''}","${assignment.name} ${assignment.points ? `(${assignment.points} pts)` : ''}","${clloNums}","${formatDate(assignment.dueDate)}"\n`;
            });
        }
    });

    downloadFile('course-schedule.csv', csv, 'text/csv');
}

function generateCoursePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'letter');

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    let yPos = margin;

    // Helper function to add footer to current page
    const addFooter = (pageNum) => {
        doc.setFontSize(8);
        doc.setTextColor(100);
        doc.text(`Report created by Coursetrix`, pageWidth / 2, pageHeight - 10, { align: 'center' });
        doc.setFontSize(7);
        doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
    };

    // TITLE PAGE
    // Course Name
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(31, 78, 120); // Dark blue
    const courseName = state.courseName || 'Untitled Course';
    doc.text(courseName, margin, yPos);
    yPos += 15;

    // Course Dates
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0);
    if (state.courseStartDate && state.courseEndDate) {
        const startDate = new Date(state.courseStartDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const endDate = new Date(state.courseEndDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        doc.text(`${startDate} - ${endDate}`, margin, yPos);
        yPos += 15;
    } else {
        yPos += 10;
    }

    // CLLOs Section
    if (state.cllos && state.cllos.length > 0) {
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(31, 78, 120); // Dark blue
        doc.text('Course-Level Learning Outcomes', margin, yPos);
        yPos += 8;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0);

        state.cllos.forEach((cllo, index) => {
            const clloNum = index + 1;
            const clloText = `${clloNum}. ${cllo.description}`;

            // Wrap text if needed
            const splitText = doc.splitTextToSize(clloText, pageWidth - 2 * margin);

            // Check if we need a new page
            if (yPos + (splitText.length * 5) > pageHeight - 30) {
                addFooter(1);
                doc.addPage();
                yPos = margin;
            }

            doc.text(splitText, margin, yPos);
            yPos += splitText.length * 5 + 3;
        });

        yPos += 5;
    }

    // Assignment Types Summary
    if (state.assignmentTypes && state.assignmentTypes.length > 0) {
        if (yPos > pageHeight - 80) {
            addFooter(1);
            doc.addPage();
            yPos = margin;
        }

        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(31, 78, 120); // Dark blue
        doc.text('Assignment Types Summary', margin, yPos);
        yPos += 8;

        const totals = getSummaryData();
        const summaryData = state.assignmentTypes.map(type => [type, totals[type].toString()]);

        // Calculate grand total
        const grandTotal = Object.values(totals).reduce((sum, val) => sum + val, 0);
        summaryData.push(['Total Course Points', grandTotal.toString()]);

        doc.autoTable({
            startY: yPos,
            head: [['Assignment Type', 'Total Points']],
            body: summaryData,
            theme: 'striped',
            headStyles: { fillColor: [31, 78, 120], textColor: 255 }, // Dark blue header
            margin: { left: margin, right: margin },
            styles: { fontSize: 10 },
            didDrawPage: function(data) {
                // Don't add footer yet for first page
            }
        });

        yPos = doc.lastAutoTable.finalY + 15;
    }

    addFooter(1);

    // SCHEDULE TABLE
    doc.addPage();
    let pageNum = 2;
    yPos = margin;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(31, 78, 120); // Dark blue
    doc.text('Course Schedule', margin, yPos);
    yPos += 10;

    // Build schedule data
    const scheduleData = [];
    let totalPoints = 0;

    state.modules.forEach((module) => {
        if (module.assignments.length === 0) {
            scheduleData.push([
                module.name || '',
                formatDateRange(module.startDate, module.endDate),
                module.topic || '',
                '',
                ''
            ]);
        } else {
            module.assignments.forEach((assignment, aIndex) => {
                if (assignment.points) totalPoints += assignment.points;
                const clloNums = assignment.clloIds.map(id => getClloNumber(id)).sort((a,b) => a - b).join(', ');
                const assignmentText = `${assignment.name}${assignment.points ? ` (${assignment.points} pts)` : ''}${clloNums ? `\nCLLO: ${clloNums}` : ''}`;

                scheduleData.push([
                    aIndex === 0 ? module.name || '' : '',
                    aIndex === 0 ? formatDateRange(module.startDate, module.endDate) : '',
                    aIndex === 0 ? module.topic || '' : '',
                    assignmentText,
                    formatDate(assignment.dueDate)
                ]);
            });
        }
    });

    // Add total row
    scheduleData.push(['', '', 'Total Points', totalPoints.toString(), '']);

    doc.autoTable({
        startY: yPos,
        head: [['Module', 'Dates', 'Topic', 'Assignment', 'Due Date']],
        body: scheduleData,
        theme: 'plain',
        headStyles: { fillColor: [31, 78, 120], textColor: 255 }, // Dark blue header
        margin: { left: margin, right: margin },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
            0: { cellWidth: 25 },
            1: { cellWidth: 35 },
            2: { cellWidth: 40 },
            3: { cellWidth: 60 },
            4: { cellWidth: 25 }
        },
        didDrawPage: function(data) {
            addFooter(pageNum);
            if (data.pageNumber > 1) {
                pageNum++;
            }
        },
        didParseCell: function(data) {
            if (data.section === 'body') {
                // Make total row bold with light gray background
                if (data.row.index === scheduleData.length - 1) {
                    data.cell.styles.fontStyle = 'bold';
                    data.cell.styles.fillColor = [242, 242, 242];
                }
                // Module rows (where first column has content) get gray background
                else if (data.column.index === 0 && data.cell.raw && data.cell.raw !== '') {
                    // This is a module row - apply gray to all cells in this row
                    data.cell.styles.fillColor = [220, 220, 220]; // Light gray
                }
                else if (data.row.raw[0] && data.row.raw[0] !== '') {
                    // This cell is part of a module row
                    data.cell.styles.fillColor = [220, 220, 220]; // Light gray
                }
                // Assignment rows (where first column is empty) stay white (default)
            }
        }
    });

    // Generate filename from course name
    const sanitizedCourseName = courseName.replace(/[^a-z0-9]/gi, '_').replace(/_+/g, '_');
    const filename = `${sanitizedCourseName}_Blueprint.pdf`;

    // Save the PDF
    doc.save(filename);
    showToast('PDF generated successfully!', 'success');
}

// ============================================
// JSON SAVE/LOAD
// ============================================

function newCourse() {
    if (confirm('Are you sure you want to start a new course? All current data will be cleared.\n\nMake sure to click "Save Course" if you want to keep your work for later.')) {
        // Reset state to its initial default
        state = {
            courseName: '',
            courseStartDate: '',
            courseEndDate: '',
            cllos: [],
            assignmentTypes: [],
            modules: []
        };
        saveToLocalStorage(); // Persist the cleared state
        renderAll(); // Re-render the entire UI
        showToast('New course started.', 'success');
    }
}

function saveToJson() {
    const data = JSON.stringify(state, null, 2);
    const defaultFilename = state.courseName
        ? `${state.courseName.replace(/[^a-z0-9]/gi, '-')}-schedule`
        : 'course-schedule';

    const filename = prompt('Enter a filename for your course:', defaultFilename);

    if (filename) {
        const finalFilename = filename.toLowerCase().endsWith('.json') ? filename : filename + '.json';
        downloadFile(finalFilename, data, 'application/json');
        showToast('Schedule saved!', 'success');
    }
}

function loadFromJson(file) {
    if (!confirm('Importing a course file will overwrite your current work. Are you sure you want to continue?')) {
        // Clear the file input so the same file can be selected again if the user changes their mind
        document.getElementById('fileInput').value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            state = data;

            // Ensure assignmentTypes exists
            if (!state.assignmentTypes) {
                state.assignmentTypes = [...defaultAssignmentTypes];
            }

            saveToLocalStorage();
            renderAll();
            showToast('Schedule loaded!', 'success');
        } catch (err) {
            showToast('Failed to load file. Invalid format.');
        }
    };
    reader.readAsText(file);
}

function loadDemoCourse() {
    if (!confirm('Loading the demo course will replace your current work.\n\nMake sure to click "Save Course" if you want to keep your work for later.')) {
        return;
    }

    // Deep copy the demo course to avoid modifying the original
    state = JSON.parse(JSON.stringify(demoCourse));
    saveToLocalStorage();
    renderAll();
    showToast('Demo course loaded!', 'success');
}

function closeAboutModal() {
    document.getElementById('aboutModal').classList.add('hidden');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function validateDateRange(input, minDate, maxDate, rangeLabel) {
    const value = input.value;
    if (!value) return false;

    let outOfRange = false;
    if (minDate && value < minDate) outOfRange = true;
    if (maxDate && value > maxDate) outOfRange = true;

    if (outOfRange) {
        let message = '';
        if (minDate && maxDate) {
            message = `Date must fall within ${rangeLabel} dates (${formatDate(minDate)} \u2013 ${formatDate(maxDate)})`;
        } else if (minDate) {
            message = `Date must be on or after ${formatDate(minDate)}`;
        } else {
            message = `Date must be on or before ${formatDate(maxDate)}`;
        }
        showToast(message);
        input.value = '';
        return true;
    }
    return false;
}

function showToast(message, type = '') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function renderAll() {
    document.getElementById('courseName').value = state.courseName || '';
    document.getElementById('courseStartDate').value = state.courseStartDate || '';
    document.getElementById('courseEndDate').value = state.courseEndDate || '';
    renderCllos();
    renderAssignmentTypes();
    renderModules();
    renderPreview();
    renderAssignmentTypeSummary();
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Load saved data
    loadFromLocalStorage();
    renderAll();

    // Course name and dates
    document.getElementById('courseName').addEventListener('change', function() {
        state.courseName = this.value;
        saveToLocalStorage();
    });

    document.getElementById('courseStartDate').addEventListener('change', function() {
        state.courseStartDate = this.value;
        // Update end date min
        document.getElementById('courseEndDate').min = this.value;
        saveToLocalStorage();
    });

    document.getElementById('courseEndDate').addEventListener('change', function() {
        state.courseEndDate = this.value;
        // Update start date max
        document.getElementById('courseStartDate').max = this.value;
        saveToLocalStorage();
    });

    // CLLO buttons
    document.getElementById('addClloBtn').addEventListener('click', addCllo);

    // Assignment type buttons
    document.getElementById('addTypeBtn').addEventListener('click', addAssignmentType);
    document.getElementById('newAssignmentType').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addAssignmentType();
    });

    // Populate suggested types
    const suggestedSelect = document.getElementById('suggestedTypeSelect');
    suggestedAssignmentTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        suggestedSelect.appendChild(option);
    });

    suggestedSelect.addEventListener('change', function() {
        if (this.value) {
            const input = document.getElementById('newAssignmentType');
            input.value = this.value;
            this.value = ''; // Reset dropdown
            input.focus(); // Focus input so user can edit or hit enter
        }
    });

    // Module buttons
    document.getElementById('addModuleBtn').addEventListener('click', () => openModuleModal());
    document.getElementById('cancelModuleBtn').addEventListener('click', closeModuleModal);
    document.getElementById('saveModuleBtn').addEventListener('click', saveModule);
    document.getElementById('expandAllBtn').addEventListener('click', expandAllModules);
    document.getElementById('collapseAllBtn').addEventListener('click', collapseAllModules);

    // Assignment modal buttons
    document.getElementById('cancelAssignmentBtn').addEventListener('click', closeAssignmentModal);
    document.getElementById('saveAssignmentBtn').addEventListener('click', saveAssignment);

    // Export buttons
    document.getElementById('generatePdfBtn').addEventListener('click', generateCoursePDF);
    document.getElementById('copyBtn').addEventListener('click', copyTableToClipboard);
    document.getElementById('copyMarkdownBtn').addEventListener('click', copyAsMarkdown);
    document.getElementById('downloadCsvBtn').addEventListener('click', downloadCsv);

    // Summary Export buttons
    document.getElementById('copySummaryBtn').addEventListener('click', copySummaryTableToClipboard);
    document.getElementById('copySummaryMarkdownBtn').addEventListener('click', copySummaryAsMarkdown);
    document.getElementById('downloadSummaryCsvBtn').addEventListener('click', downloadSummaryCsv);

    // Save/Load buttons
    document.getElementById('newCourseBtn').addEventListener('click', newCourse);
    document.getElementById('loadDemoBtn').addEventListener('click', loadDemoCourse);
    document.getElementById('saveBtn').addEventListener('click', saveToJson);
    document.getElementById('loadBtn').addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });
    document.getElementById('fileInput').addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            loadFromJson(e.target.files[0]);
            e.target.value = ''; // Reset so same file can be loaded again
        }
    });

    // Close modals on outside click
    document.getElementById('assignmentModal').addEventListener('click', function(e) {
        if (e.target === this) closeAssignmentModal();
    });
    document.getElementById('moduleModal').addEventListener('click', function(e) {
        if (e.target === this) closeModuleModal();
    });
    document.getElementById('aboutModal').addEventListener('click', function(e) {
        if (e.target === this) closeAboutModal();
    });

    // About modal
    document.getElementById('aboutLink').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('aboutModal').classList.remove('hidden');
    });
    document.getElementById('closeAboutBtn').addEventListener('click', closeAboutModal);

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAssignmentModal();
            closeModuleModal();
            closeAboutModal();
        }
    });
});
