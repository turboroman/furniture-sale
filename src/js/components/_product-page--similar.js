const similarSwiperDOM = document.querySelector('.similar__swiper');
if (similarSwiperDOM) {
  const similarSwiper = new Swiper(similarSwiperDOM, {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 16,

    breakpoints: {
      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },

      800: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },

      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 33,
      },
    },

    navigation: {
      nextEl: '.similar__swiper-button-next',
      prevEl: '.similar__swiper-button-prev',
    },
  });
}
