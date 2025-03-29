document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const contactForm = document.getElementById('mainContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;

            // Reset error states
            document.querySelectorAll('.input-container').forEach(container => {
                container.classList.remove('error');
            });

            // Validate name
            if (name.value.trim() === '') {
                name.parentElement.classList.add('error');
                isValid = false;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.parentElement.classList.add('error');
                isValid = false;
            }

            // Validate message
            if (message.value.trim() === '') {
                message.parentElement.classList.add('error');
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const btnText = submitBtn.querySelector('.btn-text');
                const btnIcon = submitBtn.querySelector('i');
                
                // Change button state
                btnText.textContent = 'Sending...';
                btnIcon.classList.remove('fa-paper-plane');
                btnIcon.classList.add('fa-spinner', 'fa-spin');
                submitBtn.disabled = true;

                // Simulate API call
                setTimeout(() => {
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'form-success';
                    successMessage.innerHTML = `
                        <i class="fas fa-check-circle"></i>
                        <p>Your message has been sent successfully!</p>
                    `;
                    contactForm.appendChild(successMessage);

                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    btnText.textContent = 'Send Message';
                    btnIcon.classList.remove('fa-spinner', 'fa-spin');
                    btnIcon.classList.add('fa-paper-plane');
                    submitBtn.disabled = false;

                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            }
        });
    }

    // Add ripple effect to form inputs on focus
    const inputs = document.querySelectorAll('.input-container input, .input-container textarea, .input-container select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const ripple = document.createElement('span');
            ripple.className = 'input-ripple';
            this.parentElement.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });

    // Add styles for input ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .input-ripple {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: radial-gradient(circle at center, rgba(0, 247, 255, 0.2) 0%, transparent 70%);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(1);
                opacity: 0;
            }
        }
        
        .input-container.error {
            animation: shake 0.5s ease-in-out;
        }
        
        .input-container.error .focus-border {
            background: #ff3860;
            width: 100%;
        }
        
        .input-container.error i {
            color: #ff3860;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
        
        .form-success {
            background: rgba(0, 200, 83, 0.1);
            border: 1px solid rgba(0, 200, 83, 0.3);
            border-radius: 8px;
            padding: 1rem;
            margin-top: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: fadeIn 0.5s ease;
        }
        
        .form-success i {
            color: #00c853;
            font-size: 1.2rem;
        }
        
        .form-success p {
            margin: 0;
            color: #00c853;
            font-weight: 500;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Animate contact info cards on scroll
    const infoCards = document.querySelectorAll('.info-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        cardObserver.observe(card);
    });

    // Add hover effect to map placeholder
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(0, 247, 255, 0.3)';
            this.style.transform = 'scale(1.01)';
        });
        
        mapPlaceholder.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            this.style.transform = '';
        });
    }
});