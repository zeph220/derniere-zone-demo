# Toutes les quêtes

## La voix dans le silence (Q01_Radio)
- Chapitre : 1
- Type : main
- Début : Inspecter la radio cassée de l’abri
- Étapes :
  1. Inspecter la radio
  2. Trouver une pile
  3. Trouver un câble
  4. Trouver le module radio
  5. Retourner à l’abri
  6. Réparer la radio
  7. Écouter le message d’urgence
- Lieux : shelter, supermarket, garage, district_01
- Objets requis : battery, wire, radio_part
- Récompenses : unlock_hospital_signal, xp_100
- Choix : aucun
- Conséquences : débloque l’hôpital

## Derrière le comptoir (Q02_Pharmacy)
- Chapitre : 1
- Type : main
- Début : Note parlant de l’arrière-boutique
- Étapes :
  1. Atteindre la pharmacie
  2. Trouver la clé
  3. Ouvrir l’arrière-boutique
  4. Récupérer médicaments et document
- Lieux : pharmacy, district_01
- Objets requis : pharmacy_key
- Récompenses : antibiotics, hospital_hint
- Choix : garder_antibiotiques, donner_antibiotiques
- Conséquences : influence Léa et Secouristes

## Ce qui ouvre les portes (Q03_Garage)
- Chapitre : 1
- Type : main
- Début : Besoin d’un outil lourd
- Étapes :
  1. Explorer le garage
  2. Éviter l’ennemi
  3. Trouver le pied-de-biche
  4. Récupérer câbles et fusible
- Lieux : garage
- Objets requis : aucun
- Récompenses : crowbar, wire, fuse
- Choix : aucun
- Conséquences : débloque portes bloquées

## Deux doses seulement (Q04_Antibiotics)
- Chapitre : 2
- Type : dilemma
- Début : Rencontrer un survivant malade
- Étapes :
  1. Apporter antibiotiques
  2. Choisir qui reçoit les doses
  3. Voir conséquence après 1 journée
- Lieux : shelter, pharmacy
- Objets requis : antibiotics
- Récompenses : reputation_change
- Choix : donner_au_survivant, garder_pour_abri
- Conséquences : survivant sauvé ou mort

## Signal d’urgence (Q05_HospitalSignal)
- Chapitre : 2
- Type : main
- Début : Message radio
- Étapes :
  1. Atteindre l’hôpital
  2. Trouver l’accueil
  3. Localiser les Secouristes
  4. Récupérer dossier de triage
- Lieux : hospital
- Objets requis : aucun
- Récompenses : secouristes_contact, hospital_map
- Choix : aucun
- Conséquences : débloque Secouristes

## Remettre la lumière (Q06_Generator)
- Chapitre : 2
- Type : hub
- Début : Abri trop sombre
- Étapes :
  1. Trouver fusible
  2. Trouver carburant
  3. Réparer générateur
  4. Choisir consommation faible ou forte
- Lieux : garage, military_zone, shelter
- Objets requis : fuse, wire, fuel_can
- Récompenses : shelter_power, craft_advanced
- Choix : économie_énergie, confort_abri
- Conséquences : bruit peut attirer danger

## Ils ont suivi le signal (Q07_ShelterAttack)
- Chapitre : 3
- Type : main_event
- Début : Radio utilisée trop longtemps
- Étapes :
  1. Préparer barricades
  2. Placer pièges
  3. Choisir défenseurs
  4. Survivre à l’attaque
  5. Réparer dégâts
- Lieux : shelter
- Objets requis : wood_plank
- Récompenses : trust_survivors, unlock_defense
- Choix : protéger_survivants, protéger_stock
- Conséquences : pertes possibles

## Sous la ville (Q08_MetroAccess)
- Chapitre : 3
- Type : main
- Début : Secouristes parlent d’un accès
- Étapes :
  1. Trouver entrée métro
  2. Rétablir courant
  3. Éviter traqueur aveugle
  4. Débloquer tunnel centre
- Lieux : metro
- Objets requis : fuse, flashlight
- Récompenses : metro_shortcut, hidden_residents_contact
- Choix : aucun
- Conséquences : débloque Habitants Cachés

## À qui faire confiance (Q09_FactionsChoice)
- Chapitre : 4
- Type : main_dilemma
- Début : Les factions demandent de l’aide
- Étapes :
  1. Parler aux Secouristes
  2. Parler aux Pillards
  3. Parler aux Sentinelles
  4. Choisir aide prioritaire
- Lieux : hospital, military_zone, depot_pillards
- Objets requis : aucun
- Récompenses : faction_path
- Choix : soutenir_secouristes, soutenir_pillards, soutenir_sentinelles, rester_neutre
- Conséquences : modifie accès, prix, fins

## La porte Oméga (Q10_LaboratoryAccess)
- Chapitre : 5
- Type : main
- Début : Mention du Projet Hélios
- Étapes :
  1. Trouver carte d’accès
  2. Traverser métro profond
  3. Atteindre sas labo
  4. Ouvrir accès
- Lieux : hospital, metro, laboratory
- Objets requis : lab_keycard
- Récompenses : unlock_laboratory, truth_1
- Choix : faire_confiance_Eva, forcer_entrée
- Conséquences : influence Scientifiques

## Projet Hélios (Q11_Truth)
- Chapitre : 5
- Type : main_reveal
- Début : Entrer salle serveurs
- Étapes :
  1. Lire dossiers
  2. Voir salle de spécimens
  3. Survivre au Sujet Oméga
  4. Télécharger preuves
- Lieux : laboratory
- Objets requis : aucun
- Récompenses : truth_evidence
- Choix : sauver_recherche, détruire_données, copier_et_fuir
- Conséquences : détermine fins

## La dernière transmission (Q12_Final)
- Chapitre : 6
- Type : final
- Début : Factions convergent
- Étapes :
  1. Défendre ou quitter l’abri
  2. Atteindre antenne centrale
  3. Choisir diffusion/quarantaine/destruction/exode
  4. Survivre finale
- Lieux : shelter, military_zone, laboratory, tower
- Objets requis : truth_evidence
- Récompenses : ending
- Choix : fin_revelation, fin_quarantaine, fin_exode, fin_controle_scientifique, fin_fuite_solitaire
- Conséquences : fin du jeu

## Les caches de la pluie (Q13_Side)
- Chapitre : 1
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : military_zone, hospital
- Objets requis : antibiotics
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## La fille du pharmacien (Q14_Side)
- Chapitre : 1
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : supermarket, pharmacy
- Objets requis : fuel_can
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Le vieux tunnel (Q15_Side)
- Chapitre : 1
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : shelter, metro
- Objets requis : fuel_can
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Le marchand sans nom (Q16_Side)
- Chapitre : 1
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : garage, laboratory
- Objets requis : wood_plank
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Le message coupé (Q17_Side)
- Chapitre : 1
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : metro, shelter
- Objets requis : crowbar
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Rations partagées (Q18_Side)
- Chapitre : 2
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : metro, military_zone
- Objets requis : gas_mask
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## La porte qui respire (Q19_Side)
- Chapitre : 2
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : military_zone, hospital
- Objets requis : fuel_can
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Le toit aux corbeaux (Q20_Side)
- Chapitre : 2
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : shelter, hospital
- Objets requis : medkit
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Une lampe dans le noir (Q21_Side)
- Chapitre : 2
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : hospital, garage
- Objets requis : crowbar
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Dette de sang (Q22_Side)
- Chapitre : 3
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : shelter, military_zone
- Objets requis : medkit
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Le carnet du médecin (Q23_Side)
- Chapitre : 3
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : hospital, metro
- Objets requis : cloth
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Dernier bus (Q24_Side)
- Chapitre : 3
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : supermarket, garage
- Objets requis : water_bottle
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## L’atelier fermé (Q25_Side)
- Chapitre : 3
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : shelter, laboratory
- Objets requis : wood_plank
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Haut-parleur nord (Q26_Side)
- Chapitre : 4
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : military_zone, metro
- Objets requis : antibiotics
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## L’enfant disparu (Q27_Side)
- Chapitre : 4
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : shelter, supermarket
- Objets requis : water_bottle
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Les filtres rouges (Q28_Side)
- Chapitre : 4
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : hospital, military_zone
- Objets requis : flashlight
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## Le wagon scellé (Q29_Side)
- Chapitre : 4
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : hospital, garage
- Objets requis : wood_plank
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié

## La photo déchirée (Q30_Side)
- Chapitre : 5
- Type : side
- Début : Découverte via note, radio ou survivant
- Étapes :
  1. Recevoir indice
  2. Explorer zone ciblée
  3. Faire un choix ou récupérer objet
  4. Retourner ou garder récompense
- Lieux : metro, shelter
- Objets requis : scrap_metal
- Récompenses : xp_50, resource_cache, reputation_change
- Choix : aider, garder_ressources, mentir
- Conséquences : réputation modifiée, dialogue futur modifié
