// Modal functionality
const modal = document.getElementById('downloadModal');
const closeBtn = document.querySelector('.close');

// Close modal when clicking the close button
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Download buttons will work as normal links without any JavaScript interference

// Smooth scrolling for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'instant'
                });
            }
        }
    });
});

// Add loading animation to screenshots
const screenshots = document.querySelectorAll('.screenshot-item img');
screenshots.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
        this.style.opacity = '0.5';
        this.alt = 'Screenshot not available';
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Prottoyi 26 Landing Page Loaded');
    
    // Sections visible immediately, no animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'none';
    });
});
