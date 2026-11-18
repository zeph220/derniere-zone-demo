extends Node3D
class_name InteractionSystem

@export var camera: Camera3D
@export var interact_distance := 3.0
@export var collision_mask := 1

var current_target: Node = null

func _process(_delta: float) -> void:
    scan()
    if Input.is_action_just_pressed("interact") and current_target:
        if current_target.has_method("interact"):
            current_target.interact()

func scan() -> void:
    current_target = null
    if camera == null:
        return

    var from := camera.global_position
    var to := from + -camera.global_transform.basis.z * interact_distance
    var query := PhysicsRayQueryParameters3D.create(from, to)
    query.collision_mask = collision_mask
    var result := get_world_3d().direct_space_state.intersect_ray(query)
    if result and result.collider:
        current_target = result.collider
