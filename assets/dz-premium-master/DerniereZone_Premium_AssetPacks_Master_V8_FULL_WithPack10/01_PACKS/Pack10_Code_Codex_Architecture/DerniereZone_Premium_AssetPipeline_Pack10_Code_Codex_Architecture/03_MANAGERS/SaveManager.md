# SaveManager

## Rôle
Sauvegarde/charge joueur, monde, quêtes, abri, factions.

## Dépendances
- GameManager

## Events
- SaveStarted
- SaveCompleted
- LoadStarted
- LoadCompleted
- SaveFailed

## Règles Codex
- Ne pas mélanger ce système avec un autre.
- Utiliser des IDs data-driven.
- Prévoir sauvegarde si état persistant.
- Prévoir debug logs.
- Prévoir tests simples.
