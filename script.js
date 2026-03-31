// ===================================
// MOBILE MENU TOGGLE
// ===================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 968) {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '#home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// ACTIVE NAVIGATION HIGHLIGHT
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
    
    // Highlight home when at top
    if (scrollY < 100) {
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
        });
        const homeLink = document.querySelector('.nav-menu a[href="#home"]');
        if (homeLink) homeLink.classList.add('active');
    }
}

window.addEventListener('scroll', highlightNavOnScroll);

// ===================================
// NAVBAR SHADOW ON SCROLL
// ===================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.dish-card, .testimonial-card, .info-card').forEach(el => {
    observer.observe(el);
});

// ===================================
// DISH CARD INTERACTIONS
// ===================================
const dishCards = document.querySelectorAll('.dish-card');

dishCards.forEach(card => {
    card.addEventListener('click', function() {
        // You can add modal or lightbox functionality here
        console.log('Dish card clicked:', this.querySelector('h3').textContent);
    });
});

// ===================================
// PARALLAX EFFECT ON HERO
// ===================================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    if (hero && scrolled <= hero.offsetHeight) {
        const rate = scrolled * 0.3;
        hero.style.backgroundPositionY = `${rate}px`;
    }
});

// ===================================
// LOADING ANIMATION
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// RESERVATION BUTTON FUNCTIONALITY
// ===================================
const reserveButtons = document.querySelectorAll('a[href="#contact"]');

reserveButtons.forEach(button => {
    if (button.textContent.includes('Reserve')) {
        button.addEventListener('click', function(e) {
            // You can add custom reservation modal or redirect to booking system
            console.log('Reserve a table clicked');
        });
    }
});

// ===================================
// PHONE NUMBER CLICK TRACKING
// ===================================
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.textContent);
        // You can add analytics tracking here
    });
});

// ===================================
// GET DIRECTIONS TRACKING
// ===================================
const directionsButton = document.querySelector('.btn-primary[href*="maps.google"]');

if (directionsButton) {
    directionsButton.addEventListener('click', () => {
        console.log('Get Directions clicked');
        // You can add analytics tracking here
    });
}

// ===================================
// SOCIAL MEDIA LINK SETUP
// ===================================
// Update these with actual social media URLs
const socialLinks = {
    instagram: 'https://instagram.com/kushmandi',
    facebook: 'https://facebook.com/kushmandi',
    zomato: 'https://zomato.com/kushmandi',
    swiggy: 'https://swiggy.com/kushmandi'
};

// Apply social media links
document.querySelectorAll('.social-links a').forEach(link => {
    const text = link.textContent.toLowerCase();
    if (socialLinks[text]) {
        link.href = socialLinks[text];
    }
});

// ===================================
// TESTIMONIAL CAROUSEL
// ===================================
function initTestimonialCarousel() {
    const testimonialTrack = document.querySelector('.testimonials-track');
    const prevArrow = document.querySelector('.testimonial-arrow-left');
    const nextArrow = document.querySelector('.testimonial-arrow-right');

    if (!testimonialTrack || !prevArrow || !nextArrow) {
        return;
    }

    const getScrollAmount = () => testimonialTrack.offsetWidth * 0.85;

    prevArrow.addEventListener('click', () => {
        testimonialTrack.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextArrow.addEventListener('click', () => {
        testimonialTrack.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    testimonialTrack.addEventListener('wheel', event => {
        if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) {
            event.preventDefault();
            testimonialTrack.scrollBy({ left: event.deltaY, behavior: 'smooth' });
        }
    });
}

// ===================================
// MENU ITEM MODAL (OPTIONAL ENHANCEMENT)
// ===================================
function createMenuModal() {
    // This function can be used to create a modal for dish details
    const modal = document.createElement('div');
    modal.className = 'menu-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;
    
    document.body.appendChild(modal);
    
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Initialize modal (uncomment to enable)
// createMenuModal();

// ===================================
// FORM VALIDATION (if you add a reservation form)
// ===================================
function validateReservationForm(formElement) {
    const name = formElement.querySelector('[name="name"]');
    const phone = formElement.querySelector('[name="phone"]');
    const email = formElement.querySelector('[name="email"]');
    
    let isValid = true;
    
    if (name && name.value.trim() === '') {
        isValid = false;
        name.style.borderColor = '#ff0000';
    }
    
    if (phone && phone.value.trim() === '') {
        isValid = false;
        phone.style.borderColor = '#ff0000';
    }
    
    return isValid;
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--accent-gold);
        color: var(--primary-black);
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(212, 165, 116, 0.4);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'scale(1)';
    });
}

// Enable scroll to top button
createScrollToTop();

// ===================================
// GALLERY SLIDER & LIGHTBOX
// ===================================
const galleryImages = [
    'image1.webp', 'image2.webp', 'image3.webp', 'image4.webp', 'image5.webp',
    'image6.webp', 'image7.webp', 'image8.webp', 'image9.webp', 'image10.webp',
    'image11.webp', 'image12.webp', 'image13.webp', 'image14.webp', 'image15.webp',
    'image16.webp', 'image17.webp', 'image18.webp', 'image19.webp', 'image20.webp',
    'image21.webp', 'image22.webp', 'image23.webp', 'image24.webp', 'image25.webp',
    'image26.webp'
];

let currentModalIndex = 0;

function initGallery() {
    const galleryTrack = document.querySelector('.gallery-track');
    const slider = document.querySelector('.gallery-slider');
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalImg = galleryModal?.querySelector('.gallery-modal-image');
    const galleryModalCaption = galleryModal?.querySelector('.gallery-modal-caption');
    const galleryModalClose = galleryModal?.querySelector('.gallery-modal-close');
    const galleryModalPrev = galleryModal?.querySelector('.gallery-modal-prev');
    const galleryModalNext = galleryModal?.querySelector('.gallery-modal-next');

    if (!galleryTrack || !slider || !galleryModal || !galleryModalImg || !galleryModalCaption) {
        return;
    }

    galleryTrack.innerHTML = '';
    galleryImages.forEach((filename, index) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'gallery-item';
        item.setAttribute('aria-label', `Open gallery image ${index + 1}`);
        item.innerHTML = `
            <img src="../images/${filename}" alt="Kush Mandi gallery image ${index + 1}" loading="lazy" />
        `;
        item.addEventListener('click', () => openGalleryModal(index));
        galleryTrack.appendChild(item);
    });

    const prevArrow = document.querySelector('.gallery-arrow-left');
    const nextArrow = document.querySelector('.gallery-arrow-right');
    const scrollStep = () => galleryTrack.offsetWidth * 0.8;

    prevArrow?.addEventListener('click', () => {
        galleryTrack.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
    });

    nextArrow?.addEventListener('click', () => {
        galleryTrack.scrollBy({ left: scrollStep(), behavior: 'smooth' });
    });

    function updateModal(index) {
        currentModalIndex = (index + galleryImages.length) % galleryImages.length;
        galleryModalImg.src = `../images/${galleryImages[currentModalIndex]}`;
        galleryModalImg.alt = `Kush Mandi gallery image ${currentModalIndex + 1}`;
        galleryModalCaption.textContent = `Photo ${currentModalIndex + 1} of ${galleryImages.length}`;
    }

    function openGalleryModal(index) {
        updateModal(index);
        galleryModal.classList.add('active');
        galleryModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeGalleryModal() {
        galleryModal.classList.remove('active');
        galleryModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    galleryModalClose?.addEventListener('click', closeGalleryModal);
    galleryModalPrev?.addEventListener('click', () => openGalleryModal(currentModalIndex - 1));
    galleryModalNext?.addEventListener('click', () => openGalleryModal(currentModalIndex + 1));

    galleryModal.addEventListener('click', event => {
        if (event.target === galleryModal) {
            closeGalleryModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (!galleryModal.classList.contains('active')) return;
        if (event.key === 'Escape') {
            closeGalleryModal();
        }
        if (event.key === 'ArrowLeft') {
            openGalleryModal(currentModalIndex - 1);
        }
        if (event.key === 'ArrowRight') {
            openGalleryModal(currentModalIndex + 1);
        }
    });
}

// ===================================
// INITIALIZE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🍽️ Kush Mandi website loaded successfully!');
    
    // Set initial active state
    highlightNavOnScroll();
    
    // Initialize testimonial carousel
    initTestimonialCarousel();

    // Initialize gallery slider and lightbox
    initGallery();
});

// ===================================
// RESIZE HANDLER
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 968 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }, 250);
});

// ===================================
// PREVENT FORM RESUBMISSION
// ===================================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

console.log('✨ All JavaScript features initialized for Kush Mandi');
