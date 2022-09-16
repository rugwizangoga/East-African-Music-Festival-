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

const performers = [
  {
    name: 'Diamond Platnumz',
    contry: 'Tanzania',
    specialization: 'Bongo flava',
    image: '',
    description: 'Nasibu Abdul Juma Issack (born 2 October 1989), popularly known by his stage name Diamond Platnumz, is a Tanzanian bongo flava recording artist, dancer, philanthropist and a businessman.',
  },
  {
    name: 'Bruce Melodie',
    contry: 'Rwanda',
    specialization: 'R&B',
    image: '',
    description: 'Itahiwacu Bruce (born 2 March 1992), commonly known as Bruce Melodie is a Rwandan singer and songwriter and a winner of Primus Guma Guma Superstar seasons 8 (PGGSS)',
  },
  {
    name: 'Akothee',
    contry: 'Kenya',
    specialization: 'Benga',
    description: 'Esther Akoth (born 8 April 1983[1]), better known as Akothee, is a Kenyan musician and businesswoman. She is the founder of Akothee Safaris, a tour company based in Kenya, the Akothee Foundation, a charity, and Aknotela and Akothee Homes, a real estate business.',
  },
  {
    name: 'Butera Knowless',
    contry: 'Rwanda',
    specialization: 'R&B',
    image: '',
    description: 'Knowless (born Jeanne d’Arc Ingabire Butera) is a Rwandan singer. She has one husband called clement and they have two girls children',
  },
  {
    name: 'Rema',
    contry: 'Nigeria',
    specialization: 'Afrobeats',
    image: '',
    description: 'Divine Ikubor (born 1 May 2000),[1] popularly known by his stage name Rema is a Nigerian musician, rapper and performing artist',
  },
  {
    name: 'Kansiime Anne',
    contry: 'Uganda',
    specialization: 'Comedian',
    image: '',
    description: 'Kansiime Kubiryaba Anne (born 13 April 1986) and popularly known as Anne Kansiime, is a Ugandan entertainer, comedian, and actress.',
  }
];