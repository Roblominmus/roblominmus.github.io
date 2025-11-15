// Lightweight client-side auth with some obfuscation and decoy behavior
(function(){
  const VERIFIER_HASH = 'a2d8106a6c421710b7774e1d1656c80c0e5a8409403d16cfa50a869811f0103c'; // sha256('allow')
  const SESSION_KEY = 'robshub_auth_token';
  const TTL_MS = 1000 * 60 * 60; // 1 hour session
  // Toggle session usage: when false the overlay will appear every page load
  // and successful unlocks will NOT be persisted. Set to true to enable session behavior.
  // When enabled, users can optionally "Remember me" to store a persistent token in localStorage.
  const USE_SESSION = true;

  function hex(buffer) {
    const bytes = new Uint8Array(buffer);
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function hashString(str) {
    const enc = new TextEncoder();
    const data = enc.encode(str);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return hex(digest);
  }

  function randomId(len = 24) {
    const arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    return Array.from(arr).map(b => b.toString(16).padStart(2,'0')).join('');
  }

  // Inject theme-aware CSS for the auth overlay (uses site body.light-mode / body.dark-mode)
  function ensureAuthStyles() {
    if (document.getElementById('auth-styles')) return;
    const s = document.createElement('style');
    s.id = 'auth-styles';
    s.textContent = `
      .auth-overlay { position: fixed; inset: 0; display:flex; align-items:center; justify-content:center; z-index:9999; }
      .auth-overlay .auth-backdrop { position:absolute; inset:0; background:rgba(0,0,0,0.7); }
      .auth-card { position:relative; max-width:420px; width:90%; box-sizing:border-box; padding:20px; border-radius:10px; box-shadow:0 10px 30px rgba(0,0,0,0.3); }
      .auth-card h3 { margin:0 0 8px 0; }
      .auth-card input[type=password] { width:100%; padding:8px 10px; margin-top:8px; box-sizing:border-box; border-radius:6px; border:1px solid; }
      .auth-card button { margin-top:10px; padding:8px 12px; border-radius:6px; cursor:pointer; }
      .auth-card .auth-msg { margin-top:8px; }

      /* light mode */
      body.light-mode .auth-card { background: #ffffff; color:#111827; border:1px solid rgba(0,0,0,0.06); }
      body.light-mode .auth-card input { background:#fff; color:#111827; border-color: #d1d5db; }
      body.light-mode .auth-card button { background:#e5e7eb; color:#111827; border:1px solid #d1d5db; }

      /* dark mode */
      body.dark-mode .auth-card { background: rgba(15,23,42,0.98); color:#e5e7eb; border:1px solid rgba(255,255,255,0.04); }
      body.dark-mode .auth-card input { background: rgba(17,24,39,0.9); color:#e5e7eb; border-color: #374151; }
      body.dark-mode .auth-card button { background:#374151; color:#e5e7eb; border:1px solid #4b5563; }
    `;
    document.head.appendChild(s);
  }

  function showOverlay() {
    if (document.getElementById('auth-overlay')) return;
    ensureAuthStyles();
    const ov = document.createElement('div');
    ov.id = 'auth-overlay';
    ov.className = 'auth-overlay';

    // backdrop (separate so CSS can blur if needed)
    const backdrop = document.createElement('div');
    backdrop.className = 'auth-backdrop';
    ov.appendChild(backdrop);

    const card = document.createElement('div');
    card.className = 'auth-card';

    const title = document.createElement('h3');
    title.textContent = 'Authentication Required';
    card.appendChild(title);

    const desc = document.createElement('div');
    desc.innerHTML = '<p>Please enter the access password to view this content.</p>';
    card.appendChild(desc);

    const input = document.createElement('input');
    input.type = 'password';
    input.placeholder = 'Password';
    card.appendChild(input);

  // Remember me checkbox
  const rememberWrap = document.createElement('div');
  rememberWrap.style.marginTop = '8px';
  rememberWrap.style.display = 'flex';
  rememberWrap.style.alignItems = 'center';
  const remember = document.createElement('input');
  remember.type = 'checkbox';
  remember.id = 'auth-remember';
  remember.style.marginRight = '8px';
  const rememberLabel = document.createElement('label');
  rememberLabel.htmlFor = 'auth-remember';
  rememberLabel.textContent = 'Remember me';
  rememberWrap.appendChild(remember);
  rememberWrap.appendChild(rememberLabel);
  card.appendChild(rememberWrap);

  const submit = document.createElement('button');
  submit.textContent = 'Unlock';
  card.appendChild(submit);

    const msg = document.createElement('div');
    msg.className = 'auth-msg';
    card.appendChild(msg);

    ov.appendChild(card);
    document.body.appendChild(ov);

    // Focus
    setTimeout(()=> input.focus(), 100);

    let attempts = 0;

    submit.addEventListener('click', async ()=> {
      await handleAttempt(input.value, msg, attempts, remember.checked);
      attempts += 1;
    });

    input.addEventListener('keydown', async (e)=> {
      if (e.key === 'Enter') {
        await handleAttempt(input.value, msg, attempts, remember.checked);
        attempts += 1;
      }
    });
  }

  function removeOverlay() {
    const ov = document.getElementById('auth-overlay');
    if (ov) ov.remove();
  }

  function revealContent() {
    const ct = document.getElementById('protected-content');
    if (ct) ct.style.display = '';
    // Notify interested pages that auth succeeded
    try {
      document.dispatchEvent(new CustomEvent('auth:unlocked'));
    } catch (e) {
      // ignore if dispatch fails
    }
  }

  async function handleAttempt(value, msgEl, attempts, remember) {
    msgEl.textContent = '';
    // Random delay to slow down automated tools
    const delay = 300 + Math.floor(Math.random() * 700);
    msgEl.textContent = 'Checking...';
    await new Promise(r => setTimeout(r, delay));

    // For testing and predictable behavior, accept the known password 'rite'.
    // This is intentionally simple for local testing. For production you may
    // want to replace this with a hashed verifier comparison.
    try {
      if (String(value).trim() === 'rite') {
        const token = randomId();
        const payload = { token, expires: Date.now() + TTL_MS };
        if (USE_SESSION) {
          try {
            if (remember) {
              localStorage.setItem(SESSION_KEY, JSON.stringify(payload));
            } else {
              sessionStorage.setItem(SESSION_KEY, JSON.stringify(payload));
            }
          } catch (e) { /* ignore */ }
        }
        removeOverlay();
        revealContent();
        return;
      }
    } catch (e) {
      // ignore
    }

    // decoy behavior: sometimes show a fake server error, sometimes a bad password
    if (Math.random() < 0.33) {
      msgEl.textContent = 'Temporary server error. Try again in a moment.';
    } else {
      msgEl.textContent = 'Incorrect password.';
    }

    // after several attempts, add an extra fake challenge
    if (attempts >= 3) {
      await extraDecoy(msgEl);
    }
  }

  async function extraDecoy(msgEl) {
    msgEl.textContent = 'Performing security checks...';
    await new Promise(r => setTimeout(r, 800 + Math.random()*800));
    // show a harmless fake challenge
    msgEl.textContent = 'Answer this: what is 2 + 2?';
    const answer = prompt('Security check: what is 2 + 2?', '');
    if (String(answer).trim() === '4') {
      msgEl.textContent = 'Thanks. Try password again.';
    } else {
      msgEl.textContent = 'Security check failed.';
    }
  }

  function checkSession() {
    if (!USE_SESSION) return false;
    try {
      // Prefer persistent localStorage if present
      let raw = localStorage.getItem(SESSION_KEY);
      if (!raw) raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return false;
      const obj = JSON.parse(raw);
      if (!obj || !obj.expires) return false;
      if (Date.now() > obj.expires) { localStorage.removeItem(SESSION_KEY); sessionStorage.removeItem(SESSION_KEY); return false; }
      return true;
    } catch (e) { return false; }
  }

  // Public initializer: protect current page
  window.initClientAuth = function() {
    // If session valid, reveal content
    if (checkSession()) {
      revealContent();
      return;
    }
    // else show overlay
    showOverlay();
  };

  // Auto-init for protected-content presence
  document.addEventListener('DOMContentLoaded', ()=>{
    if (document.getElementById('protected-content')) {
      // small delay so theme.js can set classes first
      setTimeout(()=> window.initClientAuth(), 80);
    }
  });
})();
