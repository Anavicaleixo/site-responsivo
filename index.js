const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('nav .nav-list');

mobileMenu.addEventListener('click', () => {
navList.classList.toggle('active');
});