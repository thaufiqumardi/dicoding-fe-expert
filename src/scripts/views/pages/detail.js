import { createRestaurantDetailTemplate } from '../template-creator';
import UrlParser from '../../routes/url-parser';
// import LikeButtonInitiator from '../../utils/like-button-initiator';
import RestarurantsSource from '../../data/restaurants-source';
import CategoryRestaurantInitiator from '../../utils/category-initiator';
import MenusRestaurantInitiator from '../../utils/menus-initiator';
import ReviewsInitiator from '../../utils/reviews-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="content" tabindex="0">
       
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestarurantsSource.detailRestaurants(url.id);
    const pageContainer = document.querySelector('#restaurant');
    const min = 10000;
    const max = 150000;
    Object.keys(restaurant.menus).forEach((menu) => {
      restaurant.menus[menu] = Object.values(restaurant.menus[menu]).map((menuData) => ({
        ...menuData,
        price: Math.floor(Math.random() * (max - min + 1)) + min,
        pictureId: (Math.floor(Math.random() * (20 - 1)) + 1).toString().padStart(2, '0'),
        description: 'Lorem ipsum dolor sit amet conseqtuar aselole aselole',
      }));
    });
    pageContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    CategoryRestaurantInitiator.init({
      categoriesContainer: document.querySelector('.categories_container'),
      categories: restaurant.categories,
    });
    MenusRestaurantInitiator.init({
      menusContainer: document.querySelector('#menus'),
      menus: restaurant.menus,
    });
    ReviewsInitiator.init({
      reviewsContainer: document.querySelector('.customer_reviews_container'),
      review: restaurant.customerReviews,
    });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
