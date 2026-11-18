using UnityEngine;

namespace DerniereZone.Gameplay
{
    public class InteractionSystem : MonoBehaviour
    {
        [SerializeField] private Camera playerCamera;
        [SerializeField] private float interactDistance = 3f;
        [SerializeField] private LayerMask interactableMask;

        private IInteractable currentTarget;

        private void Update()
        {
            Scan();
            if (Input.GetKeyDown(KeyCode.E) && currentTarget != null)
            {
                currentTarget.Interact();
            }
        }

        private void Scan()
        {
            currentTarget = null;
            if (Physics.Raycast(playerCamera.transform.position, playerCamera.transform.forward, out var hit, interactDistance, interactableMask))
            {
                currentTarget = hit.collider.GetComponent<IInteractable>();
            }
        }
    }

    public interface IInteractable
    {
        string Prompt { get; }
        void Interact();
    }
}
