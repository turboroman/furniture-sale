const cards = document.querySelectorAll('.high-rating__special-card');
const btn = document.querySelector('.high-rating__btn');

if (cards) {
  cards.forEach(card => card.style.display = 'none');

  const windowWidth = window.innerWidth;
  let shownCards = 0;
  let addingCards;

  if (windowWidth > 1200) {
    addingCards = 8;
  } else {
    addingCards = 6;
  }

  showMoreCards(shownCards);

  function showMoreCards(cardsAmount) {
    let firstHiddenIndex = cardsAmount;
    cardsAmount += addingCards;
    if (cardsAmount > cards.length) cardsAmount = cards.length;
    for (let i = firstHiddenIndex; i < cardsAmount; i++) {
      cards[i].style.display = 'flex';
    }
    return shownCards += addingCards;
  }

  if (btn) {
    btn.addEventListener('click', () => {
      showMoreCards(shownCards);
      if (shownCards > cards.length) btn.style.display = 'none';
    })
  }
}
