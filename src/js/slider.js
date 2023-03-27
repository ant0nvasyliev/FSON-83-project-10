//const swiper = new Swiper('.swiper', {
// Optional parameters
// direction: 'horizontal',
// loop: true,

// If we need pagination
// pagination: {
//   el: '.swiper-pagination',
//   clickable: true,
//  },
//  slidesPerView: 4,
//spaceBetween: 18,

// Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.6,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});
