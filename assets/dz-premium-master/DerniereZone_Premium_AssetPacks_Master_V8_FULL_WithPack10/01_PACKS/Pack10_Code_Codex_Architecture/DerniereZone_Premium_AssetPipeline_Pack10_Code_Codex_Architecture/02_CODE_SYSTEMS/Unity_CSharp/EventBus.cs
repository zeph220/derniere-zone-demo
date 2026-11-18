using System;
using UnityEngine;

namespace DerniereZone.Core
{
    public static class EventBus
    {
        public static event Action<string> OnQuestUpdated;
        public static event Action<string, int> OnItemAdded;
        public static event Action<string> OnPlayerDied;
        public static event Action<string> OnAudioEvent;

        public static void QuestUpdated(string questId) => OnQuestUpdated?.Invoke(questId);
        public static void ItemAdded(string itemId, int amount) => OnItemAdded?.Invoke(itemId, amount);
        public static void PlayerDied(string cause) => OnPlayerDied?.Invoke(cause);
        public static void AudioEvent(string eventId) => OnAudioEvent?.Invoke(eventId);
    }
}
