using System;
using System.Collections.Generic;
using UnityEngine;

namespace DerniereZone.Data
{
    public class DataRegistry : MonoBehaviour
    {
        public static DataRegistry Instance { get; private set; }

        private readonly Dictionary<string, object> items = new();
        private readonly Dictionary<string, object> quests = new();
        private readonly Dictionary<string, object> enemies = new();

        private void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(gameObject);
                return;
            }
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }

        public void LoadAllData()
        {
            Debug.Log("[DataRegistry] LoadAllData placeholder.");
            // TODO: Load JSON files from StreamingAssets or Resources.
        }

        public bool TryGetItem(string itemId, out object itemData)
        {
            return items.TryGetValue(itemId, out itemData);
        }
    }
}
