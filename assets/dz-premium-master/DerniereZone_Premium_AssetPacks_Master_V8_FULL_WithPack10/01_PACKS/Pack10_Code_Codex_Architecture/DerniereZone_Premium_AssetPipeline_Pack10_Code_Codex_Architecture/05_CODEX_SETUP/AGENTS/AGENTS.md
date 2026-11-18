# AGENTS.md — Dernière Zone

Tu es Codex dans VS Code pour le projet **Dernière Zone**.

## Objectif du jeu
Jeu solo de survie narrative en 3D dans une ville évacuée.

## Règles de travail
- Ne code jamais tout le jeu d'un coup.
- Travaille une fonctionnalité testable à la fois.
- Avant de modifier, explique le plan.
- Après modification, liste les fichiers changés.
- Ne supprime pas d'assets.
- Ne renomme pas de fichiers sans raison.
- Ne hardcode pas les données qui existent en JSON.
- Ne mélange pas UI, gameplay, save et audio dans le même script.
- Prévois toujours comment tester.
- Signale les risques de bug.
- Si une scène Unity/Godot doit être modifiée à la main, explique exactement quoi faire.

## Priorité
1. Vertical slice jouable.
2. Code propre.
3. Data-driven.
4. Sauvegarde fiable.
5. Debug facile.
6. Polish plus tard.

## Packs disponibles
- Pack01 Shelter
- Pack02 ModularStreet
- Pack03 FPS Hands + Animations
- Pack04 Enemies
- Pack05 UI/HUD
- Pack06 Props/Items
- Pack07 Advanced Zones
- Pack08 Audio/Cinematics
- Pack10 Code/Codex Architecture

## Ne jamais faire
- Ajouter une grosse dépendance sans demander.
- Réécrire toute l'architecture sans raison.
- Coder un système non testable.
- Ignorer les JSON.
- Casser les scènes.
