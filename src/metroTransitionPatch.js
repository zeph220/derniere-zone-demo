let lastZone = null;
let running = false;
let lastStartTime = 0;

function quickState() {
  try {
    return window.__DZ_BOT__?.quickState?.() || null;
  } catch {
    return null;
  }
}

function playMetroSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  try {
    const ctx = new AudioContext();
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.08);
    master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.2);
    master.connect(ctx.destination);

    const rumble = ctx.createOscillator();
    const rumbleGain = ctx.createGain();
    rumble.type = "sawtooth";
    rumble.frequency.setValueAtTime(42, ctx.currentTime);
    rumble.frequency.exponentialRampToValueAtTime(29, ctx.currentTime + 2.6);
    rumbleGain.gain.setValueAtTime(0.09, ctx.currentTime);
    rumbleGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4.1);
    rumble.connect(rumbleGain).connect(master);
    rumble.start();
    rumble.stop(ctx.currentTime + 4.2);

    [0.42, 1.18, 2.05, 3.12].forEach((offset) => {
      const hit = ctx.createOscillator();
      const hitGain = ctx.createGain();
      hit.type = "square";
      hit.frequency.setValueAtTime(170 + offset * 35, ctx.currentTime + offset);
      hit.frequency.exponentialRampToValueAtTime(54, ctx.currentTime + offset + 0.16);
      hitGain.gain.setValueAtTime(0.0001, ctx.currentTime + offset);
      hitGain.gain.exponentialRampToValueAtTime(0.13, ctx.currentTime + offset + 0.02);
      hitGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + offset + 0.22);
      hit.connect(hitGain).connect(master);
      hit.start(ctx.currentTime + offset);
      hit.stop(ctx.currentTime + offset + 0.24);
    });

    setTimeout(() => ctx.close?.(), 4600);
  } catch {
    // Some browsers block audio until the next user gesture. The visual still plays.
  }
}

function startMetroDescent() {
  if (running || document.querySelector(".metroDropCinematic")) return;
  running = true;
  lastStartTime = performance.now();

  const overlay = document.createElement("section");
  overlay.className = "metroDropCinematic";
  overlay.setAttribute("aria-label", "Descente metro");
  overlay.innerHTML = `
    <div class="metroDropSky"></div>
    <div class="metroDropSteps" aria-hidden="true">
      ${Array.from({ length: 15 }, (_, index) => `<i style="--i:${index}"></i>`).join("")}
    </div>
    <div class="metroDropRails" aria-hidden="true"><i></i><i></i></div>
    <div class="metroDropNeon" aria-hidden="true"></div>
    <div class="metroDropDust" aria-hidden="true">
      ${Array.from({ length: 26 }, (_, index) => `<i style="--i:${index}"></i>`).join("")}
    </div>
    <div class="metroDropThreat" aria-hidden="true">
      <span></span>
      <b></b>
    </div>
    <div class="metroDropText">
      <small>Acces souterrain</small>
      <strong>Descente metro</strong>
      <em>Les rails vibrent. Quelque chose bouge au fond.</em>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add("metroDropActive");
  playMetroSound();

  setTimeout(() => overlay.classList.add("isLeaving"), 4150);
  setTimeout(() => {
    overlay.remove();
    document.body.classList.remove("metroDropActive");
    running = false;
  }, 5000);
}

function watchMetroEntry() {
  const state = quickState();
  if (!state) return;

  const currentZone = state.zone;
  const enoughTimeSinceLastRun = performance.now() - lastStartTime > 9000;
  const enteredMetro =
    state.screen === "game" &&
    currentZone === "metro" &&
    lastZone &&
    lastZone !== "metro" &&
    enoughTimeSinceLastRun;

  if (enteredMetro) startMetroDescent();
  lastZone = currentZone;
}

setInterval(watchMetroEntry, 250);
