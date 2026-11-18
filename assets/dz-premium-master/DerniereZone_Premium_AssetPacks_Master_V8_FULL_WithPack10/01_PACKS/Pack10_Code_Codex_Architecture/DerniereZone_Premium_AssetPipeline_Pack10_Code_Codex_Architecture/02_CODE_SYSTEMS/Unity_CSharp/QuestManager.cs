using System.Collections.Generic;
using UnityEngine;
using DerniereZone.Core;

namespace DerniereZone.Quests
{
    public class QuestManager : MonoBehaviour
    {
        private readonly Dictionary<string, int> questStates = new();

        public void StartQuest(string questId)
        {
            if (!questStates.ContainsKey(questId))
                questStates[questId] = 0;

            EventBus.QuestUpdated(questId);
        }

        public void AdvanceQuest(string questId)
        {
            if (!questStates.ContainsKey(questId))
                questStates[questId] = 0;

            questStates[questId]++;
            EventBus.QuestUpdated(questId);
        }

        public int GetQuestState(string questId)
        {
            return questStates.TryGetValue(questId, out var state) ? state : -1;
        }
    }
}
