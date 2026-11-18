extends Node
class_name InventorySystem

signal inventory_changed

var items := {}
var max_weight := 24.0

func add_item(item_id: String, amount: int) -> void:
    items[item_id] = items.get(item_id, 0) + amount
    inventory_changed.emit()

func remove_item(item_id: String, amount: int) -> bool:
    if not items.has(item_id):
        return false
    if items[item_id] < amount:
        return false
    items[item_id] -= amount
    if items[item_id] <= 0:
        items.erase(item_id)
    inventory_changed.emit()
    return true
