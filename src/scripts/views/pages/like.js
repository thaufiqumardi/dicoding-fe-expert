import { createRestaurantItemTemplate } from '../template-creator';
import FavoriteRestoIdb from '../../data/favourite-restos-idb';

const Like = {
  async render() {
    return `
    <section class="content" tabindex="0">
      <div class="content__header">
        <h2>Your Favourite Restaurants</h2>
      </div>
      <div class="content__body" id="fav_restaurants"></div>
    </section>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    const restaurantsContainer = document.querySelector('#fav_restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
