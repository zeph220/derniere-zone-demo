# Brief item — Trousse médicale

ID : `medkit`
Catégorie : medical
Rareté : rare
Poids : 0.8
Stack : 1

## Utilisation
Soin important, stoppe saignement et réduit infection légère.

## Effet gameplay
```json
{
  "health": 45,
  "bleeding": "stop",
  "infection": -10
}
```

## Où le trouver
hôpital, zone militaire

## Modèle / icône
- Modèle : `medkit.obj`
- Icône : `medkit.png`
- Animation : `fp_use_medkit`
- Son : `medkit_open`

## Critères premium
- Silhouette lisible au sol.
- Icône claire.
- Matériau cohérent.
- Pivot logique.
- Collision simple.
- LOD si prop visible souvent.
- Version inventaire et version monde si nécessaire.
- Données JSON reliées à l'inventaire.
