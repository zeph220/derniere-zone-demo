# InventorySystem

## Rôle
Stocke items, quantités, poids, raccourcis, utilisation.

## Dépendances
- DataRegistry
- PlayerSurvivalStats
- UIManager

## Events
- ItemAdded
- ItemRemoved
- InventoryChanged
- ItemUsed

## Règles Codex
- Ne pas mélanger ce système avec un autre.
- Utiliser des IDs data-driven.
- Prévoir sauvegarde si état persistant.
- Prévoir debug logs.
- Prévoir tests simples.
