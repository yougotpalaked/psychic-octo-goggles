// DOM Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Add click event to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter projects
        filterProjects(filterValue);
    });
});

// Filter projects function
function filterProjects(category) {
    projectCards.forEach(card => {
        // Get card category
        const cardCategory = card.getAttribute('data-category');
        
        // Show/hide based on category
        if (category === 'all' || category === cardCategory) {
            card.style.display = 'block';
            // Add animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Show all projects on initial load
    filterProjects('all');
});