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
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      feedback.textContent = 'Por favor, preencha nome, email e mensagem.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = 'Por favor, informe um email válido.';
      return;
    }

    feedback.textContent = `Obrigado, ${name}! Em breve entraremos em contato.`;
    form.reset();
  });
}
