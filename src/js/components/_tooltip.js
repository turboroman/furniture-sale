const tooltip = document.querySelector('.form__tooltip');
if (tooltip) {
  tippy(tooltip, {
    content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
    theme: '#333333',
    // arrow: Wide,
  });
}
