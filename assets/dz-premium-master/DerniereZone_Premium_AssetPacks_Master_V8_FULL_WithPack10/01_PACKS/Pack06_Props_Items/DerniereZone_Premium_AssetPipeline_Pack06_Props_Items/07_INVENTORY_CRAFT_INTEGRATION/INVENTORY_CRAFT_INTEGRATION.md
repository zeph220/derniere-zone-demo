# Intégration Inventaire / Craft / Props

## Flux item

1. Item existe en JSON.
2. Item existe en modèle 3D monde.
3. Item a une icône.
4. InteractionSystem détecte l'objet.
5. InventorySystem ajoute l'objet.
6. UI affiche popup.
7. SaveSystem sauvegarde état.
8. CraftSystem peut consommer l'objet.
9. AnimationSystem joue animation si utilisé.

## Règles
- Aucun item de quête ne peut être supprimé.
- Les documents ne pèsent rien.
- Les matériaux de craft doivent être empilables.
- Les outils importants ne doivent pas être consommés sauf cas spécial.
- Les items utilisés déclenchent animation + son + effet gameplay.
- L'effet gameplay arrive à un temps précis de l'animation, pas au début.

## Exemple eau
Interaction → ramassage → inventaire +1 → utiliser → fp_drink_water → effet soif à 1.25s → item consommé.

## Exemple bandage
Utiliser → fp_apply_bandage → interruptible → effet à 3.5s → saignement stoppé.

## Exemple leurre sonore
Utiliser/lancer → spawn device → son beeps → NoiseEvent radius 18 → ennemis auditifs enquêtent.
