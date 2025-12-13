/**
 * Mobile Menu Toggle
 * Handles responsive navigation menu for mobile devices
 */

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    // Toggle menu on button click
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Close menu when a nav link is clicked
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = mainNav.contains(event.target) || mobileMenuBtn.contains(event.target);
        if (!isClickInside && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });

    // Close menu on window resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mainNav.classList.remove('active');
        }
    });
});
