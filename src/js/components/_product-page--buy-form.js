const buyBtns = document.querySelectorAll('.general-info__btn-buy');
const modalCloseBtn = document.querySelector('.form-modal__btn-exit');
const modalOverlay = document.querySelector('.form-modal__overlay');
const modalWindow = document.querySelector('.form-modal__form');

if (buyBtns) {
  buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener('click', () => {
      modalWindow.classList.add('form-modal__form--visible');
      modalOverlay.classList.add('form-modal__overlay--visible');
    })
  })
}

if (modalOverlay) {
  modalCloseBtn.addEventListener('click', () => {
    modalWindow.classList.remove('form-modal__form--visible');
    modalOverlay.classList.remove('form-modal__overlay--visible');
  })

  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalWindow.classList.remove('form-modal__form--visible');
      modalOverlay.classList.remove('form-modal__overlay--visible');
    }
  })
}

const form = document.querySelector('.form-modal__form');
const sendBtn = document.querySelector('.form-modal__btn');

const submitModalCloseBtn = document.querySelector('.submit-modal__btn-exit');
const submitModalOverlay = document.querySelector('.submit-modal__overlay');
const submitModalWindow = document.querySelector('.submit-modal__modal');


if (form) {
  const inputPhone = document.querySelector('#phone');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(inputPhone);

  new window.JustValidate('.form-modal__form', {
    rules: {
      phone: {
        required: true,
        function: () => {
          const phone = inputPhone.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      }
    },
    colorWrong: '#FF6972',
    messages: {
      name: {
        required: 'Недопустимый формат',
      },
      phone: {
        required: 'Недопустимый формат',
        phone: 'Недопустимый формат',
        function: 'Недопустимый формат',
      },
    },
  })

  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    submitModalWindow.classList.add('submit-modal__modal--visible');
    submitModalOverlay.classList.add('submit-modal__overlay--visible');
  })

  if (submitModalOverlay) {
    submitModalCloseBtn.addEventListener('click', () => {
      submitModalWindow.classList.remove('submit-modal__modal--visible');
      submitModalOverlay.classList.remove('submit-modal__overlay--visible');
    })

    submitModalOverlay.addEventListener('click', (e) => {
      if (e.target == submitModalOverlay) {
        submitModalWindow.classList.remove('submit-modal__modal--visible');
        submitModalOverlay.classList.remove('submit-modal__overlay--visible');
      }
    })
  }
}
