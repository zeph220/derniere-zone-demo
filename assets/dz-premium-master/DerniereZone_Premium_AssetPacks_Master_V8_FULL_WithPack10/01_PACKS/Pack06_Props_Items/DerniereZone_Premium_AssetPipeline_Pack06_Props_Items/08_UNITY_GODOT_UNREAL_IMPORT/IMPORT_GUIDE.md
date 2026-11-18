# Guide import — Props / Items

## Unity
- Importer OBJ/MTL.
- Créer prefab item monde.
- Ajouter collider simple.
- Ajouter InteractableItem.
- Assigner item_id du JSON.
- Ajouter icône UI.
- Connecter à InventorySystem.
- Les props héros peuvent avoir LODGroup.

## Godot
- Convertir OBJ en scène.
- StaticBody3D ou RigidBody3D selon besoin.
- Area3D interaction.
- Export item_id.
- Connecter signal `picked_up(item_id)`.

## Unreal
- Static Mesh + collision.
- Blueprint BP_ItemPickup.
- DataTable Items.
- Widget icon.
- Interaction Interface.
