import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/medium.css';
import '../styles/small.css';

const data = require('../public/data/DATA.json')
const drawerButton = document.querySelector('#hamburger');
const drawer = document.querySelector('#drawer');
const body = document.querySelector("body");
const listContainer = document.querySelector('#card_container');

drawerButton.addEventListener('click', (e) => {
  e.stopPropagation();
  if(drawer.classList.value === 'open') {
    drawer.classList.remove('open');
    return
  }
  drawer.classList.add('open');
});

body.addEventListener('click', () => {
  if(drawer.classList.value === 'open') {
    drawer.classList.remove('open');
    return
  }
})

data.restaurants.map(item => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  const cardHtml = `
    <div class="card__image__container" tabindex="0">
      <img src="${item.pictureId}" alt="${item.name}" />
      <span>${item.city}</span>
    </div>
    <div class="card__body">
      <div class="card__rating__container" tabindex="0">
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>Rating: ${item.rating}</span>
      </div>
      <h3 tabindex="0">${item.name}</h3>
      <p tabindex="0">${item.description}</p>
    </div>
  `
  cardElement.insertAdjacentHTML('beforeend', cardHtml);
  listContainer.appendChild(cardElement);
})