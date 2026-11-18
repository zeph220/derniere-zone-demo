# Inventory System — Spécification complète

## Objectif
Inventaire lisible, compatible craft, quêtes, troc, sauvegarde et poids.

## Données item
`id`, `name`, `category`, `rarity`, `weight`, `stack`, `use`, `effect`, `found`, `quest_use`, `model`, `icon`.

## Catégories
Survie, médical, craft, outils, quête, documents, équipement.

## Poids et capacité
Sac départ 24 unités. Sac I 32. Sac II 42. Dépasser la limite empêche de sprinter. Les objets de quête importants pèsent peu ou zéro.

## Actions
Utiliser, examiner, jeter, transférer coffre, assigner raccourci, lire, combiner, trier.

## UI
Grille centrale, catégories à gauche, détails à droite, poids en bas, raccourcis rapides.

## Sauvegarde
Items, quantités, durabilité, raccourcis, coffre, conteneurs vidés, objets de quête.

## Tests
Ramassage, stack, inventaire plein, usage dernier objet, objet de quête impossible à jeter, coffre, sauvegarde/chargement.
