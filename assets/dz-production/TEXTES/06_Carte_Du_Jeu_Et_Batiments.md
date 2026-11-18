# 06 — Carte du jeu et des bâtiments

## Carte globale

Légende :
- `A` Abri
- `S` Supérette
- `P` Pharmacie
- `G` Garage
- `H` Hôpital
- `M` Métro
- `L` Laboratoire
- `Z` Zone militaire
- `R` Refuge secondaire
- `X` route bloquée
- `?` zone inconnue au départ

```
                         [Z] Zone militaire
                          |
                   X------|------X
                          |
        [Quartier Nord]---M---[H] Hôpital
              |           |        |
              |         Métro      |
              |           |        |
[R]---[G] Garage---[A] Abri---[S] Supérette
              |           |
              |        [P] Pharmacie
              |
          [Zone industrielle]
              |
              M
              |
          [L] Laboratoire B-07
```

## Progression de déblocage
1. Abri, supérette, pharmacie extérieure.
2. Garage avec outil.
3. Hôpital.
4. Métro.
5. Zone militaire.
6. Laboratoire.
7. Centre final / diffusion.

## Quartier de départ

```
+------------------------------------------------+
| Rue Nord bloquée par bus et débris             |
|      XXXXXXXXXXXXX                             |
|                                                |
|  [Pharmacie]       Rue principale      [Supérette]
|       |                  |                  |
|       |                Voitures             |
|  Ruelle sombre           |              Parking
|       |                  |                  |
|  [Garage] ---- Cour arrière ---- [Abri]     |
|       |                                      |
|   Route vers zone industrielle               |
+------------------------------------------------+
```

### Gameplay du quartier
- Zone d’apprentissage.
- Ennemi normal isolé.
- Supérette = nourriture/eau/pile.
- Pharmacie = soins/quête Clara.
- Garage = outil/câble/pied-de-biche.
- Abri = base, sauvegarde, craft.

## Abri

```
+----------------------------------+
| Fenêtre barricadée |  Lit        |
|                    |             |
| Radio + bureau     |  Coffre     |
|                    |             |
| Établi             |  Stockage   |
|                    |             |
| Porte renforcée / sortie         |
+----------------------------------+
```

### Points interactifs
- Lit : dormir/sauvegarder.
- Radio : quêtes principales.
- Coffre : stockage.
- Établi : craft.
- Porte : défense abri.
- Mur de cartes : objectifs et notes.

## Supérette

```
+-------------------------------------+
| Entrée vitrée cassée                |
|  Caddies        Rayon eau           |
|                                     |
| Caisse ----- Allées centrales       |
|                                     |
| Réserve verrouillée --- Sortie arrière
+-------------------------------------+
```

### Loot
- Eau, conserves, piles, sac possible.
- Réserve : nourriture rare, clé ou document.

### Danger
- Verre au sol = bruit.
- Ennemi normal dans réserve ou caisse.
- Vitrine exposée : visibilité depuis rue.

## Pharmacie

```
+----------------------------------+
| Vitrine / entrée                 |
| Comptoir                         |
| Rayons santé       Bureau        |
|                                  |
| Réserve médicale verrouillée     |
| Petite sortie arrière            |
+----------------------------------+
```

### Loot
- Bandages, antiseptique, médicaments.
- Réserve : antibiotiques, kit médical.
- Document : ordonnance Clara / code.

### Danger
- Lumière froide.
- Ennemi caché derrière comptoir possible.

## Garage

```
+-------------------------------------+
| Grande porte garage                 |
| Voiture levée      Fosse mécanique  |
|                                     |
| Établi outils      Bureau           |
| Réserve pièces verrouillée          |
| Sortie arrière                      |
+-------------------------------------+
```

### Loot
- Câbles, métal, ruban, pied-de-biche, batterie.
- Document : facture avec indice.

### Danger
- Bruit métallique.
- Porte lourde qui attire ennemi.

## Hôpital

```
[Entrée]
   |
[Accueil]---[Pharmacie interne]
   |
[Urgences]---[Couloirs]---[Chambres]
   |              |
[Salle opération] |
   |              |
[Escaliers]----[Sous-sol verrouillé]
```

### Rythme
- Entrée : exploration.
- Urgences : tension et loot.
- Couloirs : orientation difficile.
- Sous-sol : révélation et peur.

## Métro

```
[Entrée station]
      |
[Billetterie]---[Tourniquets]
      |
[Quai 1]---[Train abandonné]---[Tunnel]
      |
[Local technique]---[Raccourci]
      |
[Quai 2 vers Laboratoire]
```

### Rythme
- Faible visibilité.
- Ennemi aveugle.
- Raccourcis utiles mais dangereux.

## Laboratoire

```
[Accès secret]
      |
[Sas décontamination]
      |
[Accueil sécurité]---[Terminaux]
      |
[Recherche]---[Observation]
      |
[Cellules confinement]
      |
[Salle d’expérimentation]
      |
[Serveur / Données finales]
```

### Rythme
- Zone de vérité.
- Peu de ressources.
- Portes électroniques.
- Décisions finales préparées.

## Zone militaire

```
[Checkpoint]
     |
[Cour véhicules]---[Baraquements]
     |
[Salle commandement]---[Armurerie verrouillée]
     |
[Bunker B-02]---[Dépôt ravitaillement]
```

### Rythme
- Interdiction et surveillance.
- Beaucoup de métal, grilles, projecteurs.
- Ressources fortes mais risques élevés.
