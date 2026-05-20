const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const year = document.getElementById('year');
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (form && feedback) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    if (!name) {
      feedback.textContent = 'Por favor, informe seu nome.';
      return;
    }
    feedback.textContent = `Obrigado, ${name}! Retornaremos seu contato em breve.`;
    form.reset();
  });
}
