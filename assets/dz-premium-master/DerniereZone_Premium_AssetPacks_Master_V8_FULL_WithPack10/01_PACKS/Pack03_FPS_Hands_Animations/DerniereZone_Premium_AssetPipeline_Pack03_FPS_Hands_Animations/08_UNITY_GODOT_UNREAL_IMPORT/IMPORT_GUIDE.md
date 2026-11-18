# Guide import — FPS Hands + Animations

## Unity

1. Importer les modèles OBJ comme base.
2. Pour version finale, utiliser FBX riggé.
3. Créer un `FPSHandsRig`.
4. Créer un `FPSInteractionAnimator`.
5. Brancher Animation Events :
   - apply_item_effect ;
   - play_sound ;
   - spawn_ui_popup ;
   - consume_inventory_item ;
   - interrupt_check.
6. Les animations longues doivent être interruptibles.

## Godot 4

1. Importer modèles.
2. Créer scène `FPSHands.tscn`.
3. Ajouter AnimationPlayer.
4. Ajouter sockets/markers :
   - RightHandSocket ;
   - LeftHandSocket ;
   - HeldItemSocket ;
   - CameraAnchor.
5. Utiliser signaux aux frames clés.

## Unreal

1. Convertir vers FBX avec rig.
2. Créer Skeleton/AnimBlueprint.
3. Monter sur caméra FPS.
4. Utiliser AnimNotifies :
   - ApplyConsumable ;
   - PlaySFX ;
   - InventoryConsume ;
   - ShowUI.
5. Prévoir BlendSpace idle + interaction montage.

## Règle gameplay

L'effet d'un objet ne doit pas être appliqué au début de l'animation.
Exemple :
- boire : effet à 1.25s ;
- manger : effet à 1.0s ;
- bandage : effet à 3.5s.
