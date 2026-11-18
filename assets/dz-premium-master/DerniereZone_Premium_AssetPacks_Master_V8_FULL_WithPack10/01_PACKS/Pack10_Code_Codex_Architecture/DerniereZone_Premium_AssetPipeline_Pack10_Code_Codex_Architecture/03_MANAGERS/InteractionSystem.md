# InteractionSystem

## Rôle
Détecte l'objet regardé/proche et déclenche l'interaction.

## Dépendances
- UIManager
- InventorySystem
- QuestManager

## Events
- InteractionTargetChanged
- InteractionStarted
- InteractionCompleted

## Règles Codex
- Ne pas mélanger ce système avec un autre.
- Utiliser des IDs data-driven.
- Prévoir sauvegarde si état persistant.
- Prévoir debug logs.
- Prévoir tests simples.
