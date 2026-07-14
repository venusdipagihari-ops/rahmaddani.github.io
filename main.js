// Intersection Observer to update active navigation link on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to corresponding link
      const activeId = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

console.log("Welcome to Rahmad Dani's Professional Portfolio!");
