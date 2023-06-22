import { createRestaurantItemTemplate } from '../template-creator';
import FavoriteMovieIdb from '../../data/favourite-movie-idb';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Favourite Restaurants</h2>
      <div id="fav_restaurants" class="fav_restaurants_container">
 
      </div>
    </div>
  `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');

    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default Like;
