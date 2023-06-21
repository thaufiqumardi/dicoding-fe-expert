import { createRestaurantDetailTemplate } from '../template-creator';
import UrlParser from '../../routes/url-parser';
// import LikeButtonInitiator from '../../utils/like-button-initiator';
import RestarurantsSource from '../../data/restaurants-source';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="content" tabindex="0">
       
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    console.log('fetch data');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestarurantsSource.detailRestaurants(url.id);
    const pageContainer = document.querySelector('#restaurant');
    pageContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   movie: {
    //     id: movie.id,
    //     title: movie.title,
    //     overview: movie.overview,
    //     backdrop_path: movie.backdrop_path,
    //     vote_average: movie.vote_average,
    //   },
    // });
  },
};

export default Detail;
