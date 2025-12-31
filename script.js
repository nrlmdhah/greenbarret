// Initialize Animation on Scroll (AOS)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: true, // Animation happens only once while scrolling down
        offset: 100, // Trigger point
        duration: 800, // Animation speed in ms
    });
});

// Mobile Menu Toggle logic
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Close menu automatically when a link is clicked (UX for mobile)
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navUl.classList.contains('active')) {
            navUl.classList.remove('active');
        }
    });
});

// SERVICES Section Swiper Initialization
const servicesSwiper = new Swiper('.services-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});
