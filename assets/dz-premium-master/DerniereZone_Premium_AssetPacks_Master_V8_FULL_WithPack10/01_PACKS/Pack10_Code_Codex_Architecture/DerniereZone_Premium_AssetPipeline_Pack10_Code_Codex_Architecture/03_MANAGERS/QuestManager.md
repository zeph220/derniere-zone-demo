# QuestManager

## Rôle
Gère quêtes, objectifs, états, choix, rewards, consequences.

## Dépendances
- DataRegistry
- UIManager
- SaveManager

## Events
- QuestStarted
- ObjectiveUpdated
- QuestCompleted
- QuestFailed

## Règles Codex
- Ne pas mélanger ce système avec un autre.
- Utiliser des IDs data-driven.
- Prévoir sauvegarde si état persistant.
- Prévoir debug logs.
- Prévoir tests simples.
