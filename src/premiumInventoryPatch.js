const iconByLabel = new Map([
  ["Eau propre", "💧"],
  ["Ration", "▰"],
  ["Bandage", "+"],
  ["Materiaux", "▦"],
  ["Alcool medical", "✚"],
  ["Batterie", "⚡"],
  ["Carburant", "◆"],
  ["Essence", "◆"],
  ["Piece moteur", "⚙"],
  ["Piece d'arme", "⌁"],
  ["Filtre a eau", "◌"],
  ["Fusible", "⏚"],
  ["Plan de tunnel", "⌖"],
  ["Fragment de plan", "⌖"],
  ["Fiche quartier", "◫"],
  ["Cle d'immeuble", "⌑"],
  ["Munitions", "•"],
  ["Masque a gaz", "◎"],
  ["Echantillon Helios", "◇"],
  ["Cassette de Moreau", "▣"],
  ["Medaille de Clara", "✦"],
]);

const typeByLabel = new Map([
  ["Eau propre", "water"],
  ["Filtre a eau", "water"],
  ["Ration", "food"],
  ["Bandage", "medical"],
  ["Alcool medical", "medical"],
  ["Masque a gaz", "medical"],
  ["Materiaux", "material"],
  ["Piece moteur", "material"],
  ["Piece d'arme", "weapon"],
  ["Batterie", "power"],
  ["Fusible", "power"],
  ["Carburant", "fuel"],
  ["Essence", "fuel"],
  ["Munitions", "weapon"],
  ["Plan de tunnel", "rare"],
  ["Fragment de plan", "rare"],
  ["Fiche quartier", "rare"],
  ["Cle d'immeuble", "rare"],
  ["Echantillon Helios", "rare"],
  ["Cassette de Moreau", "rare"],
  ["Medaille de Clara", "rare"],
]);

function state() {
  try {
    return window.__DZ_BOT__?.quickState?.() || null;
  } catch {
    return null;
  }
}

function splitItemText(row) {
  const qty = row.querySelector("b")?.textContent?.trim() || "0";
  const label = row.textContent.replace(qty, "").trim();
  return { label, qty };
}

function enhanceItem(row) {
  if (!row || row.dataset.dzEnhanced === "1") return;
  const { label, qty } = splitItemText(row);
  row.dataset.dzEnhanced = "1";
  row.dataset.itemType = typeByLabel.get(label) || "misc";
  row.innerHTML = `
    <span class="dzItemIcon">${iconByLabel.get(label) || "□"}</span>
    <span class="dzItemText"><strong>${label || "Objet"}</strong><small>${row.dataset.itemType}</small></span>
    <b class="dzItemQty">${qty}</b>
  `;
}

function enhanceInventory() {
  const panel = document.querySelector("#inventoryPanel");
  if (!panel) return;

  if (!panel.querySelector(".dzInventoryClose")) {
    const button = document.createElement("button");
    button.className = "dzInventoryClose";
    button.type = "button";
    button.textContent = "Fermer";
    button.addEventListener("click", () => panel.classList.add("collapsed"));
    panel.querySelector(".inventoryHeader")?.appendChild(button);
  }

  const current = state();
  const status = document.querySelector("#inventoryStatus");
  if (status && current) {
    const carried = Object.values(current.inventory || {}).reduce((sum, value) => sum + (Number(value) || 0), 0);
    status.textContent = `${current.zone || "zone"} · ${carried} objets · souris libre`;
  }

  panel.querySelectorAll(".itemList li").forEach(enhanceItem);
}

function hasOpenGamePanel() {
  return ["#inventoryPanel", "#objectivesPanel", "#mapPanel"].some((selector) => {
    const panel = document.querySelector(selector);
    return panel && !panel.classList.contains("collapsed");
  });
}

function syncPointerMode() {
  const current = state();
  const screen = current?.screen;
  const inGame = screen === "game";
  const panelOpen = hasOpenGamePanel();
  const screenOpen = Boolean(document.querySelector(".gameScreen.active:not(#mainMenuScreen)") || document.body.classList.contains("ui-open"));
  const showCursor = !inGame || panelOpen || screenOpen;

  document.body.classList.toggle("dzGameplayCursorHidden", inGame && !showCursor);
  document.body.classList.toggle("dzGamePanelOpen", panelOpen);

  if (showCursor && document.pointerLockElement) {
    document.exitPointerLock?.();
  }
}

function closePanelsOnEscape(event) {
  if (event.code !== "Escape" || !hasOpenGamePanel()) return;
  event.preventDefault();
  ["#inventoryPanel", "#objectivesPanel", "#mapPanel"].forEach((selector) => {
    document.querySelector(selector)?.classList.add("collapsed");
  });
  syncPointerMode();
}

const observer = new MutationObserver(() => {
  enhanceInventory();
  syncPointerMode();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["class"],
});

document.addEventListener("keydown", closePanelsOnEscape, true);
document.addEventListener("pointerdown", () => setTimeout(syncPointerMode, 0), true);
["mousemove", "mousedown", "mouseup", "wheel", "contextmenu"].forEach((type) => {
  document.addEventListener(
    type,
    (event) => {
      if (!hasOpenGamePanel()) return;
      const target = event.target;
      if (target?.closest?.("#inventoryPanel, #objectivesPanel, #mapPanel")) {
        event.stopImmediatePropagation();
      }
    },
    true
  );
});
setInterval(() => {
  enhanceInventory();
  syncPointerMode();
}, 180);

enhanceInventory();
syncPointerMode();
