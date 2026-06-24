/**
 * StrathCloud Architecture Platform - Core JS Engine
 */

/**
 * Initialize the contact form validation
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Target the Contact Validation Form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            // Check HTML5 structural rules validation
            if (!contactForm.checkValidity()) {
                event.preventDefault();    // Prevent page from hitting reload
                event.stopPropagation();   // Stop event bubbling leaks
            }
            
            // Turn on Bootstrap's error/success styling indicators
            contactForm.classList.add("was-validated");
        }, false);
    }

});