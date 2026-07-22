const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const cartCount = document.getElementById('cart-count');
const toast = document.getElementById('toast');
let itemsInCart = 0;
let toastTimer;

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

document.querySelectorAll('.add-button').forEach((button) => button.addEventListener('click', () => {
  itemsInCart += 1;
  cartCount.textContent = itemsInCart;
  showToast(`${button.dataset.product} se agregó al carrito.`);
}));

document.getElementById('filter-button').addEventListener('click', () => {
  showToast('Mostrando todos los productos disponibles.');
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.currentTarget.nombre.value.trim();
  document.getElementById('form-message').textContent = `¡Gracias, ${name}! Te responderemos muy pronto.`;
  event.currentTarget.reset();
});
