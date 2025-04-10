// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const posts = document.querySelectorAll('.post');

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update icon based on theme
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // Add scroll animation to posts
    animateOnScroll();
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        nav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Scroll Animation Function
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Add initial hidden class to posts and other animatable elements
    const animatableElements = document.querySelectorAll('.post, .project-card, .profile-card, .skills-section, .experience-section, .education-section, .contact-form-container, .contact-info');
    
    animatableElements.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
}

// Add these classes to CSS
const style = document.createElement('style');
style.textContent = `
    .hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .show {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);