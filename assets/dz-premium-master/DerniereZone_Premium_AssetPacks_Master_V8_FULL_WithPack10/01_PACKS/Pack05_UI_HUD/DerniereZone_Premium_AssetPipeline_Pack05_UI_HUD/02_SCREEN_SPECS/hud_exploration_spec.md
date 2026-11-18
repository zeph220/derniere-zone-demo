# Écran — HUD exploration

ID : `hud_exploration`
Priorité : critical

## But
Afficher stats sans gêner l'immersion.

## États
- normal
- low_hunger
- low_thirst
- low_health
- enemy_near

## Animation recommandée
subtle fade, danger pulse

## Éléments UI
- Titre ou label clair.
- Zone principale lisible.
- Boutons/actions visibles.
- Feedback sonore.
- Support clavier/souris/manette.
- Support accessibilité.

## Données nécessaires
- état courant ;
- textes localisés ;
- sons UI ;
- navigation clavier ;
- sauvegarde si écran persistant.

## QA
- Lisible en 1080p.
- Lisible sur fond clair/sombre.
- Aucun texte coupé.
- Navigation complète sans souris.
- Animation non bloquante.
