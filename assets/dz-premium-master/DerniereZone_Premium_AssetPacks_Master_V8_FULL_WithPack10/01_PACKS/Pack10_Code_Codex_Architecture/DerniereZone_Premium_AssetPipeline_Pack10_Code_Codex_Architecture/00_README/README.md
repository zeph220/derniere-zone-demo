# Dernière Zone — Pack10 : Architecture Code / Codex

Ce pack ajoute la structure technique du projet et les règles pour coder le jeu avec Codex dans VS Code.

## Objectif

Éviter que Codex code au hasard.

Ce pack définit :
- architecture du projet ;
- managers ;
- systèmes gameplay ;
- structure Unity ;
- structure Godot ;
- JSON schemas ;
- AGENTS.md ;
- skills Codex ;
- prompts prêts à copier ;
- ordre d'implémentation ;
- debug tools ;
- QA technique ;
- intégration avec les packs 01 à 08.

## À utiliser comment

1. Choisir moteur : Unity ou Godot.
2. Copier `AGENTS.md` à la racine du projet.
3. Copier le dossier `.agents/skills` dans le projet.
4. Donner à Codex les prompts du dossier `06_CODEX_PROMPTS`.
5. Suivre `07_IMPLEMENTATION_ORDER`.
6. Ne pas demander à Codex de faire tout le jeu d'un coup.

## Priorité

Le but n'est pas de tout coder immédiatement. Le but est de créer une base propre qui peut accueillir :
- inventaire ;
- quêtes ;
- IA ennemis ;
- UI ;
- sauvegarde ;
- audio dynamique ;
- vertical slice.
