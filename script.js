const menuBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const icon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

function toggleMenu() {
    mobileMenu.classList.remove('active');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
}

