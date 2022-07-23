const sidebarCheckboxes = document.querySelectorAll('.sidebar-checkbox');


const chosenFiltersWrapperDesktop = document.querySelector('.main-catalog__top-wrapper--desktop');
const chosenFiltersWrapperTablet = document.querySelector('.main-catalog__top-wrapper--tablet');
let adaptive;

const inputMin = document.getElementById('input-min');
const inputMax = document.getElementById('input-max');
const inputs = [inputMin, inputMax];

if (inputMin) {
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      adaptive = window.screen.width > 1100 ? chosenFiltersWrapperDesktop : chosenFiltersWrapperTablet;

      const chosenFilter = document.createElement('div');
      chosenFilter.classList.add('chosen-element');
      chosenFilter.style.backgroundColor = '#FFF5D1';

      const chosenText = document.createElement('span');
      if (input.classList.contains('filter-price__input--min')) {
        chosenText.textContent = 'От ' + input.value;
      } else {
        chosenText.textContent = 'До ' + input.value;
      }

      chosenText.classList.add('chosen-element__text');
      chosenFilter.append(chosenText);

      const chosenClose = document.createElement('button');
      chosenClose.classList.add('chosen-element__close-btn', 'btn-reset');
      chosenClose.addEventListener('click', () => {
        chosenFilter.remove();
      });
      chosenFilter.append(chosenClose);
      adaptive.append(chosenFilter);
    })
  })

  function createFilterElement() {
    sidebarCheckboxes.forEach((sidebarCheckbox) => {
      sidebarCheckbox.addEventListener('click', () => {
        adaptive = window.screen.width > 1100 ? chosenFiltersWrapperDesktop : chosenFiltersWrapperTablet;
        const checkboxInput = sidebarCheckbox.querySelector('.sidebar-checkbox__input');
        const checkboxName = sidebarCheckbox.querySelector('.sidebar-checkbox__content');

        if (checkboxInput.checked) {
          const chosenFilter = document.createElement('div');
          chosenFilter.classList.add('chosen-element');

          if (sidebarCheckbox.parentNode.parentNode.parentNode.classList.contains('sidebar-filter--category')) {
            chosenFilter.style.backgroundColor = '#DAFFD1';
          }
          if (sidebarCheckbox.parentNode.parentNode.parentNode.classList.contains('sidebar-filter--discount')) {
            chosenFilter.style.backgroundColor = '#EBD1FF';
          }
          if (sidebarCheckbox.parentNode.parentNode.parentNode.classList.contains('sidebar-filter--color')) {
            chosenFilter.style.backgroundColor = '#EAEAEA';
          }

          const chosenText = document.createElement('span');
          chosenText.textContent = checkboxName.textContent;
          chosenText.classList.add('chosen-element__text');
          chosenFilter.append(chosenText);

          const chosenClose = document.createElement('button');
          chosenClose.classList.add('chosen-element__close-btn', 'btn-reset');
          chosenClose.addEventListener('click', () => {
            chosenFilter.remove();
          });
          chosenFilter.append(chosenClose);
          adaptive.append(chosenFilter);
        }
      })
    })
  }
  createFilterElement();
}
