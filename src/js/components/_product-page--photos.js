const bigImgs = document.querySelectorAll('.js-open-modal');

const modalImgBig = document.querySelector('.imgs-modal__big');
const modalImgs = document.querySelectorAll('.js-modal-imgs');
const modalCloseBtn = document.querySelector('.imgs-modal__btn-exit');
const modalOverlay = document.querySelector('.imgs-modal__overlay');
const modalWindow = document.querySelector('.imgs-modal__modal');

if (bigImgs) {
  bigImgs.forEach(bigImg => {
    bigImg.addEventListener('click', () => {
      modalWindow.classList.add('imgs-modal__modal--visible');
      modalOverlay.classList.add('imgs-modal__overlay--visible');
    })
  })
}

if (modalOverlay) {
  modalCloseBtn.addEventListener('click', () => {
    modalWindow.classList.remove('imgs-modal__modal--visible');
    modalOverlay.classList.remove('imgs-modal__overlay--visible');
  })

  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalWindow.classList.remove('imgs-modal__modal--visible');
      modalOverlay.classList.remove('imgs-modal__overlay--visible');
    }
  })
}

const verticalImgsSwiper = new Swiper('.imgs__swiper--vert', {
  slidesPerView: 'auto',
  slidesPerGroup: 4,
  spaceBetween: 18,
  freeMode: true,
  watchSlidesProgress: true,

  direction: 'vertical',
});

const littleImgsSwiper = new Swiper('.imgs__swiper--little', {
  slidesPerView: 2.4,
  slidesPerGroup: 2,
  spaceBetween: 38,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    500: {
      slidesPerView: 'auto',
      slidesPerGroup: 4,
      spaceBetween: 18,
      direction: 'vertical',
    },
    900: {
      slidesPerView: 3.5,
      slidesPerGroup: 4,
      spaceBetween: 38,
      direction: 'horizontal',
    },
    1300: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 38,
      direction: 'horizontal',
    },
  },
});

const bigImgsSwiper = new Swiper('.imgs__swiper--big', {
  spaceBetween: 10,
  thumbs: {
    // swiper: [littleImgsSwiper, verticalImgsSwiper]
    swiper: littleImgsSwiper,
  },
});

const littleImgsModalSwiper = new Swiper('.imgs-modal__swiper--little', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 78,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    800: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1300: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
  navigation: {
    nextEl: '.imgs-modal__swiper-button-next',
    prevEl: '.imgs-modal__swiper-button-prev',
  },
});

const bigImgsModalSwiper = new Swiper('.imgs-modal__swiper--big', {
  spaceBetween: 80,
  thumbs: {
    swiper: littleImgsModalSwiper,
  },
});

