using System;
using System.IO;
using UnityEngine;

namespace DerniereZone.Save
{
    public class SaveManager : MonoBehaviour
    {
        public string SavePath => Path.Combine(Application.persistentDataPath, "save_slot_01.json");

        public void SaveGame()
        {
            var json = JsonUtility.ToJson(new SaveRoot { version = "0.1" }, true);
            File.WriteAllText(SavePath, json);
            Debug.Log("[SaveManager] Saved " + SavePath);
        }

        public void LoadGame()
        {
            if (!File.Exists(SavePath))
            {
                Debug.LogWarning("[SaveManager] No save found.");
                return;
            }

            var json = File.ReadAllText(SavePath);
            var save = JsonUtility.FromJson<SaveRoot>(json);
            Debug.Log("[SaveManager] Loaded version " + save.version);
        }

        [Serializable]
        public class SaveRoot
        {
            public string version;
        }
    }
}
