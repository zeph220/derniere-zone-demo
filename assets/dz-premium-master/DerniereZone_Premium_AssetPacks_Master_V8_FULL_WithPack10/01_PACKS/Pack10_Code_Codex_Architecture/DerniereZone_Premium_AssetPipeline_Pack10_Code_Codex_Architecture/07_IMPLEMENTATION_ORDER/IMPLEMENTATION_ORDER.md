## 1. Project foundation

Systèmes : GameManager, DataRegistry, EventBus

Test : Project launches and logs data load.

## 2. Player + camera

Systèmes : PlayerController, PlayerCamera

Test : Player can move in test room.

## 3. Interaction

Systèmes : InteractionSystem, IInteractable

Test : Looking at test object shows prompt and E triggers action.

## 4. Inventory

Systèmes : InventorySystem, ItemPickup

Test : Pick up water_bottle and see it in inventory.

## 5. Survival stats

Systèmes : PlayerSurvivalStats

Test : Hunger/thirst decrease, water restores thirst.

## 6. HUD

Systèmes : HUDController, NotificationStack

Test : Stats and objective visible.

## 7. QuestManager

Systèmes : QuestManager

Test : Q01_Radio advances through objectives.

## 8. SaveManager

Systèmes : SaveManager

Test : Save/load inventory and quest state.

## 9. Enemy normal AI

Systèmes : EnemyBrain, EnemyPerception

Test : Enemy patrols, detects, chases, attacks, loses player.

## 10. AudioManager

Systèmes : AudioManager

Test : Quest update and danger stingers play.

## 11. Vertical slice assembly

Systèmes : SceneLoader, All core systems

Test : Demo playable from wakeup to radio signal.
