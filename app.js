// app.js — bigstretch

const STORAGE_KEYS = {
  liked: 'stretch_liked',
  banned: 'stretch_banned',
};

const state = {
  session: [],
  liked: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.liked) || '[]')),
  banned: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.banned) || '[]')),
  done: new Set(),
  view: 'session', // 'session' | 'favourites' | 'banned'
  filter: 'all',
  timers: {}, // { stretchId: { remaining, total, intervalId, isPaused } }
};

// ── Timer helpers ──────────────────────────────────────────

function parseHoldDuration(hold) {
  // Extract first number from hold string (e.g., "30 sec" -> 30, "45–60 sec" -> 45)
  const match = hold.match(/(\d+)\s*(sec|min)/i);
  if (!match) return null;
  const num = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();
  return unit === 'min' ? num * 60 : num;
}

function startTimer(id, duration) {
  stopTimer(id);
  state.timers[id] = {
    remaining: duration,
    total: duration,
    isPaused: false,
    intervalId: setInterval(() => {
      const timer = state.timers[id];
      if (!timer || timer.isPaused) return;

      timer.remaining--;

      if (timer.remaining <= 0) {
        stopTimer(id);
        // Auto-mark as done when timer completes
        if (!state.done.has(id)) {
          state.done.add(id);
        }
      }

      updateTimerDisplay(id);
    }, 1000)
  };
  updateTimerDisplay(id);
}

function pauseTimer(id) {
  const timer = state.timers[id];
  if (timer) {
    timer.isPaused = !timer.isPaused;
    updateTimerDisplay(id);
  }
}

function stopTimer(id) {
  const timer = state.timers[id];
  if (timer?.intervalId) {
    clearInterval(timer.intervalId);
  }
  delete state.timers[id];
  updateTimerDisplay(id);
}

function updateTimerDisplay(id) {
  const card = document.querySelector(`.card[data-id="${id}"]`);
  if (!card) return;

  const timer = state.timers[id];
  const timerBtn = card.querySelector('.action-timer');
  const timerDisplay = card.querySelector('.timer-display');

  if (!timer) {
    if (timerBtn) timerBtn.classList.remove('timer-active');
    if (timerDisplay) timerDisplay.remove();
    return;
  }

  if (timerBtn) timerBtn.classList.add('timer-active');

  if (!timerDisplay) {
    const display = document.createElement('div');
    display.className = 'timer-display';
    card.querySelector('.card-body').insertBefore(display, card.querySelector('.card-actions'));
  }

  const display = card.querySelector('.timer-display');
  const minutes = Math.floor(timer.remaining / 60);
  const seconds = timer.remaining % 60;
  const timeStr = minutes > 0 ? `${minutes}:${seconds.toString().padStart(2, '0')}` : `${seconds}s`;
  const progress = ((timer.total - timer.remaining) / timer.total) * 100;

  display.innerHTML = `
    <div class="timer-progress" style="width: ${progress}%"></div>
    <div class="timer-controls">
      <span class="timer-time">${timeStr}</span>
      <button class="timer-control-btn" onclick="event.stopPropagation(); pauseTimer(${id})" title="${timer.isPaused ? 'Resume' : 'Pause'}">
        ${timer.isPaused ? '▶' : '❚❚'}
      </button>
      <button class="timer-control-btn" onclick="event.stopPropagation(); stopTimer(${id}); render()" title="Stop">✕</button>
    </div>
  `;
}

// ── Persistence ────────────────────────────────────────────────

function persist() {
  localStorage.setItem(STORAGE_KEYS.liked, JSON.stringify([...state.liked]));
  localStorage.setItem(STORAGE_KEYS.banned, JSON.stringify([...state.banned]));
}

// ── Session building ───────────────────────────────────────────

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildSession() {
  const pool = STRETCHES.filter(s => !state.banned.has(s.id));
  const liked = shuffle(pool.filter(s => state.liked.has(s.id)));
  const others = shuffle(pool.filter(s => !state.liked.has(s.id)));
  // prioritise up to 2 liked, fill to 5 total
  return [...liked.slice(0, 2), ...others].slice(0, 5);
}

function newSession() {
  state.done.clear();
  state.view = 'session';
  state.session = buildSession();
  setActiveNav('btn-new');
  render();
}

// ── Actions ────────────────────────────────────────────────────

function toggleDone(id) {
  state.done.has(id) ? state.done.delete(id) : state.done.add(id);
  render();
}

function toggleLike(id) {
  if (state.liked.has(id)) {
    state.liked.delete(id);
  } else {
    state.liked.add(id);
    state.banned.delete(id); // can't be both
  }
  persist();
  render();
}

function skipStretch(id) {
  const idx = state.session.findIndex(s => s.id === id);
  if (idx === -1) return;
  const usedIds = new Set(state.session.map(s => s.id));
  const pool = STRETCHES.filter(s => !state.banned.has(s.id) && !usedIds.has(s.id));
  if (pool.length === 0) {
    state.session.splice(idx, 1);
  } else {
    const pick = pool[Math.floor(Math.random() * pool.length)];
    state.session[idx] = pick;
    state.done.delete(id);
  }
  render();
}

function banStretch(id) {
  state.banned.add(id);
  state.liked.delete(id);
  state.session = state.session.filter(s => s.id !== id);
  persist();
  render();
}

function unbanStretch(id) {
  state.banned.delete(id);
  persist();
  render();
}

function completeAll() {
  const list = getVisibleList();
  list.forEach(s => state.done.add(s.id));
  render();
}

// ── Views ──────────────────────────────────────────────────────

function setView(view) {
  state.view = view;
  state.filter = 'all';
  // reset filter buttons
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.filter-btn[data-area="all"]');
  if (allBtn) allBtn.classList.add('active');
  render();
}

function toggleFaves() {
  setView(state.view === 'favourites' ? 'session' : 'favourites');
  setActiveNav(state.view === 'favourites' ? 'btn-faves' : 'btn-new');
}

function toggleBanned() {
  setView(state.view === 'banned' ? 'session' : 'banned');
  setActiveNav(state.view === 'banned' ? 'btn-banned' : 'btn-new');
}

function setActiveNav(id) {
  document.querySelectorAll('.btn').forEach(b => b.classList.remove('btn-active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('btn-active');
}

function setFilter(area, btn) {
  state.filter = area;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

function getVisibleList() {
  let list;
  if (state.view === 'favourites') {
    list = STRETCHES.filter(s => state.liked.has(s.id));
  } else if (state.view === 'banned') {
    list = STRETCHES.filter(s => state.banned.has(s.id));
  } else {
    list = state.session;
  }
  if (state.filter !== 'all') {
    list = list.filter(s => s.area === state.filter);
  }
  return list;
}

// ── Rendering ──────────────────────────────────────────────────

function makeCard(s) {
  const isDone = state.done.has(s.id);
  const isLiked = state.liked.has(s.id);
  const isBannedView = state.view === 'banned';

  const card = document.createElement('article');
  card.className = 'card' + (isDone ? ' card--done' : '') + (isLiked ? ' card--liked' : '');
  card.dataset.id = s.id;

  card.innerHTML = `
    <div class="card-visual" style="background:${s.color}">
      ${!isBannedView ? `
        <button class="card-corner-btn card-corner-ban" onclick="event.stopPropagation(); banStretch(${s.id})" title="Never show this">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>
        </button>
        <button class="card-corner-btn card-corner-like ${isLiked ? 'active' : ''}" onclick="event.stopPropagation(); toggleLike(${s.id})" title="${isLiked ? 'Remove from favourites' : 'Add to favourites'}">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14s-6-4.5-6-8a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 3.5-6 8-6 8 L8 14z"/></svg>
        </button>
      ` : ''}
      <div class="card-svg" style="color:${darken(s.color)}">${s.svg}</div>
      ${isDone ? '<div class="done-badge">Done</div>' : ''}
    </div>
    <div class="card-body">
      <div class="card-area">${s.areaLabel}</div>
      <h2 class="card-name">${s.name}</h2>
      <p class="card-desc">${s.description}</p>
      <div class="card-hold">${s.hold}</div>
      <div class="card-actions">
        ${isBannedView ? `
          <button class="action-btn action-unban" onclick="unbanStretch(${s.id})" title="Restore stretch">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8z"/><path d="M6 8l2 2 4-4"/></svg>
            Restore
          </button>
        ` : `
          ${state.view === 'session' ? `
            <button class="action-btn action-skip" onclick="skipStretch(${s.id})" title="Swap for another">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 8c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6"/><path d="M10 5l4-3-4-3" fill="currentColor"/></svg>
              Swap
            </button>
          ` : ''}
          <div class="action-spacer"></div>
          ${parseHoldDuration(s.hold) ? `
            <button class="action-btn action-timer" onclick="event.stopPropagation(); startTimer(${s.id}, ${parseHoldDuration(s.hold)}); render()" title="Start timer">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="8" cy="9" r="6"/><path d="M8 6v3l2 2"/><path d="M6 2h4"/></svg>
              Timer
            </button>
          ` : ''}
          <button class="action-btn ${isDone ? 'action-undo' : 'action-done'}" onclick="toggleDone(${s.id})">
            ${isDone
              ? `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 8h10"/></svg> Undo`
              : `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 8l4 4 8-8"/></svg> Done`
            }
          </button>
        `}
      </div>
    </div>`;

  return card;
}

function darken(hex) {
  // Returns a darkened version of the bg for SVG strokes
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgb(${Math.round(r*0.45)},${Math.round(g*0.45)},${Math.round(b*0.45)})`;
}

function render() {
  const container = document.getElementById('cards');
  const filterBar = document.getElementById('filter-bar');
  const subtitle = document.getElementById('subtitle');
  const list = getVisibleList();

  // subtitle
  const subtitles = { session: 'Session for today', favourites: 'Saved stretches', banned: 'Banned stretches' };
  subtitle.textContent = subtitles[state.view];

  // filter bar: show for favourites only (meaningful)
  filterBar.style.display = state.view === 'favourites' ? 'flex' : 'none';

  // stats
  const sessionList = state.session;
  document.getElementById('stat-done').textContent = [...state.done].filter(id => sessionList.find(s => s.id === id)).length;
  document.getElementById('stat-left').textContent = sessionList.filter(s => !state.done.has(s.id)).length;
  document.getElementById('stat-faves').textContent = state.liked.size;

  container.innerHTML = '';

  if (list.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty';
    const msgs = {
      session: { icon: '🌿', text: 'All done.' },
      favourites: { icon: '♡', text: 'Heart a stretch to save it here.' },
      banned: { icon: '✓', text: 'No banned stretches. Everything is in play.' },
    };
    const m = msgs[state.view];
    empty.innerHTML = `<div class="empty-icon">${m.icon}</div><p>${m.text}</p>`;
    container.appendChild(empty);
    return;
  }

  list.forEach(s => container.appendChild(makeCard(s)));
}

// ── Init ───────────────────────────────────────────────────────

state.session = buildSession();
setActiveNav('btn-new');
render();
