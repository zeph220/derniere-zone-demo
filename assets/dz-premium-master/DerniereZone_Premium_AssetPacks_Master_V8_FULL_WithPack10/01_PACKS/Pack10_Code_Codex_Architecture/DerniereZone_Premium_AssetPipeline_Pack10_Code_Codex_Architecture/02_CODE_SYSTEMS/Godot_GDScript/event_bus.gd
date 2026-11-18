extends Node
class_name EventBus

signal quest_updated(quest_id: String)
signal item_added(item_id: String, amount: int)
signal player_died(cause: String)
signal audio_event(event_id: String)

func emit_quest_updated(quest_id: String) -> void:
    quest_updated.emit(quest_id)

func emit_item_added(item_id: String, amount: int) -> void:
    item_added.emit(item_id, amount)

func emit_player_died(cause: String) -> void:
    player_died.emit(cause)

func emit_audio_event(event_id: String) -> void:
    audio_event.emit(event_id)
