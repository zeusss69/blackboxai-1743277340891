// Initialize particle.js background
document.addEventListener('DOMContentLoaded', function() {
    // Mobile-optimized Particle Configuration
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": isMobile ? 40 : 80,
                "density": {
                    "enable": true,
                    "value_area": isMobile ? 1000 : 800
                }
            },
            "color": {
                "value": "#00f7ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f7ff",
                "opacity": 0.2,
                "width": 1,
                "blink": true,
                "warp": true
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Typewriter effect
    const typewriterText = document.querySelector('.typewriter');
    if (typewriterText) {
        const text = typewriterText.textContent;
        typewriterText.textContent = '';
        
        let i = 0;
        const speed = 50;
        
        function typeWriter() {
            if (i < text.length) {
                typewriterText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            const icon = this.querySelector('i');
            if (document.body.classList.contains('light-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Digital wiring animation between elements
    function createDigitalWiring() {
        const elements = document.querySelectorAll('.hero-content, .service-card, .info-card, .team-member');
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add('digital-wiring');
        svg.style.position = 'fixed';
        svg.style.top = '0';
        svg.style.left = '0';
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.style.pointerEvents = 'none';
        svg.style.zIndex = '1';
        document.body.appendChild(svg);

        function updateWiring() {
            // Clear previous paths
            while(svg.firstChild) svg.removeChild(svg.firstChild);
            
            // Create connections between elements
            for(let i = 0; i < elements.length - 1; i++) {
                const start = elements[i].getBoundingClientRect();
                const end = elements[i+1].getBoundingClientRect();
                
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                const startX = start.left + start.width/2;
                const startY = start.top + start.height/2;
                const endX = end.left + end.width/2;
                const endY = end.top + end.height/2;
                
                // Create a curved path
                const pathData = `M${startX},${startY} C${startX + 100},${startY} ${endX - 100},${endY} ${endX},${endY}`;
                path.setAttribute("d", pathData);
                path.setAttribute("stroke", "#00f7ff");
                path.setAttribute("stroke-width", "1");
                path.setAttribute("fill", "none");
                path.setAttribute("stroke-dasharray", "5,3");
                path.style.animation = "dash 1s linear infinite";
                svg.appendChild(path);
            }
        }

        // Initial wiring and update on scroll/resize
        updateWiring();
        window.addEventListener('scroll', updateWiring);
        window.addEventListener('resize', updateWiring);
    }

    // Add styles for wiring animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dash {
            to { stroke-dashoffset: -8; }
        }
        .digital-wiring path {
            filter: drop-shadow(0 0 2px #00f7ff);
        }
    `;
    document.head.appendChild(style);

    // Initialize wiring when page loads
    createDigitalWiring();

    // Handle navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault();
                window.location.href = href;
            }
        });
    });

    // Floating icons animation enhancement
    const floatingIcons = document.querySelectorAll('.icon-float');
    floatingIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.opacity = '1';
            this.style.textShadow = '0 0 15px #00f7ff';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.opacity = '0.8';
            this.style.textShadow = 'none';
        });
    });
});