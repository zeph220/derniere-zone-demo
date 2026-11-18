# Écran — Sauvegarde / chargement

ID : `save_load`
Priorité : critical

## But
Slots, chapitre, lieu, temps de jeu, avertissement.

## États
- manual_save
- autosave
- overwrite_confirm
- load_confirm

## Animation recommandée
cassette/card pulse

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
