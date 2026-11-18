```pseudo
if can_see_player:
    last_seen = player.position
    suspicion += visibility_score
    if suspicion >= chase_threshold:
        state = CHASE
    else:
        state = SUSPICIOUS

elif heard_noise:
    last_heard = noise.position
    suspicion += noise.intensity
    state = INVESTIGATE

if state == CHASE:
    if can_attack:
        state = ATTACK
    elif lost_player:
        state = SEARCH
    else:
        move_to(player.position)

if state == SEARCH and search_timer_done:
    state = RETURN
```
