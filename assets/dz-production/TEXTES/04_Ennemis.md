# 04 — Ennemis : design, gameplay, animations et modèles

## Règle générale
Chaque ennemi doit être reconnaissable en moins de 2 secondes par :
- silhouette ;
- posture ;
- son ;
- vitesse ;
- réaction à la lumière/bruit ;
- type de danger.

## Ennemi normal

### Rôle
Menace de base. Dangereux en groupe, évitable seul.

### Silhouette
Humain standard, vêtements urbains déchirés, posture courbée, bras légèrement ouverts.

### Peau / blessures
Peau pâle, traces d’infection, écorchures, vêtements sales.

### Comportement
- Patrouille lentement.
- Entend les bruits moyens.
- Voit à courte/moyenne distance.
- Poursuit si le joueur reste visible.
- Peut abandonner après perte de vue.

### Attaque
Griffe ou saisie courte.
Dégâts moyens.
Risque de saignement faible.

### Animations nécessaires
- idle instable ;
- marche lente ;
- réaction au bruit ;
- détection visuelle ;
- poursuite courte ;
- attaque bras ;
- coup reçu ;
- chute/mort.

### Modèle 3D
Blockout inclus : `enemy_normal`.
À améliorer : vêtements en couches, visage plus asymétrique, mains sales.

## Ennemi rapide

### Rôle
Forcer la panique, punir le joueur qui traîne dans une zone ouverte.

### Silhouette
Plus mince, penché vers l’avant, jambes nerveuses, vêtements légers.

### Peau / blessures
Veines visibles, plaies superficielles, respiration rapide.

### Comportement
- Détecte vite.
- Sprint en ligne courte.
- Perd facilement le joueur dans un obstacle.
- Très sensible aux portes, pièges et virages.

### Attaque
Bond ou coup rapide.
Dégâts faibles/moyens mais fréquence élevée.
Peut interrompre une action.

### Animations nécessaires
- idle nerveux ;
- sprint ;
- bond ;
- glissade/arrêt brutal ;
- attaque sautée ;
- collision contre obstacle ;
- mort rapide.

### Modèle 3D
Blockout inclus : `enemy_fast`.
À améliorer : silhouette très fine, vêtements qui flottent.

## Ennemi aveugle

### Rôle
Créer du gameplay de discrétion par le son.

### Silhouette
Yeux bandés ou abîmés, tête tournée vers les sons, mains en avant, démarche prudente.

### Peau / blessures
Cicatrices autour des yeux, oreilles visibles, peau pâle.

### Comportement
- Ne voit presque pas.
- Entend très bien.
- Réagit aux objets lancés.
- S’arrête pour écouter.
- Peut localiser le joueur s’il court, ouvre une porte ou marche dans l’eau.

### Attaque
Saisie violente si proche.
Dégâts moyens.
Très dangereux dans les couloirs.

### Animations nécessaires
- idle écoute ;
- marche lente bras en avant ;
- réaction bruit gauche/droite ;
- cri d’écholocalisation ;
- attaque saisie ;
- perte de cible ;
- mort.

### Modèle 3D
Blockout inclus : `enemy_blind`.
À améliorer : bandage, oreilles, mains détaillées.

## Ennemi lourd

### Rôle
Contrôler l’espace et bloquer certains passages.

### Silhouette
Très large, massif, vêtements épais, épaules hautes.

### Peau / blessures
Peau épaisse, cicatrices, morceaux de tissu/armure improvisée.

### Comportement
- Lent.
- Très résistant.
- Peut défoncer une porte légère.
- Attiré par les bruits forts.
- Difficile à tuer, mieux vaut l’éviter.

### Attaque
Frappe large, projection, saisie.
Dégâts élevés.
Peut causer fracture/entorse.

### Animations nécessaires
- idle lourd ;
- marche lente ;
- frappe large ;
- charge courte ;
- enfoncer porte ;
- stagger ;
- mort lourde.

### Modèle 3D
Blockout inclus : `enemy_heavy`.
À améliorer : volume, vêtements épais, bras énormes.

## Sujet de laboratoire

### Rôle
Ennemi narratif rare, lié au mystère.

### Silhouette
Humain déformé ou affaibli, posture instable, vêtements médicaux, attaches, cicatrices.

### Peau / blessures
Peau livide, points d’injection, bracelets, marques de contention.

### Comportement
- Imprévisible.
- Peut rester immobile très longtemps.
- Réagit à la lumière, radio ou machines.
- Peut fuir au lieu d’attaquer.
- Utilisé pour scènes de peur et révélations.

### Attaque
Irrégulière, pas toujours mortelle.
Peut infecter ou provoquer panique.

### Animations nécessaires
- idle tremblant ;
- twitch ;
- ramper ;
- se redresser ;
- fuite ;
- attaque désordonnée ;
- réaction lumière ;
- mort ou effondrement.

### Modèle 3D
Blockout inclus : `lab_subject`.
À améliorer : silhouette plus médicale, sangles, marqueurs de laboratoire.

## Spawn et rythme
- Ne pas mettre trop d’ennemis dans les premières zones.
- Utiliser le son avant de montrer l’ennemi.
- Les ennemis rares doivent apparaître avec préparation sonore.
- Toujours donner une solution : fuir, se cacher, distraire, combattre ou utiliser un outil.
