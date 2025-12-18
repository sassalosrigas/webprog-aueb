/* =========================================
   RESPONSIVE UTILITIES & MOBILE MENU
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');

    if (menuBtn && nav) {
        // Open/Close menu on button click
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
            }
        });
    }

    // Handle window resize - close menu on desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav) {
            nav.classList.remove('active');
        }
    });
});

/* =========================================
   RESPONSIVE UTILITIES
   ========================================= */

// Detect current breakpoint
function getCurrentBreakpoint() {
    const width = window.innerWidth;
    
    if (width < 768) {
        return 'mobile';
    } else if (width < 1024) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

// Execute function based on breakpoint
function onBreakpoint(breakpointName, callback) {
    if (getCurrentBreakpoint() === breakpointName) {
        callback();
    }
}

// Debounced resize handler
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Trigger any resize-dependent functionality here
        // Currently handled by CSS media queries
    }, 250);
});
