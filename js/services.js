/**
 * Services Page Interactive Elements
 * Includes loading animation, scroll effects, and service card interactions
 */

// Main initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // Loading Animation
    // ======================
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate content loading (2.5s duration)
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2500);

    // ======================
    // Service Card Animations
    // ======================
    const serviceCards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // ======================
    // Service Card Interactions
    // ======================
    const detailButtons = document.querySelectorAll('.btn-service-details');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceCard = this.closest('.service-card');
            const serviceType = serviceCard.dataset.service;
            
            // Visual feedback
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
            
            // Show service modal
            const serviceData = {
                web: {
                    title: "Web Development",
                    description: "Comprehensive web solutions using modern frameworks and technologies.",
                    techStack: [
                        { name: "React", icon: "fab fa-react", proficiency: 90 },
                        { name: "Vue", icon: "fab fa-vuejs", proficiency: 85 },
                        { name: "Node.js", icon: "fab fa-node-js", proficiency: 80 }
                    ]
                },
                // Other service types would follow same pattern
            };

            const data = serviceData[serviceType] || {
                title: serviceType,
                description: "Premium digital solutions",
                techStack: []
            };

            const modal = document.createElement('div');
            modal.className = 'service-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title">${data.title}</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <p>${data.description}</p>
                    <div class="tech-stack-container">
                        ${data.techStack.map(tech => `
                            <div class="tech-item">
                                <i class="${tech.icon} tech-icon"></i>
                                <div>${tech.name}</div>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: ${tech.proficiency}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Animation
            setTimeout(() => modal.classList.add('active'), 10);
            
            // Close handler
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.remove();
                    document.body.style.overflow = '';
                }, 400);
            });
        });
        
        // Better hover/active states
        button.addEventListener('mousedown', () => {
            button.classList.add('active');
        });
        button.addEventListener('mouseup', () => {
            button.classList.remove('active');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('active');
        });
    });

    // ======================
    // Mobile Optimization
    // ======================
    function checkMobile() {
        if (window.innerWidth <= 768) {
            // Reduce animations on mobile
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    }
    
    window.addEventListener('resize', checkMobile);
    checkMobile();
});

// Performance optimization
window.addEventListener('load', function() {
    // Any post-load optimizations
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    }
});