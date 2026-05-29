// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 80){
    header.classList.add('scrolled');
  } else{
    header.classList.remove('scrolled');
  }

});