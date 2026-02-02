
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (form && successMessage) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

   
    successMessage.style.display = "none";
    successMessage.offsetHeight; 

    successMessage.style.display = "flex";
    form.reset();

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 4000);
  });
}


const revealElements = document.querySelectorAll('.section');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
