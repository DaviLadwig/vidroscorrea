// =========================
// GSAP
// =========================

gsap.registerPlugin(ScrollTrigger);

// =========================
// HERO
// =========================

gsap.from('.hero-content', {
    opacity: 0,
    y: 80,
    duration: 1.4,
    ease: 'power3.out'
});

// =========================
// ABOUT IMAGE
// =========================

gsap.to('.reveal-left', {
    scrollTrigger: {
        trigger: '.reveal-left',
        start: 'top 82%',
    },

    x: 0,
    opacity: 1,

    duration: 1.2,
    ease: 'power3.out'
});

// =========================
// ABOUT TEXT
// =========================

gsap.to('.reveal-right', {
    scrollTrigger: {
        trigger: '.reveal-right',
        start: 'top 82%',
    },

    x: 0,
    opacity: 1,

    duration: 1.2,
    delay: .2,
    ease: 'power3.out'
});

// =========================
// FEATURES
// =========================

gsap.to('.reveal-up', {
    scrollTrigger: {
        trigger: '.about-features',
        start: 'top 85%',
    },

    y: 0,
    opacity: 1,

    duration: 1,
    stagger: .15,

    ease: 'power3.out'
});