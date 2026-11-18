# Enemy AI — Système complet

## Architecture
- EnemyBrain
- EnemyPerception
- EnemyStateMachine
- EnemyMovement
- EnemyCombat
- EnemyMemory
- EnemyAnimationController
- EnemyAudioController
- EnemyDebug

## États
Idle → Patrol → Suspicious → Investigate → Alert → Chase → Attack → Search → Return.

## Vision
Dépend de distance, angle, line of sight, lumière, mouvement du joueur, posture, brouillard, couverture.

## Bruit
Chaque action du joueur crée un NoiseEvent :
position, rayon, intensité, durée, type.

## Mémoire
L'ennemi garde dernière position vue/entendue, suspicion, temps depuis contact et points de recherche.

## Anti-injustice
Un ennemi ne doit jamais voir à travers les murs, attaquer sans télégraphe, ni connaître la position exacte du joueur sans perception.
