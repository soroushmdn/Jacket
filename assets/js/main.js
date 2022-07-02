// @@@@@@@@@@@@@@@@@ preloader @@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 2500);
};

// @@@@@@@@@@@@@@@@@ change header background @@@@@@@@@@@@@@@@@

const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// @@@@@@@@@@@@@@@@@ show scrollup @@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollUp);
function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

//  @@@@@@@@@@@@@@@@@@ swiperjs.com @@@@@@@@@@@@@@@@@@

const productsSwiper = new Swiper('.products__swiper', {
  spaceBetween: 25,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    576: {
      slidesPerView: 3,
    },

    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

//  @@@@@@@@@@@@@@@@@@ scrollrevealjs.org @@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 300,
});

sr.reveal(`.new__container ,.products__swiper`);

sr.reveal(`.brands__img,.footer__content`, {
  interval: 200,
});

sr.reveal(`.home__data,.collection__data-right,.collection__img-left`, {
  origin: 'left',
});
sr.reveal(
  `.home__img-big,.home__img-small,.collection__data-left,.collection__img-right`,
  {
    origin: 'right',
  }
);
