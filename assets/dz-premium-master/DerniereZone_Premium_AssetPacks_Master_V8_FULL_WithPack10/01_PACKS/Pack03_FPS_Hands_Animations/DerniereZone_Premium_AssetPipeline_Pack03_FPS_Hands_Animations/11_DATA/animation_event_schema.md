# Animation event schema

Chaque animation peut déclencher des événements.

## Exemple

```json
{
  "animation_id": "fp_drink_water",
  "events": [
    {"time": 0.3, "type": "play_sound", "id": "bottle_raise"},
    {"time": 1.25, "type": "apply_effect", "stat": "thirst", "value": 35},
    {"time": 1.3, "type": "consume_item", "item_id": "water_bottle"},
    {"time": 2.15, "type": "return_idle"}
  ]
}
```

## Types
- play_sound
- apply_effect
- consume_item
- show_ui
- start_camera_anim
- end_camera_anim
- allow_interrupt
- block_interrupt
- spawn_prop
- hide_prop
