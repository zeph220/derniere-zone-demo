# Guide des schemas JSON

## Principe
Tous les systèmes doivent lire les mêmes IDs.

Exemple :
- `items.json` contient `water_bottle`.
- L'icône s'appelle `water_bottle.png`.
- Le modèle s'appelle `water_bottle.obj`.
- L'animation s'appelle `fp_drink_water`.
- L'UI affiche l'item depuis son ID.

## Règle Codex
Avant de coder une feature, vérifier le JSON concerné.

## Validation minimale
Au démarrage :
- vérifier IDs uniques ;
- vérifier champs obligatoires ;
- vérifier références vers modèles/icônes ;
- logguer les erreurs ;
- ne pas crash si un asset manque : afficher placeholder.
