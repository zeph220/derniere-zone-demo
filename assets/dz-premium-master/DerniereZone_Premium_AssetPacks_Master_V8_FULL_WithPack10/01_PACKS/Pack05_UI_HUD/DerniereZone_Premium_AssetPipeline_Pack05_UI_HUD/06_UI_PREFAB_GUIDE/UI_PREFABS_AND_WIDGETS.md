# UI Prefabs / Widgets

## Widgets principaux
- WDG_HUDRoot
- WDG_StatBar
- WDG_ObjectiveTracker
- WDG_InteractionPrompt
- WDG_NotificationStack
- WDG_InventoryScreen
- WDG_ItemSlot
- WDG_ItemDetailPanel
- WDG_MapScreen
- WDG_QuestJournal
- WDG_DialogueBox
- WDG_ChoiceButton
- WDG_SaveLoadScreen
- WDG_DeathScreen
- WDG_OptionsScreen
- WDG_CraftScreen
- WDG_ReputationScreen
- WDG_ShelterPanel

## Données liées
- items.json
- quests.json
- factions.json
- save_slots.json
- ui_messages.json
- ui_theme.json
- controls.json

## Communication systèmes
HUD reçoit :
- SurvivalStats
- QuestManager
- InteractionSystem
- InventorySystem
- EnemyAwareness
- SaveManager
- AudioManager

## Important
L'UI doit être data-driven. Les textes ne doivent pas être hardcodés.
