# Derniere Zone - Premium Blender Pass Report

Date: 2026-05-27  
Scope: audit and integration planning for `/public/assets/dz-blender-pack`

## Executive Summary

Blender is not available in the current PATH, so no destructive import/export pass was run. I audited the existing GLB files directly and added a separate JSON manifest for a future premium integration pass:

- `dz_premium_integration_manifest.json`

No protected runtime files were modified.

Important finding: the pack already contains strong static boss, enemy, vehicle, barricade, weapon, and hero prop GLBs, but none of the audited GLBs contain embedded animations or skins. Boss animation must therefore be either procedural in the runtime for now, or produced by a later Blender rigging/export pass.

## GLB Audit

- Total GLB files found: 81
- Files with embedded `animations`: 0
- Files with embedded `skins`: 0
- Boss files found: 7
- Enemy variant files found: 20
- Current `src/assetManifest.js` uses only world props and FPS weapons from this pack.
- Boss and enemy variant files are present but not currently represented in the stable asset manifest.

## Boss Integration Targets

Use the new JSON manifest as the source of truth for boss file names, suggested scale, collision proxy, material work, and audio needs.

Priority order:

1. `dz_boss_street_alpha_stalker.glb` - chapter 1 street boss, fastest integration candidate.
2. `dz_boss_gas_station_igniter.glb` - good candidate for emissive fire/spark material work.
3. `dz_boss_hospital_surgeon.glb` - tall silhouette; needs surgical metal/rubber/stained apron pass.
4. `dz_boss_lab_matriarch.glb` - best match for wet/translucent lab material pass.
5. `dz_boss_military_commander.glb` - checkpoint boss with armor/radio audio identity.
6. `dz_boss_market_bloated_hoarder.glb` - wide body silhouette; use heavier capsule proxy.
7. `dz_boss_final_host_zero.glb` - final boss; use compound collision proxy.

## Animation Reality Check

The boss files are static meshes today. Recommended near-term runtime animation:

- Root group breathing scale: subtle Y/Z pulse.
- Upper-body sway: rotate selected child mesh groups if stable node names exist, otherwise apply whole-model lean.
- Attack tells: timed forward lean, emissive flash, audio cue, then hitbox activation.
- Hit reaction: short backward offset plus material flash.
- Death: sink/fall rotation plus particle/audio event.

Recommended Blender pass when available:

- Add armatures for all 7 boss GLBs.
- Export clips named `idle`, `walk`, `attack_tell`, `attack`, `hit`, `death`.
- Preserve current GLB filenames only if replacing in place is explicitly approved; otherwise export `_rigged.glb` variants.
- Add named empties for hitboxes: `hitbox_body`, `hitbox_attack_left`, `hitbox_attack_right`, `weakpoint_head`, `weakpoint_core`.

## Collision Proxies

Do not use render meshes for runtime collision. Use simple proxies:

- Humanoid enemies: capsule radius 0.35-0.55, height 1.9-2.3.
- Brutes: capsule radius 0.65-0.8, height 2.3.
- Bosses: manifest-specific capsules or compound shapes.
- Vehicles: one oriented box, no per-wheel collision.
- Barricades and shop fronts: box proxies.
- Lab tanks and gas pumps: cylinder or box proxy depending on interaction.

The manifest includes exact first-pass proxy recommendations for every boss and major hero prop.

## Props Readable From Distance

Best high-signal props already available:

- `dz_urban_pharmacy_neon_cross_premium.glb`
- `dz_lab_tank_specimen_premium.glb`
- `dz_military_checkpoint_gate.glb`
- `dz_shop_front_filled_window_A.glb`
- `dz_vehicle_ambulance_rusted_premium.glb`
- `dz_barricade_stacked_cars_premium.glb`
- `dz_urban_bus_stop_broken_premium.glb`
- `dz_shelf_supermarket_loaded_A.glb`
- `dz_shelf_pharmacy_loaded_A.glb`

Recommended treatment:

- Add emissive accents only to props that should guide the player.
- Push grime/rust contrast on large silhouettes.
- Keep small clutter low contrast to avoid noisy distance reads.

## PBR Texture Inventory

Local texture sets found:

- DZ procedural 2048: `asphalte_mouille`, `beton_fissure`, `mur_sale`, `metal_rouille`, `bois_use`, `tissu_use`, `verre_sale`
- Polyhaven placeholders: `asphalt_02`, `concrete_wall_005`, `cracked_concrete`

Local texture gaps:

- `asphalte_mouille` is missing a normal map.
- `bois_use` is missing a normal map.
- `tissu_use` is missing albedo/basecolor maps.

Textures to source or generate next:

- Wet infected skin: basecolor, normal, roughness, AO.
- Dried/fresh blood decals with alpha.
- Charred fabric and burned skin.
- Surgical rubber/latex and brushed surgical metal.
- Lab glass/fluid with roughness, normals, and optional emissive masks.
- Neon cross and warning-light emissive masks.

## Audio Search List

Existing audio covers ambience, footsteps, impacts, doors, cloth, metal clicks, and knife slices. Missing premium identity sounds:

- Boss breath loops per boss family.
- Boss attack tells and short roars.
- Wet body movement and gurgle one-shots.
- Gas hiss, spark, flame burst.
- Neon buzz and flicker.
- Lab tank bubble/low hum.
- Radio static command bark.
- Distant siren memory for ambulance set dressing.

## Precise Runtime Plan

1. Keep `src/assetManifest.js` stable for current props/weapons.
2. Add a future loader for `/assets/dz-blender-pack/dz_premium_integration_manifest.json`.
3. Spawn bosses from `manifest.bosses` by `id`, `file`, `recommendedScale`, and `collisionProxy`.
4. Add procedural boss animation presets matching `proceduralAnimation` tags.
5. Attach SFX by resolving `audioNeeds` tags to real files after the sound sourcing pass.
6. Add PBR override rules only after material names are inspected in Blender or a GLTF material editor.
7. Keep all collision proxies explicit in data; avoid generating physics from visible meshes.

## Files Created

- `/Users/annalogacheva/Documents/Derniere Zone/public/assets/dz-blender-pack/dz_premium_integration_manifest.json`
- `/Users/annalogacheva/Documents/Derniere Zone/public/assets/dz-blender-pack/PREMIUM_BLENDER_PASS_REPORT.md`

## Protected Files

Untouched:

- `/Users/annalogacheva/Documents/Derniere Zone/src/main.js`
- `/Users/annalogacheva/Documents/Derniere Zone/index.html`
- `/Users/annalogacheva/Documents/Derniere Zone/src/style.css`
