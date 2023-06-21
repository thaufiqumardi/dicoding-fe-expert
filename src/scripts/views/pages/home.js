// import { createRestaurantDetailTemplate } from '../template-creator';
// import UrlParser from '../../routes/url-parser';
// import TheMovieDbSource from '../../data/themoviedb-source';
// import LikeButtonInitiator from '../../utils/like-button-initiator';

import RestarurantsSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../template-creator';

const Home = {
  async render() {
    return `
      <div class="hero" tabindex="0">
        <div class="hero__inner">
          <h1 class="hero__title">Pasti Enak Resto</h1>
          <p class="hero__tagline">We serve Indonesia Cuisine so you can enjoy Beautiful Indonesia.</p>
        </div>
      </div>
      <section class="content" tabindex="0">
        <div class="content__header">
          <h2>Our Best Offering</h2>
          <p>
            Our menu is always served with the freshest and premium ingredients originally from Indonesia.
          </p>
        </div>
        <div class="content__body" id="card_container"></div>
      </section>
    `;
  },

  async afterRender() {
    const { restaurants } = await RestarurantsSource.listRestaurants();
    const cardContainer = document.querySelector('#card_container');
    restaurants.forEach((item) => {
      cardContainer.innerHTML += createRestaurantItemTemplate(item);
    });
  },
};

export default Home;
