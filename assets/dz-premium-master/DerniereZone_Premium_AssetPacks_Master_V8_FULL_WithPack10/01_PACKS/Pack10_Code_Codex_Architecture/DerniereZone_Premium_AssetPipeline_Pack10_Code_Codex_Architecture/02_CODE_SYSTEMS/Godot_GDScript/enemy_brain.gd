extends CharacterBody3D
class_name EnemyBrain

enum EnemyState {
    IDLE,
    PATROL,
    SUSPICIOUS,
    INVESTIGATE,
    ALERT,
    CHASE,
    ATTACK,
    SEARCH,
    RETURN,
    STAGGER,
    DEAD
}

@export var current_state: EnemyState = EnemyState.IDLE
@export var player: Node3D

func _physics_process(delta: float) -> void:
    tick_state(delta)

func tick_state(delta: float) -> void:
    match current_state:
        EnemyState.IDLE:
            pass
        EnemyState.CHASE:
            # TODO: move toward player or last seen position
            pass
        EnemyState.ATTACK:
            # TODO: play attack animation
            pass

func set_state(next_state: EnemyState) -> void:
    if current_state == next_state:
        return
    current_state = next_state
    print("[EnemyBrain] State changed to ", next_state)
