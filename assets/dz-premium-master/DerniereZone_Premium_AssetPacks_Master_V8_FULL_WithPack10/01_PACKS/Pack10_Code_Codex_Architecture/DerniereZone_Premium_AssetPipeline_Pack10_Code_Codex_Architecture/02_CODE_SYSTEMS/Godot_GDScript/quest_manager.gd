extends Node
class_name QuestManager

signal quest_updated(quest_id: String)

var quest_states := {}

func start_quest(quest_id: String) -> void:
    if not quest_states.has(quest_id):
        quest_states[quest_id] = 0
    quest_updated.emit(quest_id)

func advance_quest(quest_id: String) -> void:
    if not quest_states.has(quest_id):
        quest_states[quest_id] = 0
    quest_states[quest_id] += 1
    quest_updated.emit(quest_id)

func get_quest_state(quest_id: String) -> int:
    return quest_states.get(quest_id, -1)
