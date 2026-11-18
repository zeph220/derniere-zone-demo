# Système audio dynamique

## AudioManager

Gère :
- bus audio ;
- état de danger ;
- zone actuelle ;
- transitions ;
- stingers ;
- ducking dialogue ;
- filtres santé ;
- réverbération par zone.

## Bus
- Master
- Music
- Ambience
- SFX
- UI
- Dialogue
- Radio
- Enemies

## Transitions
- Exploration → Suspicion : fondu 1.2s.
- Suspicion → Chase : stinger + layer chase.
- Chase → Search : réduction 4s.
- Search → Exploration : retour 8s.
- Dialogue : music duck -8 dB.
- Death : couper input, stinger death, écran mort.

## Intégration IA
EnemyAI envoie :
- enemy_suspicious
- enemy_alert
- enemy_chase_start
- enemy_lost_player
- enemy_attack

## Intégration santé
SurvivalStats envoie :
- low_health
- bleeding
- infection_cough
- thirst_critical
- fatigue_high
