# Écran — Menu principal

ID : `main_menu`
Priorité : critical

## But
Première impression du jeu.

## États
- new_game
- continue
- load
- options
- credits
- quit

## Animation recommandée
rain_loop + radio_static + title_fade

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
