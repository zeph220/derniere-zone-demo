# Guide import — Pack 02 Rue

## Unity
- Importer OBJ/MTL.
- Créer prefabs modulaires.
- Snap grid 1m.
- Ajouter MeshCollider seulement pour tests, puis remplacer par BoxCollider.
- Créer materials partagés : wet_asphalt, sidewalk, storefront_wall, broken_glass, painted_metal.
- Créer prefabs : StreetTile, SidewalkTile, Storefront, Barrier, Vehicle.

## Godot 4
- Importer OBJ.
- Convertir en scènes.
- Ajouter StaticBody3D + CollisionShape3D.
- Utiliser GridMap ou scènes modulaires.
- Ajouter Area3D pour portes interactives.

## Unreal
- Convertir vers FBX si possible.
- Utiliser Nanite seulement pour props lourds si pertinent.
- Material Instances par texture.
- Blueprint pour portes, lampadaires, loot containers.
- Simple collision pour tous les props.
