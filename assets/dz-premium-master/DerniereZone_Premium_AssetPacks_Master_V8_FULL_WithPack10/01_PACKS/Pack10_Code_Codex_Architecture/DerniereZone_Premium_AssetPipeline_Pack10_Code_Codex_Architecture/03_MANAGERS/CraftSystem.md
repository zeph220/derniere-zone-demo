# CraftSystem

## Rôle
Valide les recettes, consomme ingrédients, crée résultats.

## Dépendances
- InventorySystem
- DataRegistry
- UIManager

## Events
- CraftStarted
- CraftCompleted
- CraftFailed

## Règles Codex
- Ne pas mélanger ce système avec un autre.
- Utiliser des IDs data-driven.
- Prévoir sauvegarde si état persistant.
- Prévoir debug logs.
- Prévoir tests simples.
