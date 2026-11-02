// PERSONALIZA TUS DATOS AQUÍ. Deja en blanco lo que aún no quieras publicar.
const contacto = {
  email: '', // Ejemplo: 'hola@tudominio.com'
  github: '', // Ejemplo: 'https://github.com/tuusuario'
  whatsapp: '' // Número internacional sin + ni espacios. Ejemplo México: '5215512345678'
};

const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
document.querySelectorAll('.links a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menú');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const emailLink = document.querySelector('#email-link');
const githubLink = document.querySelector('#github-link');
const whatsappLink = document.querySelector('#whatsapp-link');
if (contacto.email.trim()) {
  emailLink.href = `mailto:${contacto.email.trim()}`;
  emailLink.textContent = 'Enviar correo ↗';
} else emailLink.hidden = true;
if (/^https:\/\/github\.com\/[A-Za-z0-9-]+\/?$/.test(contacto.github.trim())) {
  githubLink.href = contacto.github.trim();
  githubLink.textContent = 'Ver mi GitHub ↗';
  githubLink.target = '_blank';
  githubLink.rel = 'noopener noreferrer';
} else githubLink.hidden = true;
if (/^\d{10,15}$/.test(contacto.whatsapp.trim())) {
  whatsappLink.href = `https://wa.me/${contacto.whatsapp.trim()}`;
  whatsappLink.hidden = false;
  whatsappLink.target = '_blank';
  whatsappLink.rel = 'noopener noreferrer';
}
if (contacto.email || contacto.github || contacto.whatsapp) document.querySelector('#contact-note').hidden = true;
