document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeSwitcher = document.getElementById('theme-switcher');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);
    
    themeSwitcher.addEventListener('change', function() {
        const newTheme = this.checked ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('show');
                
                // Update active link
                document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Resume download button
    const resumeBtn = document.getElementById('resume-btn');
    resumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real implementation, this would link to your resume PDF
        alert('Resume download would start here in a real implementation');
    });
    
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
    
    
    
    
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Glow effect on click for about container
    const aboutContainer = document.querySelector('.glow-container');
    aboutContainer.addEventListener('click', function() {
        this.classList.add('active-glow');
        setTimeout(() => {
            this.classList.remove('active-glow');
        }, 1000);
    });
    
    // Rotate icons on hover
    const rotateIcons = document.querySelectorAll('.rotate-icon');
    rotateIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(360deg)';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });

    // Project card glow effect on click
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.add('glow');
            setTimeout(() => {
                card.classList.remove('glow');
            }, 1000); // Duration of the animation
        });
    });
});

function toggleMoreExperience() {
    const moreExperience = document.getElementById('more-experience');
    const moreBtn = document.getElementById('more-btn');
    if (moreExperience.style.display === 'none') {
        moreExperience.style.display = 'block';
        moreBtn.textContent = 'Less';
    } else {
        moreExperience.style.display = 'none';
        moreBtn.textContent = 'More';
    }
}
document.querySelector('.home-image img').addEventListener('click', function() {
    this.classList.add('pressed');
    setTimeout(() => this.classList.remove('pressed'), 300);
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
