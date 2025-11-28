let userPoints = 0;
let userRank = "Newbie";

// DOM elements
const navMenu = document.getElementById('navMenu');
const hamburgerBtn = document.getElementById('hamburgerBtn');

// toogle hamburger for mobile menu
if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        // toggle class 'active' di ul nav-links
        navMenu.classList.toggle('active');
    });
}

// scroll smooth
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// update UI
function updateUI() {
    if (pointDisplayNav) pointDisplayNav.innerText = userPoints;
    if (pointDisplayBig) pointDisplayBig.innerText = userPoints;
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Terimakasih sudah mengirimkan pesan :)");
        contactForm.reset();
    });
}

// Top Up Button Handling
const btnTopUp = document.getElementById('btn-topup');
if (btnTopUp) {
    btnTopUp.addEventListener('click', function () {
        window.location.href = 'game.html';
    });
}