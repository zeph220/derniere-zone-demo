# Architecture générale du jeu

## Philosophie

Le jeu doit être **data-driven** :
- les objets viennent de `items.json` ;
- les quêtes viennent de `quests.json` ;
- les ennemis viennent de `enemies.json` ;
- les recettes viennent de `crafting_recipes.json` ;
- les zones viennent de `zones.json` ;
- l'UI lit les mêmes IDs que le gameplay.

Codex doit coder des systèmes connectés, pas des scripts isolés.

## Systèmes principaux

### Core
- GameManager
- SceneLoader
- SaveManager
- DataRegistry
- EventBus

### Player
- PlayerController
- PlayerCamera
- PlayerInteraction
- PlayerSurvivalStats
- PlayerInventory
- PlayerAnimationController

### Gameplay
- InteractionSystem
- InventorySystem
- CraftSystem
- QuestManager
- DialogueManager
- FactionManager
- ShelterManager
- TimeWeatherManager

### Enemies
- EnemyBrain
- EnemyPerception
- EnemyStateMachine
- EnemyMovement
- EnemyCombat
- EnemyAudio
- EnemySpawner

### UI
- UIManager
- HUDController
- InventoryUI
- QuestJournalUI
- DialogueUI
- MapUI
- SaveLoadUI
- DeathScreenUI
- OptionsUI

### Audio
- AudioManager
- MusicStateController
- AmbienceZone
- StingerPlayer
- AudioBusSettings

## Règle centrale

Les systèmes ne doivent pas se parler n'importe comment.

Utiliser :
- événements ;
- interfaces ;
- data IDs ;
- managers spécialisés ;
- sauvegarde centralisée.

Exemple :
`InteractionSystem` ne modifie pas directement l'UI. Il envoie un event :
`OnInteractionTargetChanged(interactable_id, prompt)`

Puis `UIManager` affiche le prompt.
