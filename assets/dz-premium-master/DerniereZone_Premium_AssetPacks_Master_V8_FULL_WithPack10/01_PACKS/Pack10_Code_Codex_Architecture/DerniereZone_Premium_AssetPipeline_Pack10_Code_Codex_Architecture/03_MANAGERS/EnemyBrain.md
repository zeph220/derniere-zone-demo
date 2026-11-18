# EnemyBrain

## Rôle
Contrôle IA via perception, mémoire, state machine.

## Dépendances
- EnemyPerception
- EnemyStateMachine
- EnemyMovement
- EnemyCombat

## Events
- EnemySuspicious
- EnemyAlert
- EnemyChaseStarted
- EnemyLostPlayer
- EnemyDied

## Règles Codex
- Ne pas mélanger ce système avec un autre.
- Utiliser des IDs data-driven.
- Prévoir sauvegarde si état persistant.
- Prévoir debug logs.
- Prévoir tests simples.
