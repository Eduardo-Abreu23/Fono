/* ---- Sticky header shadow ---- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

/* ---- Mobile hamburger ---- */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') nav.classList.toggle('open');
});
// Close on nav link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

/* ---- Scroll reveal ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- Form submit (demo) ---- */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target;
  btn.textContent = 'Mensagem enviada! ✦';
  btn.style.background = 'linear-gradient(135deg, var(--green), #7aa492)';
  setTimeout(() => {
    btn.textContent = 'Enviar Mensagem';
    btn.style.background = '';
  }, 3000);
}

/* ---- Smooth active nav highlight ---- */
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--green-mid)';
        }
      });
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

/* ---- Espaço: esconde placeholder quando imagem carrega ---- */
document.querySelectorAll('.espaco-img').forEach(img => {
  // Se a imagem carregar com sucesso, esconde o placeholder
  img.addEventListener('load', () => {
    const placeholder = img.closest('.espaco-img-wrap').querySelector('.espaco-placeholder');
    if (placeholder) placeholder.style.display = 'none';
  });
  // Se der erro (arquivo não existe), esconde a tag img e mantém placeholder
  img.addEventListener('error', () => {
    img.style.display = 'none';
  });
});

/* ---- Accordion ---- */
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    // Fecha todos
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
    // Abre o clicado (se estava fechado)
    if (!isOpen) item.classList.add('open');
  });
});