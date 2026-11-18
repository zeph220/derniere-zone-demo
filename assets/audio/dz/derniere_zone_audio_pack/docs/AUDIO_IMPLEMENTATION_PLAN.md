# Plan d'intégration audio — Dernière Zone

## Mix général recommandé

- Music : -18 dB à -12 dB
- Ambience : -16 dB à -10 dB
- SFX gameplay : -8 dB à -4 dB
- UI : -12 dB à -8 dB
- Enemies : -6 dB à -3 dB
- Radio : -12 dB à -6 dB

Le jeu doit rester lisible : les ennemis et les signaux de danger passent avant la musique.

---

## Zones et musiques

### Rue extérieure
Musique : `02_rue_exterieure_pluie_brouillard_loop.wav`
Ambiances :
- `ambience_rain_loop.wav`
- `ambience_wind_empty_street_loop.wav`

Utilisation :
La rue doit avoir une ambiance froide, humide et vide. La musique doit rester discrète. La pluie et le vent font la majorité de l'atmosphère.

---

### Abri
Musique : `03_abri_chaleur_faible_radio_loop.wav`
SFX utiles :
- `radio_static_short.wav`
- `button_press_old_radio.wav`
- `ui_inventory_open.wav`

Utilisation :
L'abri doit sonner plus chaud et plus intime. Il ne doit pas être joyeux, mais il doit donner une sensation de sécurité fragile.

---

### Hôpital
Musique : `04_hopital_froid_tension_clinique_loop.wav`
Ambiances :
- `ambience_fluorescent_buzz_loop.wav`
- sons de pas wet/concrete

Utilisation :
L'hôpital doit être froid, clinique, oppressant. Les néons et les silences sont importants. Les sons d'ennemis doivent être très lisibles.

---

### Métro
Musique : `05_metro_rumble_souterrain_loop.wav`
Ambiance :
- `ambience_subway_rumble_loop.wav`

Utilisation :
Le métro doit être lourd, bas, résonnant. Le joueur doit sentir qu'il est sous terre. Les pas métal et béton sont importants.

---

### Laboratoire
Musique : `06_laboratoire_neons_dread_loop.wav`
Ambiances :
- `ambience_fluorescent_buzz_loop.wav`
- radio/static léger si besoin

Utilisation :
Le laboratoire doit être plus propre mais plus inquiétant. Sons froids, électriques, peu humains.

---

### Zone militaire
Musique : `07_zone_militaire_pression_loop.wav`

Utilisation :
La zone militaire doit donner une sensation de contrôle, d'interdiction et de danger organisé. Les sons doivent être plus secs, plus métalliques, plus lourds.

---

## SFX gameplay

### Interaction
- `pickup_resource_soft.wav` : ramassage normal
- `pickup_key_item_bright.wav` : objet important
- `lock_click.wav` : serrure / clé
- `door_creak_heavy.wav` : porte lourde
- `metal_gate_creak.wav` : grille / portail

### Combat / danger
- `melee_swing_light.wav`
- `melee_swing_heavy.wav`
- `melee_metal_impact.wav`
- `danger_stinger_rise.wav`

### Joueur
- `low_health_heartbeat_loop.wav`
- `footstep_concrete_01/02/03.wav`
- `footstep_wet_01/02/03.wav`
- `footstep_metal_01/02/03.wav`
- `footstep_wood_01/02/03.wav`

### Ennemis
- `enemy_normal_groan.wav`
- `enemy_fast_screech.wav`
- `enemy_blind_clicking_breath.wav`
- `enemy_heavy_low_roar.wav`

---

## Logique dynamique conseillée

Le jeu ne doit pas seulement lancer une musique par zone. Il doit changer selon le danger.

États simples :
1. Exploration calme
2. Suspicion
3. Danger proche
4. Poursuite
5. Retour au calme

Exemple :
- Exploration : musique de zone basse
- Suspicion : baisse la musique, monte l'ambiance
- Danger proche : ajoute `danger_stinger_rise.wav`
- Poursuite : augmente volume musique + sons ennemis
- Retour au calme : fondu lent vers ambiance normale

---

## Règle d'or

Le son doit aider le gameplay :
- le joueur doit entendre le danger avant de le voir ;
- les sons importants ne doivent pas être noyés par la musique ;
- chaque zone doit avoir une couleur sonore différente ;
- l'abri doit être identifiable immédiatement.
