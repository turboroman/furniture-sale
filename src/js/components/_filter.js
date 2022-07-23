const changeSelectCity = () => {
  let elements = document.querySelectorAll('.region-filter__select');

  elements.forEach(el => {
    new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
    })
  })
}

const changeSelectCategory = () => {
  const element = document.querySelector('.search__select');

  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  })
}


changeSelectCategory();
changeSelectCity();
