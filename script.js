// --- Global Data ---
let data = {};

// --- State & DOM Elements ---
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let currentDay = days[new Date().getDay()];
let modalHistory = [];

const elems = {
    themeBtn: document.getElementById('themeBtn'),
    dateDisplay: document.getElementById('dateDisplay'),
    dayNav: document.getElementById('dayNav'),
    mainContent: document.getElementById('mainContent'),
    modal: {
        overlay: document.getElementById('modalOverlay'),
        title: document.getElementById('modalTitle'),
        body: document.getElementById('modalBody'),
        backBtn: document.getElementById('modalBackBtn'),
        closeBtn: document.getElementById('modalCloseBtn')
    }
};

// --- Initialization ---
async function initializeApp() {
    try {
        const response = await fetch('data.json');
        data = await response.json();
        renderDayNav();
        renderMainContent();
        const activeDay = document.querySelector('.day-pill.active');
        if (activeDay) {
            activeDay.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    } catch (error) {
        console.error('Error loading data:', error);
        elems.mainContent.innerHTML = '<p>Error loading schedule data</p>';
    }
}

// --- Theme Management ---
let theme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);
elems.themeBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// --- Modal System with Navigation ---
function openModal(title, contentHTML, isBack = false) {
    if (!isBack && elems.modal.overlay.classList.contains('active')) {
        modalHistory.push({
            title: elems.modal.title.textContent,
            body: elems.modal.body.innerHTML
        });
    } else if (!isBack) {
        modalHistory = [];
    }

    elems.modal.title.textContent = title;
    elems.modal.body.innerHTML = contentHTML;
    
    if (modalHistory.length > 0) {
        elems.modal.backBtn.classList.remove('hidden');
    } else {
        elems.modal.backBtn.classList.add('hidden');
    }

    elems.modal.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function goBack() {
    if (modalHistory.length === 0) return;
    const prevState = modalHistory.pop();
    openModal(prevState.title, prevState.body, true);
}

function closeModal() {
    elems.modal.overlay.classList.remove('active');
    document.body.style.overflow = '';
    modalHistory = [];
    setTimeout(() => { elems.modal.body.innerHTML = ''; }, 300);
}

elems.modal.closeBtn.addEventListener('click', closeModal);
elems.modal.backBtn.addEventListener('click', goBack);
elems.modal.overlay.addEventListener('click', (e) => {
    if (e.target === elems.modal.overlay) closeModal();
});

// --- Utilities ---
function getYouTubeID(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function parseTime(timeStr) {
    if (!timeStr) return -1;
    if (timeStr.toLowerCase().includes('evening')) return 18 * 60;
    if (timeStr.toLowerCase().includes('morning')) return 8 * 60;
    
    const match = timeStr.match(/(\d+):?(\d*)\s*(AM|PM)/i);
    if (!match) return -1;
    let [_, h, m, p] = match;
    h = parseInt(h);
    m = m ? parseInt(m) : 0;
    if (p.toUpperCase() === 'PM' && h !== 12) h += 12;
    if (p.toUpperCase() === 'AM' && h === 12) h = 0;
    return h * 60 + m;
}

function isCurrentTime(timeRange) {
    if (!timeRange) return false;
    const now = new Date();
    if (days[now.getDay()] !== currentDay) return false;
    
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    if (timeRange === "Evening") {
        return currentMinutes >= (18 * 60);
    }
    
    if (!timeRange.includes('-')) return false;

    const parts = timeRange.split('-').map(s => s.trim());
    let start = parseTime(parts[0]);
    let end = parseTime(parts[1]);
    
    if (parts[1].toLowerCase().includes("end of day")) end = 24 * 60;
    
    if (start === -1) return false;
    if (end === -1) end = start + 60;
    
    if (end < start) return currentMinutes >= start || currentMinutes < end;
    return currentMinutes >= start && currentMinutes < end;
}

// --- Render Logic ---
function renderDayNav() {
    elems.dayNav.innerHTML = '';
    const todayIndex = new Date().getDay();
    
    days.forEach((day, index) => {
        const btn = document.createElement('button');
        btn.className = `day-pill ${day === currentDay ? 'active' : ''} ${index === todayIndex ? 'today-highlight' : ''}`;
        btn.textContent = day.charAt(0).toUpperCase() + day.slice(1, 3);
        
        btn.addEventListener('click', () => {
            currentDay = day;
            renderDayNav();
            renderMainContent();
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
        
        elems.dayNav.appendChild(btn);
    });

    const dateObj = new Date();
    const dayName = currentDay.charAt(0).toUpperCase() + currentDay.slice(1);
    elems.dateDisplay.textContent = currentDay === days[todayIndex] 
        ? `${dayName}, ${dateObj.toLocaleDateString()}` 
        : `Viewing ${dayName}`;
}

function renderMainContent() {
    let html = '<div class="animate-in">';
    
    const schedule = data.schedule_blocks[currentDay];
    
    if (schedule && schedule.length > 0) {
        html += '<div class="section-header">Daily Schedule</div><div class="card">';
        schedule.forEach(item => {
            const isCurrent = isCurrentTime(item.time);
            html += `
                <div class="list-item ${isCurrent ? 'current-highlight' : ''}" onclick='openScheduleDetail(${JSON.stringify(item)})'>
                    <div class="list-item-content">
                        <div class="item-primary">${item.time}</div>
                        <div class="item-secondary">${item.activity}</div>
                    </div>
                    <div class="chevron">›</div>
                </div>
            `;
        });
        html += '</div>';
    } else {
        html += '<div class="card"><div class="list-item"><div class="list-item-content">No schedule items for today.</div></div></div>';
    }

    elems.mainContent.innerHTML = html;
}

function openScheduleDetail(item) {
  if (item.type === 'gym') {
    const routineKey = item.routine;
    let routine = data.gym_data.routines[routineKey];
    
    if (routine) {
        openRoutine(routineKey, routine);
    } else {
        openGenericDetail(item);
    }
  } 
  else if (item.type === 'cyber') {
      openPhaseList();
  } 
  else {
      openGenericDetail(item);
  }
}

function openGenericDetail(item) {
    let html = '<div class="card" style="padding: 20px;">';
    html += `
        <div class="detail-group">
            <div class="detail-label">Activity</div>
            <div class="detail-value" style="font-weight: 600;">${item.activity}</div>
        </div>
        <div class="detail-group">
            <div class="detail-label">Time</div>
            <div class="detail-value">${item.time}</div>
        </div>
        <div class="detail-group">
            <div class="detail-label">Details</div>
            <div class="detail-value">${item.details || 'No additional details.'}</div>
        </div>
    `;
    html += '</div>';
    openModal("Activity Details", html);
}

// --- Specific Modal Renderers ---

function openRoutine(key, routine) {
    let html = '';
    
    html += `<div class="card" style="padding: 16px; margin-bottom: 16px;">
        <div class="detail-label">Goal</div>
        <div class="detail-value" style="font-size: 14px; margin-bottom: 8px;">${routine.description}</div>
    </div>`;

    if (routine.warmup) {
         html += '<div class="section-header">Warm-Up (Mandatory)</div>';
         html += '<div class="card" style="background: transparent;">';
         const warmup = data.gym_data.warmup;
         warmup.exercises.forEach((ex, idx) => {
             html += `
            <div class="list-item" style="background: var(--card-bg); margin-bottom: 1px; ${idx === 0 ? 'border-top-left-radius: 12px; border-top-right-radius: 12px;' : ''} ${idx === warmup.exercises.length - 1 ? 'border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;' : ''}" onclick='event.stopPropagation(); openExercise(${JSON.stringify(ex)})'>
                <div class="list-item-content">
                    <div class="item-primary">${ex.name}</div>
                    <div class="item-secondary">${ex.duration || ex.reps}</div>
                </div>
                <div class="chevron">›</div>
            </div>`;
         });
         html += '</div>';
    }

    const exercises = routine.circuit || routine.exercises;
    html += `<div class="section-header">${routine.circuit ? 'Circuit' : 'Main Workout'}</div>`;
    html += '<div class="card" style="background: transparent;">';
    
    exercises.forEach((ex, idx) => {
        html += `
            <div class="list-item" style="background: var(--card-bg); margin-bottom: 1px; ${idx === 0 ? 'border-top-left-radius: 12px; border-top-right-radius: 12px;' : ''} ${idx === exercises.length - 1 ? 'border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;' : ''}" onclick='event.stopPropagation(); openExercise(${JSON.stringify(ex)})'>
                <div class="list-item-content">
                    <div class="item-primary">${ex.name}</div>
                    <div class="item-secondary">${ex.reps || ex.sets || ex.duration || ex.details || 'View Details'}</div>
                </div>
                <div class="chevron">›</div>
            </div>
        `;
    });
    html += '</div>';
    
    openModal(routine.title, html);
}

function openExercise(ex) {
    let html = '<div class="animate-in">';
    
    if (ex.video) {
        const videoId = getYouTubeID(ex.video);
        if (videoId) {
            html += `
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
                </div>
            `;
        }
    }

    html += '<div class="card" style="padding: 20px;">';
    
    const fields = [
        { label: 'Reps/Time', val: ex.reps || ex.sets || ex.duration },
        { label: 'Rest', val: ex.rest },
        { label: 'Form', val: ex.form },
        { label: 'Why', val: ex.why },
        { label: 'Details', val: ex.details }
    ];

    fields.forEach(f => {
        if (f.val) {
            html += `
                <div class="detail-group">
                    <div class="detail-label">${f.label}</div>
                    <div class="detail-value">${f.val}</div>
                </div>
            `;
        }
    });

    html += '</div></div>';
    openModal(ex.name, html);
}

function openPhaseList() {
    let html = '<div class="card" style="background: transparent;">';
    data.cyber_content_database.phases.forEach((phase, idx) => {
        html += `
            <div class="list-item" style="background: var(--card-bg); margin-bottom: 1px; ${idx===0?'border-top-left-radius:12px;border-top-right-radius:12px;':''} ${idx===data.cyber_content_database.phases.length-1?'border-bottom-left-radius:12px;border-bottom-right-radius:12px;':''}" onclick='openPhase(${JSON.stringify(phase)})'>
                <div class="list-item-content">
                    <div class="item-primary">Phase ${phase.id}: ${phase.title}</div>
                    <div class="item-secondary" style="font-size: 12px; opacity: 0.8; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${phase.description}</div>
                </div>
                <div class="chevron">›</div>
            </div>
        `;
    });
    html += '</div>';
    openModal('Cyber Security Plan', html);
}

function openPhase(phase) {
    let html = `<div class="card" style="padding: 16px; margin-bottom: 16px;">
        <div class="detail-label">Phase Goal</div>
        <div class="detail-value" style="font-size: 14px;">${phase.description}</div>
    </div>`;

    html += '<div class="section-header">Tasks & Skills</div>';
    html += '<div class="card" style="background: transparent;">';
    
    phase.tasks.forEach((task, idx) => {
        html += `
            <div class="list-item" style="background: var(--card-bg); margin-bottom: 1px; ${idx===0?'border-top-left-radius:12px;border-top-right-radius:12px;':''} ${idx===phase.tasks.length-1?'border-bottom-left-radius:12px;border-bottom-right-radius:12px;':''}" onclick='openTask(${JSON.stringify(task)})'>
                <div class="list-item-content">
                    <div class="item-primary">${task.name} <span class="tag">${task.type}</span></div>
                    <div class="item-secondary">Click for full details</div>
                </div>
                <div class="chevron">›</div>
            </div>
        `;
    });
    html += '</div>';
    openModal(`Phase ${phase.id}`, html);
}

function openTask(task) {
    let html = '<div class="card" style="padding: 20px;">';
    
    if (task.details) {
         html += `
            <div class="detail-group">
                <div class="detail-label">Details & How To</div>
                <div class="detail-value">${task.details}</div>
            </div>
        `;
    }

    if (task.deliverable) {
        html += `
            <div class="detail-group">
                <div class="detail-label">Deliverable</div>
                <div class="detail-value">${task.deliverable}</div>
            </div>
        `;
    }

    if (task.done) {
        html += `
            <div class="detail-group">
                <div class="detail-label" style="color: var(--accent);">Definition of Done</div>
                <div class="detail-value" style="font-weight: 500;">${task.done}</div>
            </div>
        `;
    }

    html += '</div>';
    openModal("Task Details", html);
}

// --- Load on Ready ---
window.addEventListener('load', initializeApp);
