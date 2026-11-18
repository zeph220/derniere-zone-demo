using System;
using System.Collections.Generic;
using UnityEngine;
using DerniereZone.Core;

namespace DerniereZone.Inventory
{
    public class InventorySystem : MonoBehaviour
    {
        [Serializable]
        public class ItemStack
        {
            public string itemId;
            public int amount;
        }

        [SerializeField] private float maxWeight = 24f;
        private readonly List<ItemStack> items = new();

        public IReadOnlyList<ItemStack> Items => items;

        public void AddItem(string itemId, int amount)
        {
            var stack = items.Find(x => x.itemId == itemId);
            if (stack == null)
            {
                stack = new ItemStack { itemId = itemId, amount = 0 };
                items.Add(stack);
            }
            stack.amount += amount;
            EventBus.ItemAdded(itemId, amount);
        }

        public bool RemoveItem(string itemId, int amount)
        {
            var stack = items.Find(x => x.itemId == itemId);
            if (stack == null || stack.amount < amount) return false;
            stack.amount -= amount;
            if (stack.amount <= 0) items.Remove(stack);
            return true;
        }
    }
}
