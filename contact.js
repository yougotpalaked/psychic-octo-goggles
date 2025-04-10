// DOM Elements
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const sendAnotherBtn = document.getElementById('sendAnother');
const formGroups = document.querySelectorAll('.form-group');

// Form Validation
function validateForm() {
    let isValid = true;
    
    // Clear previous errors
    formGroups.forEach(group => {
        group.classList.remove('error');
        const errorMessage = group.querySelector('.error-message');
        errorMessage.textContent = '';
    });
    
    // Validate Name
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    }
    
    // Validate Email
    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate Subject
    const subjectInput = document.getElementById('subject');
    if (subjectInput.value.trim() === '') {
        showError(subjectInput, 'Subject is required');
        isValid = false;
    }
    
    // Validate Message
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

// Show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorMessage.textContent = message;
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form Submit Event
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        // Simulate form submission (in a real app, you would send data to a server)
        setTimeout(() => {
            // Show success message
            formSuccess.classList.add('active');
            
            // Reset form
            contactForm.reset();
        }, 1000);
    }
});

// Send Another Message Button
sendAnotherBtn.addEventListener('click', () => {
    formSuccess.classList.remove('active');
});

// Input focus event to clear errors when user starts typing
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = '';
    });
});