const specialSwiperDOM = document.querySelector('.special__swiper');
if (specialSwiperDOM) {
  const specialSwiper = new Swiper(specialSwiperDOM, {
    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: {
      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },

      850: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 33,
      },
    },

    navigation: {
      nextEl: '.special__swiper-button-next',
      prevEl: '.special__swiper-button-prev',
    },
  });
}
