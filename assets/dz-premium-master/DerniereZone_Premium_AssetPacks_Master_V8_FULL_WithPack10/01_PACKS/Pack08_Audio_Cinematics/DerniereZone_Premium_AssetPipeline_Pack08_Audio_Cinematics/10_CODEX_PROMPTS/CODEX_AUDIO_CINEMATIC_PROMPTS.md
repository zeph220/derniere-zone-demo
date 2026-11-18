# Prompts Codex — Pack08

## AudioManager
Lis `audio_states.json` et `audio_events.json`. Crée un AudioManager avec états exploration, suspicion, chase, safe_shelter, story_reveal et death. Ajoute fade in/out, stingers et dialogue ducking.

## CinematicManager
Lis les timelines JSON. Crée un système qui joue une timeline de beats avec events, sous-titres, contrôle caméra et retour gameplay.

## Death Screen Animation
Utilise les frames de `death_screen_frames` comme référence et crée une animation UI : vignette rouge, texte, options de reprise.

## Save Screen
Crée un indicateur de sauvegarde animé qui attend la confirmation du SaveManager avant d'afficher “Progression sauvegardée”.
