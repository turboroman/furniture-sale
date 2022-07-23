const form = document.querySelector('.form__form');

if (form) {
  const inputPhone = document.querySelector('#phone');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(inputPhone);

  new window.JustValidate('.form__form', {
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
      email: {
        required: 'Недопустимый формат',
        email: 'Недопустимый формат',
      },
    },
  })
}
