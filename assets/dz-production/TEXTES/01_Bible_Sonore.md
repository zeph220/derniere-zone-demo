# 01 — Bible sonore complète

## Philosophie sonore
Le son doit aider le joueur à survivre. Il ne sert pas seulement à faire joli. Il indique la météo, la matière du sol, le danger, l’état du joueur, l’activité des ennemis, la sécurité de l’abri et les zones importantes.

## Bus audio recommandés
- `Music` : musiques longues et drones.
- `Ambience` : pluie, vent, néons, métro, ventilation.
- `SFX_Player` : pas, respiration, douleur, inventaire.
- `SFX_World` : portes, grilles, objets, générateurs.
- `SFX_Enemies` : grognements, pas, cris, respiration.
- `SFX_UI` : menu, objectif, carte.
- `Radio_Voices` : messages radio et voix filtrées.

## Volumes de base
- Musique : -18 dB à -12 dB.
- Ambiance : -16 dB à -10 dB.
- Pas du joueur : -12 dB à -6 dB.
- Ennemis : -8 dB à -3 dB.
- UI : -18 dB à -12 dB.
- Radio : -12 dB à -6 dB.

## États dynamiques de tension
Chaque zone doit pouvoir passer entre 5 états :

### Exploration calme
Musique basse, ambiance forte. Le joueur entend surtout le monde.

### Suspicion
La musique baisse un peu. Les sons d’ennemis et de détails environnementaux montent légèrement.

### Danger proche
Un stinger court peut jouer. Les basses augmentent. L’ambiance devient plus étroite.

### Poursuite
Le rythme monte, mais il ne doit pas couvrir les pas, portes et cris ennemis.

### Retour au calme
Fondu lent vers l’ambiance normale, jamais coupure brutale.

## Rue extérieure
### Couleur sonore
Pluie fine, vent, gouttes sur métal, bâches qui claquent, enseignes électriques faibles, sirènes très lointaines.

### Sons clés
- Flaques sous les pas.
- Voitures qui grincent au vent.
- Lampadaires qui bourdonnent.
- Feuilles et sacs plastiques au sol.
- Alarme rare de voiture.
- Cris lointains très rares.

### Musique
Drone grave discret, notes rares, pas de mélodie claire. La rue doit sembler vide mais pas morte.

## Abri
### Couleur sonore
Bois, tissu, radio, lampe, souffle de vent filtré par les fenêtres barricadées.

### Sons clés
- Radio qui grésille.
- Caisse qu’on ouvre.
- Outils posés sur l’établi.
- Lit qui craque.
- Pluie étouffée dehors.
- Lampe à huile ou ampoule faible.

### Musique
Plus chaude, lente, presque rassurante, mais avec une mélancolie constante. L’abri est sûr, pas heureux.

## Supérette
### Couleur sonore
Néons, frigos morts, verre au sol, silence commercial étrange.

### Sons clés
- Roulettes de caddie qui bougent légèrement.
- Boîtes qui tombent si le joueur fouille vite.
- Porte automatique cassée.
- Pluie contre la vitrine.

## Pharmacie
### Couleur sonore
Plus clinique et fragile. Beaucoup de verre, flacons, tiroirs, emballages.

### Sons clés
- Tiroirs métalliques.
- Piluliers.
- Verre qui roule.
- Néon vert qui vibre.

## Garage
### Couleur sonore
Métal, outils, chaînes, pneus, huile, échos courts.

### Sons clés
- Clés qui s’entrechoquent.
- Cric hydraulique.
- Porte de garage lourde.
- Bidons vides.

## Hôpital
### Couleur sonore
Froid, échos longs, ventilation irrégulière, néons, gouttes, chariots médicaux.

### Sons clés
- Lit médical qui grince.
- Rideau qu’on touche.
- Moniteur qui bippe encore.
- Haut-parleur qui répète un message incomplet.
- Chariots au loin.

## Métro
### Couleur sonore
Basses continues, grondement souterrain, gouttes, rails, échos très longs.

### Sons clés
- Rail qui vibre.
- Train abandonné qui craque.
- Eau stagnante.
- Bruits très lointains impossibles à placer.
- Pas métalliques très lisibles.

## Laboratoire
### Couleur sonore
Électricité, portes magnétiques, ventilation, serveurs, alarmes faibles.

### Sons clés
- Néons blancs.
- Bips de terminaux.
- Sas de décontamination.
- Verrou magnétique.
- Interférences radio.

## Zone militaire
### Couleur sonore
Métal sec, vent, bâches, tours de garde, haut-parleurs, générateurs, clôtures.

### Sons clés
- Haut-parleur lointain.
- Grille qui vibre.
- Générateur diesel.
- Drapeau ou toile qui claque.
- Bottes sur métal.

## SFX obligatoires pour le prototype
- Pas béton, humide, métal, bois.
- Ramassage ressource.
- Ramassage objet important.
- Ouverture inventaire.
- Objectif mis à jour.
- Porte légère.
- Porte lourde.
- Porte verrouillée.
- Radio allumée.
- Radio statique.
- Ennemi normal grogne.
- Ennemi rapide crie.
- Ennemi aveugle écoute.
- Ennemi lourd respire.
- Coup reçu.
- Soigner avec bandage.
- Manger.
- Boire.
- Faim critique.
- Soif critique.
- Vie basse.

## Règle de mix
Si un ennemi est proche, il gagne contre la musique. Le joueur doit toujours entendre le danger.
