# GameManager

## Rôle
Point d'entrée global, état du jeu, pause, mode, transitions.

## Dépendances
- DataRegistry
- SaveManager
- SceneLoader

## Events
- GameStarted
- GamePaused
- GameResumed
- GameOver

## Règles Codex
- Ne pas mélanger ce système avec un autre.
- Utiliser des IDs data-driven.
- Prévoir sauvegarde si état persistant.
- Prévoir debug logs.
- Prévoir tests simples.
