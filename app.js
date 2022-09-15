const hamburger = document.querySelector('.hamburger');
const navul = document.querySelector('.navul');
const nav = document.querySelector('.navcontainer');
const screen = window.matchMedia("(min-width: 768px)");

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

screen.addEventListener('change', ()=> {
  if(screen.matches){
    hamburger.classList.remove('active');
    navul.classList.remove('active');
    nav.classList.remove('active');
  }
});