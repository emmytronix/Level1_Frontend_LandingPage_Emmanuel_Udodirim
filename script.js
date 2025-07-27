document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Sticky Navigation
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme or use system preference
    let currentTheme = localStorage.getItem('theme') || 
                     (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    });

    // Section Navigation
    const sections = {
        home: document.querySelector('#home'),
        about: document.querySelector('.about-section'),
        solutions: document.querySelector('.solutions-section'),
        gameStudio: document.querySelector('.game-studio-section'),
        bootcamp: document.querySelector('.bootcamp-section'),
        contact: document.querySelector('.contact-section'),
        whatWeOffer: document.querySelector('.what-we-offer'),
        cta: document.querySelector('.cta-section')
    };

    // Show section with animation
    function showSection(sectionId) {
        // Hide all sections except home and what-we-offer
        Object.values(sections).forEach(section => {
            if (section) {
                section.style.display = 'none';
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'none';
            }
        });
        
        // Show the selected section
        const sectionToShow = sections[sectionId] || 
                             (sectionId === 'game-studio' && sections.gameStudio);
        
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
            setTimeout(() => {
                sectionToShow.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                sectionToShow.style.opacity = '1';
                sectionToShow.style.transform = 'translateY(0)';
            }, 10);
        }
        
        // Always show home section when clicking home link
        if (sectionId === 'home') {
            sections.home.style.display = 'block';
            sections.whatWeOffer.style.display = 'block';
            sections.cta.style.display = 'block';
            setTimeout(() => {
                sections.home.style.opacity = '1';
                sections.home.style.transform = 'translateY(0)';
                sections.whatWeOffer.style.opacity = '1';
                sections.whatWeOffer.style.transform = 'translateY(0)';
                sections.cta.style.opacity = '1';
                sections.cta.style.transform = 'translateY(0)';
            }, 10);
        }
    }

    // Set up click handlers for navigation
    document.querySelectorAll('.nav-list a, .read-more').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                showSection(targetId);
                
                // Smooth scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Show home section by default
    showSection('home');
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log('Form submitted:', { name, email, subject, message });
            
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Animation on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.offer-card, .division-card, .value-item, .process-step, .service-item, .track-card, .format-card, .highlight-item, .benefit-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.offer-card, .division-card, .value-item, .process-step, .service-item, .track-card, .format-card, .highlight-item, .benefit-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Plan Card Hover Effect
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px)';
        });
    });
});

// =============================================
// Educational Clone Project - Not for Commercial Use
// Original design concept from BivyTech
// Coded from scratch by EMMANUEL UDODIRIM @ 2025
// =============================================