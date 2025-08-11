// Professional subscription calculator
document.addEventListener('DOMContentLoaded', function() {
    const durationInput = document.getElementById('duration');
    const playersInput = document.getElementById('players');
    const calculatedPriceElement = document.getElementById('calculatedPrice');
    const savingsTextElement = document.getElementById('savingsText');

    function calculatePrice() {
        const duration = parseInt(durationInput.value) || 1;
        const players = parseInt(playersInput.value) || 1;
        
        // Base price per player per month
        let basePrice = 1.00;
        
        // Calculate base cost
        let totalCost = players * duration * basePrice;
        
        // Apply professional pricing tiers
        let discount = 0;
        if (duration >= 6) {
            discount = 0.15; // 15% off for 6+ months
        } else if (duration >= 3) {
            discount = 0.10; // 10% off for 3+ months
        } else if (duration >= 2) {
            discount = 0.05; // 5% off for 2+ months
        }
        
        // Team size discounts
        if (players >= 10) {
            discount += 0.15; // Additional 15% off for large teams
        } else if (players >= 5) {
            discount += 0.10; // Additional 10% off for mid-size teams
        } else if (players >= 2) {
            discount += 0.05; // Additional 5% off for small teams
        }
        
        // Cap discount at 25% for enterprise pricing
        discount = Math.min(discount, 0.25);
        
        // Calculate final price
        const finalPrice = totalCost * (1 - discount);
        const savedAmount = totalCost - finalPrice;
        
        // Update display
        calculatedPriceElement.textContent = `$${finalPrice.toFixed(2)}`;
        
        if (discount > 0) {
            const discountPercentage = Math.round(discount * 100);
            savingsTextElement.textContent = `${discountPercentage}% Enterprise Discount - Save $${savedAmount.toFixed(2)}`;
            savingsTextElement.style.display = 'block';
        } else {
            savingsTextElement.style.display = 'none';
        }
    }

    // Add event listeners
    durationInput.addEventListener('input', calculatePrice);
    playersInput.addEventListener('input', calculatePrice);

    // Initial calculation
    calculatePrice();

    // Professional button interactions
    const subscribeButtons = document.querySelectorAll('.subscribe-btn');
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Professional loading animation
    const cards = document.querySelectorAll('.plan-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100 + 200);
    });

    // Add professional hover effects
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Professional intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Optional: AJAX price calculation (if you want to use the API route)
    async function calculatePriceAPI(players, duration) {
        try {
            const response = await fetch(`/api/calculate-price?players=${players}&duration=${duration}`);
            const data = await response.json();
            
            calculatedPriceElement.textContent = `$${data.finalPrice}`;
            
            if (data.discount > 0) {
                savingsTextElement.textContent = `${data.discount}% Enterprise Discount - Save $${data.savings}`;
                savingsTextElement.style.display = 'block';
            } else {
                savingsTextElement.style.display = 'none';
            }
        } catch (error) {
            console.error('Error calculating price:', error);
            // Fallback to client-side calculation
            calculatePrice();
        }
    }

    // Uncomment the lines below if you want to use the API instead of client-side calculation
    // durationInput.addEventListener('input', () => calculatePriceAPI(playersInput.value, durationInput.value));
    // playersInput.addEventListener('input', () => calculatePriceAPI(playersInput.value, durationInput.value));
});