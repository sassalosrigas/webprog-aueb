document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the elements
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');

    // 2. Check if they exist (to avoid errors)
    if (menuBtn && nav) {
        
        // 3. Add Click Event
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent weird link behavior
            
            // Toggle the class 'active' on the navigation
            nav.classList.toggle('active');
        
        });
    } else {
        console.error("Menu elements not found!");
    }
});