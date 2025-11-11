// Unified theme manager for Robs Hub
(function(){
  const STORAGE_KEY = 'site-mode'; // values: 'dark-mode' or 'light-mode'

  function detectLegacy() {
    // Migrate old keys if present
    const ttt = localStorage.getItem('ttt-mode');
    if (ttt) {
      if (ttt === 'dark') localStorage.setItem(STORAGE_KEY, 'dark-mode');
      else if (ttt === 'light') localStorage.setItem(STORAGE_KEY, 'light-mode');
      localStorage.removeItem('ttt-mode');
    }
    const hub = localStorage.getItem('hub-mode');
    if (hub) { localStorage.setItem(STORAGE_KEY, hub); localStorage.removeItem('hub-mode'); }
    const quiz = localStorage.getItem('quiz-mode');
    if (quiz) { localStorage.setItem(STORAGE_KEY, quiz); localStorage.removeItem('quiz-mode'); }
    const ai = localStorage.getItem('ai-viz-mode');
    if (ai) { localStorage.setItem(STORAGE_KEY, ai); localStorage.removeItem('ai-viz-mode'); }
    const sched = localStorage.getItem('schedule-mode');
    if (sched) { localStorage.setItem(STORAGE_KEY, sched); localStorage.removeItem('schedule-mode'); }
    const lightBool = localStorage.getItem('light-mode');
    if (lightBool !== null) {
      if (lightBool === 'true' || lightBool === true) localStorage.setItem(STORAGE_KEY, 'light-mode');
      else localStorage.setItem(STORAGE_KEY, 'dark-mode');
      localStorage.removeItem('light-mode');
    }
  }

  function applyMode(mode) {
    const html = document.documentElement;
    const body = document.body;
    // Normalize mode value
    if (mode !== 'light-mode' && mode !== 'dark-mode') mode = 'dark-mode';

    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(mode);

    // For pages that rely on the `html.dark` pattern (tic-tac-toe), keep html.dark in sync
    if (mode === 'dark-mode') html.classList.add('dark'); else html.classList.remove('dark');

    // Clean up inline styling that some pages set previously
    body.style.background = '';
    body.style.color = '';

    // Update any toggle buttons' icons/title
    const toggles = document.querySelectorAll('.mode-toggle, [id^="mode-toggle"]');
    toggles.forEach(btn => {
      try {
        btn.textContent = mode === 'dark-mode' ? '☀️' : '🌙';
        btn.title = mode === 'dark-mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      } catch (e) { /* ignore */ }
    });
  }

  function toggleMode() {
    const current = localStorage.getItem(STORAGE_KEY) || 'dark-mode';
    const next = current === 'dark-mode' ? 'light-mode' : 'dark-mode';
    localStorage.setItem(STORAGE_KEY, next);
    applyMode(next);
  }

  function wireButtons() {
    // Wire class-based toggles
    document.querySelectorAll('.mode-toggle').forEach(btn => {
      btn.addEventListener('click', toggleMode);
    });
    // Wire any id-based toggles like #mode-toggle or #mode-toggle-ttt
    document.querySelectorAll('[id^="mode-toggle"]').forEach(btn => {
      if (!btn.classList.contains('mode-toggle')) {
        btn.addEventListener('click', toggleMode);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    detectLegacy();
    const saved = localStorage.getItem(STORAGE_KEY) || 'dark-mode';
    applyMode(saved);
    wireButtons();
  });
})();
