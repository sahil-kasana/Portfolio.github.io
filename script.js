var typed = new Typed(".multiple-text",{
    strings: ["Frontend Devloper", "Desigener", "Backend Devloper"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


const contactSection = document.querySelector('.contact');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

observer.observe(contactSection);


// JavaScript to toggle navbar visibility on smaller screens
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}
