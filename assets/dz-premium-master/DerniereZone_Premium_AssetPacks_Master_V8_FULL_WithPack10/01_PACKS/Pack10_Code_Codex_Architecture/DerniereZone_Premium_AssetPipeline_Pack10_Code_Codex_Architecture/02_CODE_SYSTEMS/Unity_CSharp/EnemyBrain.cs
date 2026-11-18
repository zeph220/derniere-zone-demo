using UnityEngine;

namespace DerniereZone.Enemies
{
    public enum EnemyState
    {
        Idle,
        Patrol,
        Suspicious,
        Investigate,
        Alert,
        Chase,
        Attack,
        Search,
        Return,
        Stagger,
        Dead
    }

    public class EnemyBrain : MonoBehaviour
    {
        [SerializeField] private EnemyState currentState = EnemyState.Idle;
        [SerializeField] private Transform player;

        public EnemyState CurrentState => currentState;

        private void Update()
        {
            TickState();
        }

        private void TickState()
        {
            switch (currentState)
            {
                case EnemyState.Idle:
                    break;
                case EnemyState.Chase:
                    // TODO: move toward player/last seen position.
                    break;
                case EnemyState.Attack:
                    // TODO: play attack animation.
                    break;
            }
        }

        public void SetState(EnemyState next)
        {
            if (currentState == next) return;
            currentState = next;
            Debug.Log($"[EnemyBrain] State changed to {next}");
        }
    }
}
