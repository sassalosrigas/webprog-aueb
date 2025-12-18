/* =========================================
   MODAL FUNCTIONALITY
   ========================================= */

// Open modal by ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

// Close modal by ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }
}

// Close all modals
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
        modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    // Close modal when clicking outside content area
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            // Only close if clicking on the modal backdrop, not content
            if (e.target === modal) {
                const modalId = modal.id;
                closeModal(modalId);
            }
        });
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Setup modal close buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.dataset.closeModal;
            closeModal(modalId);
        });
    });

    // Setup modal open triggers
    document.querySelectorAll('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.dataset.openModal;
            openModal(modalId);
        });
    });
});
