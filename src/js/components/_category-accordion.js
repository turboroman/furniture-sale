const sidebarTitle = document.querySelector('.sidebar__title');
if (sidebarTitle) {
  const categoryBtn = document.querySelector('.js-category-btn');
  categoryBtn.disabled = true;
  const categoryList = document.querySelector('.sidebar-filter--category');

  const priceBtn = document.querySelector('.js-price-btn');
  priceBtn.disabled = true;
  const priceList = document.querySelector('.sidebar-filter--price');

  const discountBtn = document.querySelector('.js-discount-btn');
  discountBtn.disabled = true;
  const discountList = document.querySelector('.sidebar-filter--discount');

  const colorBtn = document.querySelector('.js-color-btn');
  colorBtn.disabled = true;
  const colorList = document.querySelector('.sidebar-filter--color');

  function openList(btn, list) {
    btn.disabled = false;

    btn.addEventListener('click', () => {
      if (window.innerWidth < 1100) {
        const parent = btn.parentNode;
        const opened = document.querySelector('.sidebar-filter.is-open');

        if (opened && !parent.classList.contains('is-open')) {
          opened.classList.remove('is-open');
        }
        list.classList.toggle('is-open');
      }
    });
  }

  document.body.addEventListener('click', function (evt) {
    const opened = document.querySelector('.sidebar-filter.is-open');

    if (!evt.target.closest('.sidebar-filter') && opened) {
      opened.classList.remove('is-open');
    }
  })

  sidebarTitle.textContent = 'Фильтры:';

  openList(categoryBtn, categoryList);
  openList(priceBtn, priceList);
  openList(discountBtn, discountList);
  openList(colorBtn, colorList);
}
