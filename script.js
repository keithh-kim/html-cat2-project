/**
 * StrathCloud Architecture Platform - Core JS Engine
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. CONTACT FORM VALIDATION ROUTINE
    // ==========================================================================
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            contactForm.classList.add("was-validated");
        }, false);
    }

    // ==========================================================================
    // 2. AWS COST ESTIMATOR CALCULATION ENGINE
    // ==========================================================================
    const calculatorForm = document.getElementById("calculatorForm");
    
    if (calculatorForm) {
        // Target Input Nodes
        const computeTier = document.getElementById("computeTier");
        const storageAmount = document.getElementById("storageAmount");
        const storageDisplay = document.getElementById("storageDisplay");
        const calculatorTotal = document.getElementById("calculatorTotal");

        // Fixed baseline pricing rules parameters
        const COST_PER_GB = 0.05; // $0.05 per GB of storage

        function calculateProjectCost() {
            // 1. Parse Compute Cost Selection
            const computeCost = parseFloat(computeTier.value) || 0;

            // 2. Parse Storage Slider Capacity and Update Label Text
            const storageGB = parseInt(storageAmount.value) || 0;
            storageDisplay.textContent = `${storageGB} GB`;
            const storageCost = storageGB * COST_PER_GB;

            // 3. Parse Support Radio Buttons (checks active selection state dynamically)
            const activeSupportRadio = document.querySelector('input[name="supportTier"]:checked');
            const supportCost = activeSupportRadio ? parseFloat(activeSupportRadio.value) : 0;

            // 4. Compute Cumulative Invoice Metrics
            const totalMonthlyBudget = computeCost + storageCost + supportCost;

            // 5. Output formatted localized string matrix back into UI
            calculatorTotal.innerHTML = `$${totalMonthlyBudget.toFixed(2)}<span class="text-secondary small" style="font-size: 0.9rem;">/mo</span>`;
        }

        // Bind interactive change triggers to input nodes
        computeTier.addEventListener("change", calculateProjectCost);
        storageAmount.addEventListener("input", calculateProjectCost); // 'input' fires instantly while dragging
        
        // Dynamically bind to support radio group changes
        document.querySelectorAll('input[name="supportTier"]').forEach(radio => {
            radio.addEventListener("change", calculateProjectCost);
        });

        // Initialize runtime calculations layout verification on immediate frame load
        calculateProjectCost();
    }

});