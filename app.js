const hamburger = document.querySelector('.hamburger');
const navul = document.querySelector('.navul');
const nav = document.querySelector('.navcontainer');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navul.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('.navitem').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navul.classList.remove('active');
  nav.classList.remove('active');
}));