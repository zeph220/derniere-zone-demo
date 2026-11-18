# 08 — Animations nécessaires

## Philosophie
Les animations doivent être utiles au gameplay. Pas besoin d’animations longues pour tout. Mais les actions importantes doivent avoir du poids : se soigner, manger, boire, ouvrir une porte, fouiller, attaquer, se cacher.

## Joueur première personne

### Idle respiration
Mains basses, léger mouvement respiratoire.
Durée : boucle 2–4 secondes.

### Marche
Caméra légère, mains stables.
Pas trop de bobbing.

### Sprint
Mains plus hautes, respiration plus forte, caméra plus nerveuse.

### Accroupissement
Transition rapide mais visible.
Mains plus proches du corps.

### Ramasser objet
Main droite descend hors caméra, petit mouvement de retour, son de tissu/métal/verre selon objet.
Durée : 0.5 sec.

### Boire
Bouteille monte devant caméra, bouchon rapide, gorgées, baisse bouteille.
Durée : 2 sec.
Gameplay : soif remonte après 60% de l’animation.

### Manger
Main monte une conserve/barre. Petite bouchée. Son papier/métal.
Durée : 2.5 sec.
Gameplay : faim remonte après 70%.

### Bandage
Le joueur regarde son avant-bras. L’autre main enroule le tissu, serre, respire.
Durée : 4 sec.
Interruption : si ennemi attaque, soin annulé ou partiel.
Gameplay : saignement arrêté à 80% de l’animation.

### Kit médical
Ouvrir kit, injecter/appliquer, refermer.
Durée : 5 sec.
Très vulnérable pendant l’action.

### Ouvrir porte
Main sur poignée ou pousser. Variation porte légère/lourde.
Durée : 0.8–2 sec.

### Forcer porte au pied-de-biche
Placer outil, appuyer, craquement, porte cède.
Durée : 3 sec.
Bruit élevé.

### Radio
Main tourne bouton, statique, tapote l’appareil.
Durée : 2 sec.

### Lampe torche
Sortir, allumer, flicker possible.
Durée : 0.7 sec.

### Attaque mêlée légère
Coup court.
Durée : 0.6 sec.

### Attaque lourde
Préparation plus longue, gros impact.
Durée : 1.2 sec.

### Dégâts reçus
Caméra secouée, mains se crispent.
Durée : 0.4 sec.

### Mort / inconscience
Mains tombent, caméra bascule, son étouffé.
Durée : 3 sec.

## Ennemis

### Ennemi normal
- idle instable ;
- marche ;
- alerte ;
- poursuite ;
- attaque ;
- hit react ;
- mort.

### Ennemi rapide
- idle nerveux ;
- sprint ;
- bond ;
- attaque rapide ;
- arrêt brutal ;
- mort.

### Ennemi aveugle
- écoute ;
- tête vers bruit ;
- marche bras tendus ;
- cri de localisation ;
- attaque saisie ;
- perte cible.

### Ennemi lourd
- idle lourd ;
- marche ;
- frappe large ;
- charge courte ;
- enfoncer porte ;
- stagger ;
- mort lourde.

### Sujet laboratoire
- twitch idle ;
- ramper ;
- se redresser ;
- fuir ;
- attaque désordonnée ;
- réaction à lumière ;
- effondrement.

## Props

### Portes
- porte légère ouvrir/fermer ;
- porte lourde ;
- porte verrouillée qui bouge ;
- grille métallique.

### Coffre
- couvercle ouvre ;
- fermeture lourde.

### Établi
- petit loop d’outils pendant craft.

### Radio
- bouton tourner ;
- antenne dépliée ;
- vibration légère.

### Générateur
- démarrage raté ;
- démarrage réussi ;
- boucle vibration.

## Priorité prototype
1. Ramasser.
2. Boire.
3. Manger.
4. Bandage.
5. Ouvrir porte.
6. Attaque mêlée.
7. Ennemi normal walk/attack/death.
8. Crouch/sprint.
