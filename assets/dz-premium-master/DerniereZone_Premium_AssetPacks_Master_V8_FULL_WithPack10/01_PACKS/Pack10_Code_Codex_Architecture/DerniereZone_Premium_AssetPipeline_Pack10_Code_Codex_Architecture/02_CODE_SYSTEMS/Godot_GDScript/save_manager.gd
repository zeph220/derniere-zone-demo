extends Node
class_name SaveManager

const SAVE_PATH := "user://save_slot_01.json"

func save_game() -> void:
    var data := {"version": "0.1"}
    var file := FileAccess.open(SAVE_PATH, FileAccess.WRITE)
    file.store_string(JSON.stringify(data, "\t"))
    file.close()
    print("[SaveManager] Saved")

func load_game() -> Dictionary:
    if not FileAccess.file_exists(SAVE_PATH):
        push_warning("[SaveManager] No save found")
        return {}
    var file := FileAccess.open(SAVE_PATH, FileAccess.READ)
    var text := file.get_as_text()
    file.close()
    return JSON.parse_string(text)
