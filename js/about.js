document.addEventListener('DOMContentLoaded', function() {
    // Animate stats counting up
    const statNumbers = document.querySelectorAll('.stat-number');
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const steps = Math.floor(animationDuration / frameDuration);
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            stat.textContent = Math.floor(current);
        }, frameDuration);
    });

    // Team member hover effects
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            const image = this.querySelector('.member-image');
            image.style.transform = 'scale(1.05)';
            image.style.boxShadow = '0 0 30px rgba(0, 247, 255, 0.5)';
        });
        
        member.addEventListener('mouseleave', function() {
            const image = this.querySelector('.member-image');
            image.style.transform = '';
            image.style.boxShadow = '0 0 20px rgba(0, 247, 255, 0.3)';
        });
    });

    // Mission section parallax effect
    const missionSection = document.querySelector('.mission-section');
    if (missionSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const missionOffset = missionSection.offsetTop;
            const missionHeight = missionSection.offsetHeight;
            
            if (scrollPosition > missionOffset - window.innerHeight / 1.5 && 
                scrollPosition < missionOffset + missionHeight) {
                const imageContainer = document.querySelector('.image-container');
                const offset = (scrollPosition - missionOffset) * 0.3;
                imageContainer.style.transform = `translateY(${offset}px)`;
            }
        });
    }

    // Value cards animation on scroll
    const valueCards = document.querySelectorAll('.value-card');
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    valueCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        valueObserver.observe(card);
    });

    // Glitch effect enhancement
    const glitch = document.querySelector('.glitch');
    if (glitch) {
        setInterval(() => {
            glitch.style.animation = 'none';
            void glitch.offsetWidth; // Trigger reflow
            glitch.style.animation = '';
        }, 8000);
    }

    // Add floating effect to mission image
    const missionImage = document.querySelector('.image-container');
    if (missionImage) {
        let floatDirection = 1;
        setInterval(() => {
            const currentY = parseFloat(missionImage.style.transform?.replace('translateY(', '') || '0');
            const newY = currentY + (floatDirection * 0.5);
            
            if (Math.abs(newY) > 10) {
                floatDirection *= -1;
            }
            
            missionImage.style.transform = `translateY(${newY}px)`;
        }, 50);
    }
});

// Add dynamic background to team section
const teamSection = document.querySelector('.team-section');
if (teamSection) {
    const canvas = document.createElement('div');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.overflow = 'hidden';
    teamSection.style.position = 'relative';
    teamSection.appendChild(canvas);
    
    // Create floating dots
    for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '5px';
        dot.style.height = '5px';
        dot.style.backgroundColor = 'rgba(0, 247, 255, 0.3)';
        dot.style.borderRadius = '50%';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        
        // Animation
        const duration = 10 + Math.random() * 20;
        dot.style.animation = `float ${duration}s linear infinite`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        
        canvas.appendChild(dot);
    }
    
    // Add keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}