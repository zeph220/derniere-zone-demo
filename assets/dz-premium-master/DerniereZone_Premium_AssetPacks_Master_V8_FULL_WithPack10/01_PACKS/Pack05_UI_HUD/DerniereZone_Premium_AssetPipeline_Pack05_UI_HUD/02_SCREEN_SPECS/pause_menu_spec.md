# Écran — Pause

ID : `pause_menu`
Priorité : high

## But
Reprendre, sauvegarder, options, quitter.

## États
- pause
- confirm_quit

## Animation recommandée
background blur + fade

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
