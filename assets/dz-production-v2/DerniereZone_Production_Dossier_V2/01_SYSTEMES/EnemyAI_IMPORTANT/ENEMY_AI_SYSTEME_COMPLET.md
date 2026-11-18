# Enemy AI — Spécification très développée

## Objectif
IA stressante, lisible et systémique : vision, bruit, mémoire, recherche, poursuite, perte de trace.

## Composants
EnemyBrain, EnemyPerception, EnemyStateMachine, EnemyMovement, EnemyCombat, EnemyAudio, EnemyAnimationController, EnemyMemory.

## États
Idle → Patrol → Suspicious → Investigate → Alert → Chase → Attack → Search → Return.

## Vision
Distance, angle, ligne de vue, lumière, posture, mouvement, météo, obstacles.

## Bruit
Marche faible, sprint fort, saut moyen, porte forte, objet lancé ciblé, toux infection, générateur continu.

## Mémoire
Dernière position vue, dernière position entendue, temps depuis confirmation, niveau de suspicion, alertes récentes.

## Types
Normal : base. Rapide : panique. Aveugle : bruit. Lourd : contrôle espace. Sujet Oméga : horreur narrative.

## IA de groupe
Cri partage l’alerte. Les rapides encerclent. Les lourds ferment l’espace.

## Debug obligatoire
Cône de vision, rayon bruit, état actuel, dernière position connue, suspicion, nav path.

## Erreurs à éviter
Vision à travers murs, poursuite parfaite sans voir joueur, abandon trop rapide, ennemis injustes ou silencieux.

## Tests
Accroupi derrière mur, sprint derrière ennemi, objet lancé, aveugle suit bruit, perte de vue, retour patrouille.
