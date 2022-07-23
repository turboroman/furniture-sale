const catalogSwiperDOM = document.querySelector('.main-catalog__swiper');
if (catalogSwiperDOM) {
  const catalogSwiper = new Swiper(catalogSwiperDOM, {
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid: {
      fill: 'row',
      rows: 3,
    },
    spaceBetween: 16,
    // loop: true,

    breakpoints: {
      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 3,
        },
        spaceBetween: 32,
      },

      850: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 3,
        },
        spaceBetween: 32,
      },
    },
    pagination: {
      el: ".main-catalog__swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
}
