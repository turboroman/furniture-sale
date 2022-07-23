const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu');
// const burger = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  // burger.classList.toggle('open');
  burgerBtn.classList.toggle('active');
})
