import { createRestaurantItemTemplate } from '../template-creator';
import FavoriteMovieIdb from '../../data/favourite-movie-idb';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Movie</h2>
      <div id="movies" class="movies">
 
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
