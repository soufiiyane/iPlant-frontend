// Import Swiper styles and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Alpine.js and necessary plugins
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

// Import Swiper JS and its modules
import Swiper from 'swiper';

// Import ScrollReveal
import ScrollReveal from 'scrollreveal';

// Initialize Alpine.js with intersect plugin
export const initializeAlpine = () => {
    Alpine.plugin(intersect);
    window.Alpine = Alpine;
    Alpine.start();
};

// Initialize Swiper for testimonials
export const initializeTestimonialSwiper = () => {
    return new Swiper('.testimonial-01', {
        loop: true,
        spaceBetween: 50,
        centeredSlides: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
        },
    });
};

// Scroll Reveal initialization
export const initializeScrollReveal = () => {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        reset: false,
    });

    sr.reveal('.animate_top', {
        origin: 'top',
        interval: 100,
    });

    sr.reveal('.animate_left', {
        origin: 'left',
        interval: 100,
    });

    sr.reveal('.animate_right', {
        origin: 'right',
        interval: 100,
    });
};
