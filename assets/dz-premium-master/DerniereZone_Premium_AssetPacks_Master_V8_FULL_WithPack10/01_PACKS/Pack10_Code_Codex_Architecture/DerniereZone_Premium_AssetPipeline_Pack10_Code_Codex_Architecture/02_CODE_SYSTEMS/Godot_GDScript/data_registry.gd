extends Node
class_name DataRegistry

var items := {}
var quests := {}
var enemies := {}

func load_all_data() -> void:
    print("[DataRegistry] load_all_data placeholder")
    # TODO: load JSON from res://dz/data/

func get_item(item_id: String) -> Dictionary:
    return items.get(item_id, {})
