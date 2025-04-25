// Hero Slider
const initSlider = () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const startSlideshow = () => {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            startSlideshow();
        });
    });

    startSlideshow();
};

// Join Section Slider
const initJoinSlider = () => {
    const slides = document.querySelectorAll('.join-slide');
    const dots = document.querySelectorAll('.join-slider-dot');
    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const startSlideshow = () => {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            startSlideshow();
        });
    });

    startSlideshow();
};

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    initJoinSlider();
});

// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    cursorFollower.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    // Observe section titles
    document.querySelectorAll('.section-title').forEach(el => {
        observer.observe(el);
    });

    // Observe cards
    document.querySelectorAll('.card').forEach(el => {
        observer.observe(el);
    });

    // Observe grid items
    document.querySelectorAll('.grid-item').forEach(el => {
        observer.observe(el);
    });

    // Observe section content
    document.querySelectorAll('.section-content').forEach(el => {
        observer.observe(el);
    });

    // Add is-inview class to hero elements immediately
    document.querySelectorAll('.hero-title, .hero-subtitle').forEach(el => {
        el.classList.add('is-inview');
    });
});

// Navigation hide/show on scroll
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('-hidden');
    } else {
        nav.classList.remove('-hidden');
    }
    lastScrollY = window.scrollY;
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Split text animation
class TextSplitter {
    constructor(element) {
        this.element = element;
        this.words = [];
        this.chars = [];
        this.split();
    }

    split() {
        const text = this.element.textContent.trim();
        const words = text.split(' ');
        let html = '';

        words.forEach((word, wordIndex) => {
            html += '<span class="word">';
            word.split('').forEach((char, charIndex) => {
                html += `<span class="char -i-${charIndex}">${char}</span>`;
            });
            html += '</span> ';
        });

        this.element.innerHTML = html;
        this.words = this.element.querySelectorAll('.word');
        this.chars = this.element.querySelectorAll('.char');
    }
}

// Initialize text splitting
document.querySelectorAll('.hero-title, .section-title').forEach(el => {
    new TextSplitter(el);
});

// Initialize MaterializeCSS Components
document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidenav
    const sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);

    // Initialize form select elements
    const selectElems = document.querySelectorAll('select');
    M.FormSelect.init(selectElems);

    // Initialize textareas
    const textareaElems = document.querySelectorAll('.materialize-textarea');
    M.textareaAutoResize(textareaElems);
});

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                firstName: document.getElementById('first_name').value,
                lastName: document.getElementById('last_name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            console.log('Form submitted:', formData);
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('nav-open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('nav-open');
    });
});

// Logo scroll to top
document.querySelector('.nav-logo').addEventListener('click', (e) => {
    // Only prevent default if we're already on the homepage (index.html)
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    // If we're on another page, let the link navigate normally to index.html
});

// Scroll to Top
const scrollTopButton = document.querySelector('.scroll-top');

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopButton.style.opacity = '1';
        scrollTopButton.style.visibility = 'visible';
    } else {
        scrollTopButton.style.opacity = '0';
        scrollTopButton.style.visibility = 'hidden';
    }
});

// News Category Filter
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-button');
    const newsCards = document.querySelectorAll('.news-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.dataset.category;

            // Show all cards if 'all' category is selected
            if (category === 'all') {
                newsCards.forEach(card => {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                });
                return;
            }

            // Filter cards based on category
            newsCards.forEach(card => {
                if (card.dataset.category === category) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        
        // Here you would typically send this to your backend
        console.log('Newsletter subscription:', email);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for subscribing to our newsletter!';
        newsletterForm.appendChild(successMessage);
        
        // Clear form
        newsletterForm.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
}

// Load More Functionality
const loadMoreButton = document.querySelector('.load-more');
if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
        // This is where you would typically fetch more news items from your backend
        // For now, we'll just show a message
        loadMoreButton.textContent = 'Loading...';
        setTimeout(() => {
            loadMoreButton.textContent = 'No More Updates';
            loadMoreButton.disabled = true;
        }, 1000);
    });
} 