# 02 — Règles de survie détaillées

## Statistiques principales

### Vie
Valeur : 0 à 100.
À 0, le joueur meurt ou tombe inconscient selon la difficulté.
La vie descend avec attaques, chute, saignement, infection avancée, faim/soif à 0.

### Faim
Valeur : 0 à 100.
Baisse normale : 1 point toutes les 90 secondes en mode normal.
Effets :
- 50–100 : normal.
- 25–49 : régénération endurance -10%.
- 10–24 : endurance max -20%.
- 1–9 : vision légèrement instable, stamina max -35%.
- 0 : perte de vie lente, 1 PV toutes les 15 secondes.

### Soif
Valeur : 0 à 100.
Baisse normale : 1 point toutes les 60 secondes.
Effets :
- 50–100 : normal.
- 25–49 : stamina regen -15%.
- 10–24 : stamina regen -35%.
- 1–9 : tremblement léger de caméra, interaction plus lente.
- 0 : perte de vie, 1 PV toutes les 10 secondes.

### Endurance
Valeur : 0 à 100.
Consommée par sprint, attaque, pousser un objet, retenir une porte.
Remonte si le joueur marche ou reste immobile.
Si faim/soif basse, la valeur max baisse.

### Fatigue
Valeur : 0 à 100, où 100 = épuisé.
Monte avec le temps, les combats, les expéditions longues, la nuit.
Diminue en dormant à l’abri ou dans un refuge.
Effets :
- 0–40 : normal.
- 41–70 : stamina max -10%.
- 71–90 : stamina max -25%, vision plus sombre.
- 91–100 : risque de malaise, interactions plus lentes.

### Infection
Valeur cachée ou visible selon difficulté.
Peut commencer après morsure, blessure sale, zone contaminée.
États :
- Suspecte : aucun effet fort, notification légère.
- Déclarée : faim/soif descendent plus vite.
- Grave : perte de vie lente, fatigue augmente.
- Critique : nécessite antibiotique ou soin spécial.

## Blessures

### Saignement
Cause : attaque, verre, piège, chute.
Effet : vie descend lentement.
Soin : bandage.
Animation : regarder le bras, enrouler bande, serrer avec dents/main.

### Entorse / jambe blessée
Cause : chute, attaque lourde.
Effet : sprint limité, bruit augmenté.
Soin : attelle + repos.
Animation : main sur genou, respiration lourde.

### Brûlure
Cause : feu, électricité, produit chimique.
Effet : dégâts initiaux + douleur.
Soin : pommade ou kit médical.

### Contamination
Cause : laboratoire, hôpital, zone toxique.
Effet : infection possible, vision trouble.
Soin : masque à gaz, filtre, antidote rare.

## Dormir
Dormir dans l’abri :
- retire fatigue ;
- sauvegarde ;
- consomme faim/soif selon durée ;
- peut déclencher événements de nuit.

Dormir dans un refuge secondaire :
- moins efficace ;
- risque d’interruption si zone non sécurisée.

## Mort
Options de design :
1. Retour au dernier sommeil/sauvegarde.
2. Perte partielle de ressources.
3. Mode hardcore optionnel.

Recommandation :
Normal = recharge dernière sauvegarde.
Survie extrême = sauvegardes limitées et mort plus punitive.

## Rareté des ressources

### Début de jeu
Eau et nourriture rares mais trouvables.
Soins très limités.
Munitions quasi inexistantes.
Matériaux fréquents mais encombrants.

### Milieu de jeu
Plus de types de soins.
Craft plus important.
Ressources dangereuses à atteindre.

### Fin de jeu
Le joueur a un meilleur abri mais les zones deviennent plus dures.
Les besoins de survie ne disparaissent jamais totalement.

## Équilibrage conseillé
Une expédition courte doit coûter :
- 10 à 20 faim ;
- 15 à 25 soif ;
- 20 à 60 endurance selon danger ;
- risque de 0 à 1 blessure.

Une expédition longue doit demander préparation :
- eau ;
- nourriture ;
- soin ;
- lampe ;
- arme ou outil ;
- espace dans le sac.

## Difficultés

### Facile
Faim/soif x0.6.
Plus de loot.
Ennemis moins agressifs.
Sauvegarde fréquente.

### Normal
Valeurs standard.

### Difficile
Faim/soif x1.25.
Loot -25%.
Ennemis plus attentifs.
Blessures plus graves.

### Survie extrême
Faim/soif x1.5.
Loot -40%.
Sauvegarde uniquement aux lits/refuges.
Mort très punitive.
