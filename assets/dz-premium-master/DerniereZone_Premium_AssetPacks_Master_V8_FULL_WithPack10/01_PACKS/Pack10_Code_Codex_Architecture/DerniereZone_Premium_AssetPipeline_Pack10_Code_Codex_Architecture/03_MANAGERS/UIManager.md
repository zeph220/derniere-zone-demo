# UIManager

## Rôle
Route les updates UI vers HUD, inventaire, dialogue, mort, save.

## Dépendances
- GameManager

## Events
- UIScreenOpened
- UIScreenClosed

## Règles Codex
- Ne pas mélanger ce système avec un autre.
- Utiliser des IDs data-driven.
- Prévoir sauvegarde si état persistant.
- Prévoir debug logs.
- Prévoir tests simples.
