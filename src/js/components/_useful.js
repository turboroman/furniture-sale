const usefulSwiperDOM = document.querySelector('.useful__swiper');
if (usefulSwiperDOM) {
  const usefulSwiper = new Swiper(usefulSwiperDOM, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // autoHeight: true,
    // spaceBetween: 32,
    // loop: true,

    breakpoints: {
      450: {
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
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      }
    },

    navigation: {
      nextEl: '.useful__swiper-button-next',
      prevEl: '.useful__swiper-button-prev',
    },
  });
}
