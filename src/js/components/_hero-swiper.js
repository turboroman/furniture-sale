const heroSwiperDOM = document.querySelector('.hero__swiper');
if (heroSwiperDOM) {
  const heroSwiper = new Swiper(heroSwiperDOM, {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}
