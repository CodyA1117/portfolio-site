const sections = document.querySelectorAll('section');

window.addEventListener('scroll', revealSections);

function revealSections() {
  const triggerBottom = window.innerHeight * 0.8; // 80% down the screen

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}
