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
//Contact form validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Stop page reload

  // Basic validation
  const name = form.elements['name'].value.trim();
  const email = form.elements['_replyto'].value.trim();
  const message = form.elements['message'].value.trim();

  if (!name || !email || !message) {
    formMessage.innerHTML = "<p style='color: red;'>Please fill out all fields before submitting.</p>";
    return;
  }

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formMessage.innerHTML = "<p style='color: #00ffe0;'>Thanks for your message! I'll get back to you soon. 🚀</p>";
      form.reset();
    } else {
      formMessage.innerHTML = "<p style='color: red;'>Oops! There was a problem submitting your form.</p>";
    }
  } catch (error) {
    formMessage.innerHTML = "<p style='color: red;'>Error! Please try again later.</p>";
  }
});


const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();


