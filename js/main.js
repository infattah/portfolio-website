// Main JavaScript for Abdul Fathah's Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize counters
    initCounters();
    
    // Initialize sliders
    initSliders();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize scroll effects
    initScrollEffects();
});

// Animation initialization
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Counter initialization
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // ms
                const startTime = performance.now();
                
                const updateCounter = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    
                    // Use easeOutQuart for smooth counting
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const currentValue = Math.floor(easeOutQuart * target);
                    
                    counter.textContent = currentValue;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                requestAnimationFrame(updateCounter);
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Slider initialization
function initSliders() {
    // Services slider
    initSlider('services-slider', 'services-prev', 'services-next');
    
    // Case studies slider
    initSlider('case-studies-slider', 'case-studies-prev', 'case-studies-next');
}

function initSlider(sliderId, prevId, nextId) {
    const slider = document.getElementById(sliderId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    let slides = slider.children;
    let slideWidth = slides[0].offsetWidth;
    let slideMargin = parseInt(window.getComputedStyle(slides[0]).marginRight);
    let sliderWidth = slider.parentElement.offsetWidth;
    let visibleSlides = Math.floor(sliderWidth / (slideWidth + slideMargin));
    let currentIndex = 0;
    let maxIndex = slides.length - visibleSlides;
    
    console.log(`[${sliderId}] Initial: slideWidth=${slideWidth}, slideMargin=${slideMargin}, sliderWidth=${sliderWidth}, visibleSlides=${visibleSlides}, maxIndex=${maxIndex}`);
    
    // Recalculate dimensions on window resize
    window.addEventListener('resize', () => {
        slideWidth = slides[0].offsetWidth;
        slideMargin = parseInt(window.getComputedStyle(slides[0]).marginRight);
        sliderWidth = slider.parentElement.offsetWidth;
        visibleSlides = Math.floor(sliderWidth / (slideWidth + slideMargin));
        maxIndex = Math.max(0, slides.length - visibleSlides);
        
        console.log(`[${sliderId}] Resize: slideWidth=${slideWidth}, slideMargin=${slideMargin}, sliderWidth=${sliderWidth}, visibleSlides=${visibleSlides}, maxIndex=${maxIndex}`);
        
        // Reset position if current index is out of bounds
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
            updateSliderPosition();
        }
    });
    
    // Previous button click
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        } else {
            // Bounce effect for edge case
            slider.style.transform = `translateX(10px)`;
            setTimeout(() => {
                slider.style.transform = `translateX(0px)`;
            }, 200);
        }
    });
    
    // Next button click
    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSliderPosition();
        } else {
            // Bounce effect for edge case
            const currentTransform = -(currentIndex * (slideWidth + slideMargin));
            slider.style.transform = `translateX(${currentTransform - 10}px)`;
            setTimeout(() => {
                slider.style.transform = `translateX(${currentTransform}px)`;
            }, 200);
        }
    });
    
    function updateSliderPosition() {
        const offset = -(currentIndex * (slideWidth + slideMargin));
        slider.style.transform = `translateX(${offset}px)`;
    }
    
    // Touch support for sliders
    let startX, moveX, initialPosition;
    let isDragging = false;
    
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        initialPosition = -(currentIndex * (slideWidth + slideMargin));
        isDragging = true;
        slider.style.transition = 'none';
    }, { passive: true });
    
    slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        moveX = e.touches[0].clientX;
        const diff = moveX - startX;
        slider.style.transform = `translateX(${initialPosition + diff}px)`;
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        slider.style.transition = 'transform 0.3s ease';
        
        const diff = moveX - startX;
        const threshold = slideWidth / 3;
        
        if (diff > threshold && currentIndex > 0) {
            currentIndex--;
        } else if (diff < -threshold && currentIndex < maxIndex) {
            currentIndex++;
        }
        
        updateSliderPosition();
    });
}

// Mobile menu initialization
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenuBtn || !navLinks) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // Toggle aria-expanded attribute for accessibility
        const isExpanded = navLinks.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close mobile menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// Scroll effects initialization
function initScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow and reduce height on scroll
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const parallaxOffset = scrollTop * 0.4;
            
            heroContent.style.transform = `translateY(${parallaxOffset}px)`;
            hero.style.backgroundPositionY = `${-parallaxOffset * 0.5}px`;
        });
    }
    
    // Initialize skill progress bars
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const progress = skillBar.getAttribute('data-progress');
                
                setTimeout(() => {
                    skillBar.style.width = progress + '%';
                }, 200);
                
                observer.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
